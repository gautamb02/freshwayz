
function TransformativeBenefits() {
    const benefits = [
        {
            title: "100% natural with no added sugar or preservatives",
            img: "/homePage/section5/img1.png"
        },
        {
            title: "A healthy alternative to coffee, tea, or sodas",
            img: "/homePage/section5/img2.png"
        },
        {
            title: "Ideal for kickstarting a healthy morning routine.",
            img: "/homePage/section5/img3.png"
        }
    ];

    return (
        <>
            <section className="py-16 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">Transformative Benefits</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`
          text-center p-8 transition-shadow group 
          ${index !== benefits.length - 1 ? "md:border-r md:border-gray-300" : ""}
        `}
                                >
                                    <div className="rounded-full flex items-center justify-center mx-auto mb-6 transition-colors">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={benefit.img}
                                            alt={`img_${index}`}
                                            className="md:size-64 object-contain"
                                        />
                                    </div>
                                    <h3 className="text-md text-gray-900 mb-4 font-semibold">
                                        {benefit.title}
                                    </h3>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>
            <div className="max-w-5xl mx-auto px-4 py-16">
                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                    Take The First Step Toward Wellness
                </h2>
                <p className="text-center text-gray-600 mb-12">
                    Ready To Transform Your Lifestyle? We Make It Simple With:
                </p>

                {/* Steps */}
                <div className="grid md:grid-cols-3 relative">
                    {[
                        {
                            number: 1,
                            title: "Convenient Shopping",
                            desc: "Explore our range of natural and organic products.",
                        },
                        {
                            number: 2,
                            title: "Expert Insights",
                            desc: "Learn how our products fit into your health routine",
                        },
                        {
                            number: 3,
                            title: "Exclusive Rewards",
                            desc: "Join our Health Circle to unlock discounts, tips, and more",
                        },
                    ].map((step, idx) => (
                        <div key={idx} className="text-center px-6 relative">
                            {/* Circle Number */}
                            <div className="flex items-center justify-center mb-6 relative">
                                <div className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center text-xl font-bold z-10">
                                    {step.number}
                                </div>

                                {/* Separator Line */}
                                {idx < 2 && (
                                    <div className="hidden md:block absolute top-1/2 left-[60%] w-full border-t-2 border-dashed border-green-400"></div>
                                )}
                            </div>

                            {/* Step Content */}
                            <h3 className="font-semibold text-lg mb-2">{step.title}:</h3>
                            <p className="text-gray-600 text-sm">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
}

export default TransformativeBenefits