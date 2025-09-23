
export default function AboutHeroSection() {
    return (
        <section className="w-full flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-10 md:py-16 bg-white">
            {/* Left Side - Text */}
            <div className="md:w-1/2 w-full md:pr-8">
                <h1 className="text-3xl font-semibold leading-snug mb-4">
                    We’re not just an e-commerce platform; we’re a movement toward better
                    living. Post-pandemic life has reminded us all of the importance of
                    health, yet busy lifestyles make it challenging to maintain. At
                    Freshwayz.
                </h1>
                <p className="text-gray-500 mb-6 text-xl">
                    Recommendations that are healthy <br /> and match your aesthetic
                </p>
                <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow-md transition text-xl">
                    Know More
                </button>
            </div>

            {/* Right Side - Images */}
            <div className="md:w-1/2 w-full grid grid-cols-2 gap-4 mt-8 md:mt-0">
                <img
                    src="/about/flour-sack.png"
                    alt="Flour and Grains"
                    className="w-full max-h-48 object-contain rounded-lg "
                />
                <img
                    src="/about/veggies-basket.png"
                    alt="Vegetable Basket"
                    className="w-full max-h-48 object-contain rounded-lg "
                />
                <img
                    src="/about/dry-fruits.png"
                    alt="Dry Fruits"
                    className="w-full max-h-48 object-contain rounded-lg "
                />
                <img
                    src="/about/grains.png"
                    alt="Grains"
                    className="w-full max-h-48 object-contain rounded-lg "
                />
            </div>
        </section>
    );
}
