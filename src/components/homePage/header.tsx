"use client"
import { Button } from "@/components/ui/button";
import { Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm z-50 sticky top-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <Image src="/logo.png" alt="logo" />
                    </div>
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link href="/home" className="text-white bg-primary transition-colors py-3.5 px-5">Home</Link>
                        <Link href="/about" className="text-white bg-primary transition-colors py-3.5 px-5">About</Link>
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        Need help?<span className="underline text-primary">contact@example.com</span>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-green-600"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
                <div className="w-full md:block hidden mt-4 pb-4">
                    <div className="w-lg border px-1 flex rounded-sm">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <Image alt="search-icon" src="/header/menuserch.svg" className="px-3 py-1 border-r" />
                        <div className="flex items-center justify-between w-full">
                            <input type="text" placeholder="Search for product..." className="border-none bg-background outline-none px-4" />
                            <Button size="icon" variant="default">
                                <Search />
                            </Button>
                        </div>
                    </div>
                </div>
                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t">
                        <nav className="px-4 py-4 space-y-3">
                            <a href="#" className="block text-gray-700 hover:text-green-600 transition-colors">Home</a>
                            <a href="#" className="block text-gray-700 hover:text-green-600 transition-colors">About</a>
                            <a href="#" className="block text-gray-700 hover:text-green-600 transition-colors">Services</a>
                            <a href="#" className="block text-gray-700 hover:text-green-600 transition-colors">Menu</a>
                            <a href="#" className="block text-gray-700 hover:text-green-600 transition-colors">Contact</a>
                            <Button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full mt-4">
                                Get Started
                            </Button>
                        </nav>
                    </div>
                )}
            </div>
            <div>

            </div>
        </header>
    );
}