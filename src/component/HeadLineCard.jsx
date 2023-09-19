const Headlinecard = () => {
    return (
        <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
            {/* Card */}
            <div className="rounded-xl relative">
                {/* Overlay */}
                <div className="absolute w-full h-full bg-black/50 text-white rounded-xl">
                    <p className="font-bold text-2xl px-4 pt-4">Exotic</p>
                    <p className="px-4 text-xl">Popcon size</p>
                    <button className="bg-red-200 mx-6 rounded-full p-1 text-black px-4 absolute bottom-6 hover:bg-red-400 duration-200">Order Now</button>
                </div>
                
                <img className="rounded-xl w-full max-h-[250px] object-cover" 
                src="https://banthaiherb.co.th/skilllnw/wp-content/uploads/2019/01/tshirt-2.jpg" alt="#" />
            </div>
            {/* Card */}
            <div className="rounded-xl relative">
                {/* Overlay */}
                <div className="absolute w-full h-full bg-black/50 text-white rounded-xl">
                    <p className="font-bold text-2xl px-4 pt-4">Exotic</p>
                    <p className="px-4 text-xl">Popcon size</p>
                    <button className="bg-red-200 mx-6 rounded-full p-1 text-black px-4 absolute bottom-6 hover:bg-red-400 duration-200">Order Now</button>
                </div>
                <img className="rounded-xl w-full max-h-[250px] object-cover" 
                src="https://banthaiherb.co.th/skilllnw/wp-content/uploads/2019/01/tshirt-2.jpg" alt="#" />
            </div>
            {/* Card */}
            <div className="rounded-xl relative">
                {/* Overlay */}
                <div className="absolute w-full h-full bg-black/50 text-white rounded-xl">
                    <p className="font-bold text-2xl px-4 pt-4">Exotic</p>
                    <p className="px-4 text-xl">Popcon size</p>
                    <button className="bg-red-200 mx-6 rounded-full p-1 text-black px-4 absolute bottom-6 hover:bg-red-400 duration-200">Order Now</button>
                </div>
                <img className="rounded-xl w-full max-h-[250px] object-cover" 
                src="https://banthaiherb.co.th/skilllnw/wp-content/uploads/2019/01/tshirt-2.jpg" alt="#" />
            </div>
           
        </div>
    )
};
export default Headlinecard;