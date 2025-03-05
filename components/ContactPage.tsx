"use client"
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from '@mui/icons-material/Description';
import EmailIcon from "@mui/icons-material/Email";
import { Tooltip } from "@mui/material";

const NUM_CIRCLES = 50;
const MAX_DISTANCE = 100;
const COLORS = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-purple-500", "bg-pink-500", "bg-orange-500"];
const SPEED = 2.5;
const REPULSION_STRENGTH = 0.1;
const RETURN_SPEED = 0.05;
const BOUNCE_RANDOMNESS = 0.3; // Adds some random variation to bounces
const DIRECTION_CHANGE_PROBABILITY = 0.001; // Chance to randomly change direction each frame

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3, // stagger each child by 0.3 seconds
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
};

const childVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
};

const ContactPage = () => {
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
    const [circles, setCircles] = useState<{ x: number; y: number; velocityX: number; velocityY: number; baseVelocityX: number; baseVelocityY: number; color: string }[]>([]);

    useEffect(() => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });

        // Initialize circles towards the center more often
        setCircles(
            Array.from({ length: NUM_CIRCLES }, () => {
                // Use gaussian-like distribution for initial positions
                const centerBiasX = (Math.random() + Math.random() + Math.random()) / 3;
                const centerBiasY = (Math.random() + Math.random() + Math.random()) / 3;

                return {
                    x: window.innerWidth * centerBiasX,
                    y: window.innerHeight * centerBiasY,
                    velocityX: (Math.random() - 0.5) * SPEED,
                    velocityY: (Math.random() - 0.5) * SPEED,
                    baseVelocityX: (Math.random() - 0.5) * SPEED,
                    baseVelocityY: (Math.random() - 0.5) * SPEED,
                    color: COLORS[Math.floor(Math.random() * COLORS.length)],
                };
            })
        );

        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        let animationFrameId: number;

        const animate = () => {
            setCircles(prevCircles =>
                prevCircles.map(circle => {
                    let newX = circle.x + circle.velocityX;
                    let newY = circle.y + circle.velocityY;
                    let newVelocityX = circle.velocityX;
                    let newVelocityY = circle.velocityY;
                    let newBaseVelocityX = circle.baseVelocityX;
                    let newBaseVelocityY = circle.baseVelocityY;

                    // Random direction change
                    if (Math.random() < DIRECTION_CHANGE_PROBABILITY) {
                        newBaseVelocityX = (Math.random() - 0.5) * SPEED;
                        newBaseVelocityY = (Math.random() - 0.5) * SPEED;
                    }

                    // Gradually return to base velocity
                    newVelocityX += (newBaseVelocityX - newVelocityX) * RETURN_SPEED;
                    newVelocityY += (newBaseVelocityY - newVelocityY) * RETURN_SPEED;

                    // Bounce off walls with randomness
                    if (newX <= 0 || newX >= windowSize.width) {
                        newVelocityX = -newVelocityX * (1 + (Math.random() - 0.5) * BOUNCE_RANDOMNESS);
                        newBaseVelocityX = -newBaseVelocityX * (1 + (Math.random() - 0.5) * BOUNCE_RANDOMNESS);
                        newX = newX <= 0 ? 0 : windowSize.width;

                        // Add slight vertical momentum when bouncing off sides
                        newVelocityY += (Math.random() - 0.5) * SPEED;
                    }

                    if (newY <= 0 || newY >= windowSize.height) {
                        newVelocityY = -newVelocityY * (1 + (Math.random() - 0.5) * BOUNCE_RANDOMNESS);
                        newBaseVelocityY = -newBaseVelocityY * (1 + (Math.random() - 0.5) * BOUNCE_RANDOMNESS);
                        newY = newY <= 0 ? 0 : windowSize.height;

                        // Add slight horizontal momentum when bouncing off top/bottom
                        newVelocityX += (Math.random() - 0.5) * SPEED;
                    }

                    // Ensure velocities don't get too extreme
                    const maxSpeed = SPEED * 2;
                    newVelocityX = Math.max(Math.min(newVelocityX, maxSpeed), -maxSpeed);
                    newVelocityY = Math.max(Math.min(newVelocityY, maxSpeed), -maxSpeed);

                    return {
                        ...circle,
                        x: newX,
                        y: newY,
                        velocityX: newVelocityX,
                        velocityY: newVelocityY,
                        baseVelocityX: newBaseVelocityX,
                        baseVelocityY: newBaseVelocityY,
                    };
                })
            );
            animationFrameId = requestAnimationFrame(animate);
        };

        if (circles.length > 0) {
            animationFrameId = requestAnimationFrame(animate);
        }

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [circles.length, windowSize]);

    useEffect(() => {

        const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
            setCircles((prevCircles) =>
                prevCircles.map((circle) => {
                    const dx = e.clientX - circle.x;
                    const dy = e.clientY - circle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < MAX_DISTANCE) {
                        const force = (1 - distance / MAX_DISTANCE) * REPULSION_STRENGTH;
                        const newVelocityX = circle.velocityX - dx * force;
                        const newVelocityY = circle.velocityY - dy * force;

                        return {
                            ...circle,
                            velocityX: newVelocityX,
                            velocityY: newVelocityY,
                        };
                    }
                    return circle;
                })
            );
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);


    return (
        <div className="w-full h-screen relative bg-gray-900 overflow-hidden">
            <div className="absolute inset-0 backdrop-blur-lg"/>
            {circles.map((circle, index) => (
                <motion.div
                    key={index}
                    className={`absolute w-40 h-40 rounded-full opacity-70 ${circle.color}`}
                    style={{
                        x: circle.x,
                        y: circle.y,
                    }}
                />
            ))}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-md"/>
            <div className="flex z-10 relative font-lexend text-white items-center justify-center min-h-screen">
                <motion.div
                    className="flex flex-col items-center"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    transition={{ duration: 1 }}
                >
                    <motion.h1 variants={itemVariants} className="text-center text-6xl font-bold">
                        Let&apos;s get in touch!
                    </motion.h1>
                    <motion.div className="flex gap-8 mt-14">
                        <Tooltip title="LinkedIn">
                        <Link href="https://www.linkedin.com/in/dillan-pho/" target="_blank">
                        <motion.div
                            variants={childVariants}
                            className="w-14 h-14 flex items-center justify-center p-5 rounded-md bg-gray-500 transition-all duration-300 hover:bg-[#0077B5] hover:w-32 hover:rounded-lg"
                        >


                                <LinkedInIcon sx={{ color: "white", fontSize: 48}} />

                        </motion.div>
                    </Link>
                        </Tooltip>
                        <Tooltip title="Email">
                            <Link href="mailto:dillanpho@dilloh.com">
                        <motion.div
                            variants={childVariants}
                            className="w-14 h-14 flex items-center justify-center p-5 rounded-md bg-gray-500 transition-all duration-300 hover:bg-[#EA4335] hover:w-32 hover:rounded-lg"
                        >


                                <EmailIcon sx={{ color: "white", fontSize: 48 }} />

                        </motion.div>
                            </Link>
                        </Tooltip>
                        <Tooltip title="Resume">
                            <Link href="/DILLAN_RESUME (4).pdf">
                        <motion.div
                            variants={childVariants}
                            className="w-14 h-14 flex items-center justify-center p-5 rounded-md bg-gray-500 transition-all duration-300 hover:bg-[#FD7E14] hover:w-32 hover:rounded-lg"
                        >
                                <DescriptionIcon sx={{ color: "white", fontSize: 48 }} />

                        </motion.div>
                            </Link>
                            </Tooltip>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactPage;