"use client"
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is included in the meal plans?",
      answer: "Our meal plans include carefully crafted recipes with detailed nutrition information, shopping lists, and step-by-step cooking instructions. All meals are designed by certified nutritionists to meet your dietary goals."
    },
    {
      question: "How does the delivery system work?",
      answer: "We offer flexible delivery options including same-day delivery in select areas. You can schedule deliveries up to a week in advance, and our fresh ingredients are delivered in temperature-controlled packaging to maintain quality."
    },
    {
      question: "Can I customize my diet plan?",
      answer: "Absolutely! We offer personalized meal plans based on your dietary preferences, allergies, and health goals. Our nutrition experts work with you to create a plan that fits your lifestyle and requirements."
    },
    {
      question: "What if I'm not satisfied?",
      answer: "We offer a 100% satisfaction guarantee. If you're not completely happy with your meal plan or delivery, we'll work with you to make it right or provide a full refund within 30 days."
    },
    {
      question: "Are there vegetarian/vegan options?",
      answer: "Yes! We offer extensive vegetarian and vegan meal options. Our plant-based meals are just as nutritious and delicious as our other offerings, with plenty of variety to keep your meals interesting."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4 font-semibold">
            Frequently Asked Questions
          </h2>
        
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white  border-gray-200 border-b">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className={`text-lg ${openIndex === index ? "text-[#05A845]":"text-gray-900"}`}>{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-green-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-green-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}