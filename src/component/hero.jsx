const Hero = () => {
    return (
        <div className="max-w-[1640px] mx-auto p-4 ">
            <div className="max-h-[500px] relative">
                {/* Overlay */}
                    <div className=" absolute w-full h-full text-gray-200 max-h-[500px] bg-black/50 flex flex-col justify-center">
                        <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">The <span className="text-[#ff9d00]">Best</span></h1>
                        <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold "><span className="text-[#ff9d00]">Clothes </span>Shopping</h1>
                        
                    </div>
                <img className="w-full max-h-[500px]  object-cover" src="https://pagefly.io/cdn/shop/articles/Best_Shopify_T-shirt_Stores_For_Your_Inspiration_in_2021.png?v=1621964186" 
                alt="cannabis" />
            </div>
        </div>
    )
};

export default Hero;