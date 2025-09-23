import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Search, Truck } from "lucide-react";



export function HeroSection() {
    return (
        <section
            className={cn(
                "bg-[url('/homePage/hero.png')] bg-cover bg-left md:bg-right bg-no-repeat md:h-[600px] h-[400px] flex items-center justify-left",
            )}

        >
            <div
                className="md:w-1/2 flex items-start justify-center flex-col ps-[10%]"
            >
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                    Healthy Eating,
                    <br />
                    <span className="">Fitness & Lifestyle</span>
                </h1>
                <div className="sm:w-sm w-[80%] flex rounded-sm py-2 px-2 bg-white items-center mt-3.5">
                    <input type="text" placeholder="Search for product..." className="border-none w-full h-full bg-background outline-none px-4" />
                    <Button size="icon" variant="default">
                        <Search />
                    </Button>
                </div>
                <div className="flex items-center text-sm mt-2 space-x-2">
                    <Truck className="text-[#FE8F17]" />
                    <span className="text-[#4D4D4D]">Your Gateway to Healthy Eating, Fitness, Lifestyle and Vitality.</span>
                </div>
            </div>
        </section>

    );
}