export default function FeaturesSection() {
    return (
        <section className="w-full flex justify-between px-16 py-16 bg-white gap-12">
            {/* Left Column */}
            <div className="w-1/3 flex flex-col justify-between items-center gap-12">
                {/* Top Circle */}
                <div className="w-72 h-72  mt-12 bg-lime-300 rounded-full flex items-center justify-center p-8 text-center">
                    <p className="text-gray-800 text-lg leading-relaxed">
                        Simplify healthy eating with ready-to-drink juices, salads and variety of natural and organic products.
                    </p>
                </div>
                {/* Bottom Circle */}
                <div className="w-72 h-72 bg-gray-100 rounded-full flex items-center justify-center p-8 text-center">
                    <p className="text-gray-800 text-base leading-relaxed">
                        Foster a supportive community of like-minded individuals who prioritize wellness. Community building program.
                    </p>
                </div>
            </div>

            {/* Center Column */}
            <div className="w-1/3 flex flex-col items-center gap-12">
                {/* Top Oval Image */}
                <div className="w-72 h-[400px] ">
                    <img
                        src="/about/bottle-bag.png"
                        alt="Grocery Bag"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Bottom Circle Image */}
                <div className="w-72 h-72 rounded-full overflow-hidden shadow-md">
                    <img
                        src="/about/veg-bag.png"
                        alt="Reusable Bag"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Right Column */}
            <div className="w-1/3 flex flex-col justify-between items-center gap-12">
                {/* Top Text */}
                <div className="w-[200px] text-center text-gray-700 text-base leading-relaxed mt-15">
                    Offer a one-of-a-kind educational platform filled with videos, posts, and resources to guide and engage End-users.
                </div>
                {/* Bottom Pill-Shaped Block */}
                <div className="w-[280px] h-[400px] bg-green-600 rounded-[120px] p-12 flex items-center justify-center text-white text-xl leading-relaxed text-center shadow-lg">
                    Our products are crafted with care and backed by science, helping you fuel your body and energize your day.
                </div>
            </div>
        </section>
    );
}
