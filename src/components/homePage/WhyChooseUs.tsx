function WhyChooseUs() {
    const benefits = [
        {
            number: "01",
            title: "Community Building Program",
            description: "We guarantee the highest quality ingredients, sourced fresh daily to ensure maximum nutrition and flavor in every meal."
        },
        {
            number: "02",
            title: "Bigger the Community, Bigger the Order, Bigger the Discount",
            description: "Choose from a wide variety of meal plans tailored to different dietary preferences and health goals."
        },
        {
            number: "03",
            title: "Bulk Ordering",
            description: "Our team of professional chefs and nutritionists work together to create perfectly balanced meals."
        },
        {
            number: "04",
            title: "One Billing as a Society",
            description: "Convenient ordering and scheduling through our user-friendly mobile app and website platform."
        },
        {
            number: "05",
            title: "Recommendations as per End-users BMI and Medical History",
            description: "Our dedicated customer service team is always ready to help you with personalized support and quick response times."
        },
    ];
    const data2 = [
        {
            number: "06",
            title: '"Lower prices than local, quick, and online stores."',
            description: "Experience the complete range of our services with flexible meal options, delivery schedules, and customization features."
        },
        {
            number: "07",
            title: 'Saves Time and Money',
            description: "Experience the complete range of our services with flexible meal options, delivery schedules, and customization features."
        },
        {
            number: "08",
            title: 'Direct to Customer',
            description: "Experience the complete range of our services with flexible meal options, delivery schedules, and customization features."
        },
        {
            number: "09",
            title: 'SHassle free Delivery',
            description: "Experience the complete range of our services with flexible meal options, delivery schedules, and customization features."
        },
        {
            number: "10",
            title: 'Pre-plan your Healthy Eating and Fitness regime',
            description: "Experience the complete range of our services with flexible meal options, delivery schedules, and customization features."
        },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">

                    <div className="grid gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex gap-6 group items-center">
                                <div className="flex-shrink-0">
                                    <div className="md:size-24 bg-[#9EDEB7] rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                                        <span className="text-green-600 text-7xl font-semibold relative top-5 left-5">{benefit.number}</span>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl text-gray-900 mb-3 font-semibold">{benefit.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="grid gap-8">
                        {data2.map((benefit, index) => (
                            <div key={index} className="flex gap-6 group items-center">
                                <div className="flex-shrink-0">
                                    <div className="md:size-24 bg-[#9EDEB7] rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                                        <span className="text-green-600 text-7xl font-semibold relative top-5 left-5">{benefit.number}</span>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl text-gray-900 mb-3 font-semibold">{benefit.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;