
function PopularCategories() {
    const categories = [
        {
            title: "Exotic Fruits ",
            items: "15",
            description: "Crisp and nutritious salad bowls",
            image: "/homePage/section3/3img1.png",
            bgColor: "bg-[#FCE0CA]"
        },
        {
            title: "Exotic Vegetable ",
            description: "Nutritious snacks for any time",
            items: "252",
            image: "/homePage/section3/3img2.png",
            bgColor: "bg-[#D6F2F3]"
        },
        {
            title: "Fresh Salads ",
            description: "Delicious and fresh pizza varieties",
            items: "35",
            image: "/homePage/section3/3img3.png",
            bgColor: "bg-[#FFECB4]"
        },
        {
            title: "Dry Fruits",
            description: "Gourmet burgers made fresh",
            items: "35",
            image: "/homePage/section3/3img4.png",
            bgColor: "bg-[#E0D8C9]"
        },
        {
            title: "Cold Pressed Oils",
            description: "Fresh catches and ocean delights",
            items: "80",
            image: "/homePage/section3/3img5.png",
            bgColor: "bg-[#FFD8E0]"
        },
        {
            title: "Millets",
            description: "Sweet treats to end your meal",
            items: "40",
            image: "/homePage/section3/3img6.png",
            bgColor: "bg-[#E0D8C9]"
        },
        {
            title: "Made to Order Atta",
            description: "Refreshing and nutritious blends",
            items: "62",
            image: "/homePage/section3/3img7.png",
            bgColor: "bg-[#D6F2F3]"
        },
        {
            title: "Groceries",
            description: "100% organic and natural foods",
            items: "62",
            image: "/homePage/section3/3img8.png",
            bgColor: "bg-[#FEE7D7]"
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Popular Categories</h2>
                </div>
                <div className="flex gap-5">
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {/* Big Card */}
                        <div
                            className={`bg-[#FBF3EE] bg-[url('/homePage/section3/main.png')] bg-bottom min-h-[400px] rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group-hover:scale-105 
                  md:col-span-2 md:row-span-2 bg-cover bg-no-repeat`} 
                        >
                            <h3 className="text-lg text-gray-900 mb-2 text-center">
                                Fresh Vegetables and Fruit Juices
                            </h3>
                            <p className="text-sm text-[#595959] text-center">23 items</p>
                        </div>

                        {/* Small Cards */}
                        {categories.map((category, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div
                                    className={`${category.bgColor} md:h-full rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
                                >
                                    <div className="aspect-square mb-4 overflow-hidden rounded-xl">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={category.image}
                                            alt={category.title}
                                            className="w-full h-full rounded-full border-4 p-4 border-dashed bg-transparent object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <h3 className="text-lg text-gray-900 mb-2 text-center">
                                        {category.title}
                                    </h3>
                                    <p className="text-sm text-[#595959] text-center">
                                        {category.items} items
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}


export default PopularCategories;