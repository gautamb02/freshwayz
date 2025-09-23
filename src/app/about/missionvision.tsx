
const MissionVision = () => {
    return (
        <div className="flex items-center justify-center min-h-screen px-8 bg-white">
            {/* Left side: stacked images */}
            <div className="relative w-96 h-96 flex-shrink-0">
                {/* Back image */}
                <div className="absolute top-8 left-8 w-72 h-72 rounded-3xl overflow-hidden opacity-40" style={{ filter: "blur(2px)" }}>
                    <img
                        src="/about/recipe.png" alt="Food background"

                    />
                </div>
                {/* Middle image */}
                <div className="absolute top-4 left-4 w-72 h-72 rounded-3xl overflow-hidden opacity-70" style={{ filter: "brightness(0.7)" }}>
                    <img
                        src="/about/recipe.png"
                        alt="Food ingredients"

                    />
                </div>
                {/* Front image */}
                <div className="relative w-72 h-72 rounded-3xl overflow-hidden rotate-6 shadow-lg">
                    <img
                        src="/about/recipe.png" alt="Person holding groceries"

                    />
                </div>
            </div>

            {/* Right side: text */}
            <div className="ml-16 max-w-xl text-gray-800">
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="mb-10 leading-relaxed">
                    To inspire and empower individuals to make healthier choices, bridging
                    the gap between intention and action through accessible nutrition and
                    practical knowledge.
                </p>

                <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                <p className="leading-relaxed">
                    A healthier, happier world where mindful eating and fitness routines
                    are a natural part of everyday life. Together, we’re creating a culture
                    of wellness.
                </p>
            </div>
        </div>
    );
};

export default MissionVision;
