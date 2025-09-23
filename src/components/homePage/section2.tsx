import { Button } from "../ui/button";
import { MessagesSquare } from "lucide-react";

const data = [
    {
        text: "Imagine a life where every sip, every bite, and every choice you make fuels your body and mind.",
        img: "homePage/section2/img1.png"
    },
    {
        text: "",
        img: "homePage/section2/arrow-up.png"
    },
    {
        text: "At Freshwayz, we’re here to make that vision a reality.",
        img: "homePage/section2/img2.png"
    },
    {
        text: "",
        img: "homePage/section2/arrow-down.png"
    },
    {
        text: '"We offer natural, organic products and inspiring guidance to help you live a healthy, balanced, and happy life."',
        img: "homePage/section2/img3.png"
    },
]

export function Section2() {
    return (
        <section className="md:h-[600px] flex flex-col mt-14 max-w-7xl px-6 mx-auto">
            <div className="flex items-center justify-end">
                <Button className="rounded-full rounded-br-none" variant="default">
                    <span>Chat with us</span>
                    <MessagesSquare />
                </Button>
            </div>
            <div className=" flex items-center md:gap-0 gap-10 justify-between py-28 md:flex-row flex-col">
                {data.map((item, index) => (
                    <div key={index} className="md:w-[30%] h-full flex flex-col gap-8 items-center justify-center text-center px-4 ">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={item.img} alt={`img-${index}`} />
                        <p className="text-gray-700 text-sm font-semibold">{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}