import Image from "next/image";

export default function DifferentSection() {
    return (
        <section className="w-full flex flex-col items-center px-16 py-16 bg-white gap-12">
            <div className="flex flex-col items-center gap-4 ">
                <h1 className="text-black text-4xl font-bold px-0 !m-0 !p-0 !leading-none">How We&apos;re Different</h1>
                <p className="text-gray-900 text-xl !mt-0 !mb-0 !p-0 !leading-none">
                    At Freshwayz, we go beyond selling products to create an educational experience:
                </p>
            </div>

            {/* Flex container for columns */}
            <div className="flex w-full  py-2 max-w-6xl gap-8 items-stretch">
                {/* Left column: flex-col with 3 equal divs, flex-grow */}
                <div className="flex flex-col w-[55%]">
                    {/* Each div grows equally to fill the parent's height */}
                    <div className="flex-1 flex items-center justify-between bg-white p-4 border-2 border-black rounded-3xl mb-4 last:mb-0">

                        <p className="p-4 text-2xl">Learn with Us: Watch videos and read posts about the medicinal benefits of our products.</p>
                        <Image className="w-34" src="/about/recipe1.png" alt="recipe1" />
                    </div>
                    <div className="flex-1 flex items-center justify-between bg-[#4fce73] p-4 rounded-[1000px]  mb-4 last:mb-0">
                        <Image className="w-34" src="/about/recipe1.png" alt="recipe1" />
                        <p className="p-4 text-2xl">
                            AI Powered Personalized Guidance:
                            Discover what suits your unique health needs as per your BMI and Medical History
                        </p>

                    </div>
                    <div className="flex-1 flex items-center justify-between bg-[#f1f2ed] p-4 rounded-3xl mb-4 last:mb-0">

                        <p className="p-4 text-2xl">Community of Care: Be part of a wellness movement that uplifts and supports you.</p>
                        <Image className="w-34" src="/about/recipe1.png" alt="recipe1" />
                    </div>
                </div>

                {/* Right column: image naturally controls height */}
                <div className="w-[40%]">
                    <Image
                        src="/about/recipe.png"
                        alt="Reusable Bag"
                        className="w-full h-auto object-cover rounded"
                    />
                </div>
            </div>
        </section>
    );
}
