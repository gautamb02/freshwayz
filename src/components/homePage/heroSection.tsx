import { cn } from "@/lib/utils";

export function HeroSection() {
    return (
        <section 
            className={cn(
                "bg-[url('/homePage/hero.png')] bg-contain bg-right bg-no-repeat"
            )}

            >
            <div 
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h1 className="text-4xl lg:text-3xl font-bold text-gray-900 leading-tight">
                                Healthy Eating,
                                <br />
                                <span className="">Fitness & Lifestyle</span>
                            </h1>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}