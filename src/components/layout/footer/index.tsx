// app/components/Footer.tsx
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-50 text-gray-800 mt-12">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Download App */}
                <div>
                    <h3 className="font-semibold mb-4 text-lg">Download our app</h3>
                    <div className="space-y-3">
                        <a
                            href="#"
                            className="block bg-gray-900 text-white px-4 py-2 rounded-lg text-center"
                        >
                            Download on the App Store
                        </a>
                        <a
                            href="#"
                            className="block bg-gray-900 text-white px-4 py-2 rounded-lg text-center"
                        >
                            Download on Google Play
                        </a>
                    </div>
                    <p className="mt-6">Follow us on social media:</p>
                    <div className="flex space-x-4 mt-2">
                        <FaFacebookF />
                        <FaInstagram />
                        <FaPinterestP />
                        <FaYoutube />
                        <FaTwitter />
                    </div>
                </div>

                {/* Need Help */}
                <div>
                    <h3 className="font-semibold mb-4 text-lg">Need help</h3>
                    <p>+88012345678910</p>
                    <p>+88012345678910</p>
                    <a href="mailto:contact@example.com" className="text-green-600">
                        contact@example.com
                    </a>
                </div>

                {/* Customer */}
                <div>
                    <h3 className="font-semibold mb-4 text-lg">Customer</h3>
                    <ul className="space-y-2">
                        <li><a href="#">My account</a></li>
                        <li><a href="#">My orders</a></li>
                        <li><a href="#">Return orders</a></li>
                        <li><a href="#">Wishlist</a></li>
                    </ul>
                </div>

                {/* Information */}
                <div>
                    <h3 className="font-semibold mb-4 text-lg">Information</h3>
                    <ul className="space-y-2">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Shipping & return</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Use</a></li>
                    </ul>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 py-6">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 space-y-4 md:space-y-0">
                    <p>Copyright © 2024 GOQuick. All Rights Reserved</p>

                    <div className="flex flex-wrap justify-center space-x-6 text-center">
                        <span>🚚 Delivery from 2-4 hour</span>
                        <span>🛡 Quality assurance</span>
                        <span>⏰ 24/7 delivery service</span>
                    </div>

                    <div className="flex space-x-3">
                        <Image src="/visa.svg" alt="Visa" width={40} height={24} />
                        <Image src="/mastercard.svg" alt="Mastercard" width={40} height={24} />
                        <Image src="/bkash.svg" alt="Bkash" width={40} height={24} />
                        <Image src="/nagad.svg" alt="Nagad" width={40} height={24} />
                        <Image src="/rocket.svg" alt="Rocket" width={40} height={24} />
                    </div>
                </div>
            </div>
        </footer>
    );
}
