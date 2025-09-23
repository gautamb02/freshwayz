"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Quote } from "lucide-react";

export default function HappyClients() {
    const testimonials = [
        {
            text: "Switching to Freshwayz was the best decision for my health. Their juices are delicious, and I feel more energetic every day!",
            name: "Aditi",
            role: "IT Professional",
            img: "/homePage/clients/img1.png", // replace with your client image path
        },
        {
            text: "The products are top quality and delivery is always on time. Highly recommended!",
            name: "Rahul",
            role: "Marketing Manager",
            img: "/homePage/clients/img1.png",
        },
        {
            text: "I love the variety of juices and the freshness. It has become part of my daily routine.",
            name: "Sneha",
            role: "Doctor",
            img: "/homePage/clients/img1.png",
        },
    ];

    return (
        <section className="max-w-6xl mx-auto px-6 py-16">
            {/* Title */}
            <div className="flex items-center justify-center mb-12">
                <div className="h-[4px] w-1/2 bg-green-600 hidden md:block"></div>
                <h2 className="mx-6 text-2xl md:text-3xl font-bold text-center text-nowrap">
                    Happy Clients
                </h2>
                <div className="h-[4px] w-1/2 bg-green-600 hidden md:block"></div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-2 gap-12 items-center">
                {/* Left: Slider */}
                <div>
                    <Swiper
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        spaceBetween={30}
                        className="w-full"
                    >
                        {testimonials.map((t, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="text-left">
                                    <Quote className="w-10 h-10 text-gray-300 mb-4" />
                                    <p className="text-gray-700 italic mb-6">&apos;{t.text}&apos;</p>

                                    {/* Author */}
                                    <div className="flex items-center gap-3">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={t.img}
                                            alt={t.name}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                        <div>
                                            <h4 className="font-semibold text-gray-900">{t.name}</h4>
                                            <p className="text-sm text-gray-500">{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Right: Illustration Image */}
                <div className="flex justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/homePage/clients/cover.png" // replace with your actual illustration
                        alt="cover"
                        className="max-w-md w-full"
                    />
                </div>
            </div>
        </section>
    );
}
