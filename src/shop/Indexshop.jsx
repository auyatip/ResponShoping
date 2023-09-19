
import { useState} from 'react';
import {data,topmenu} from '../data/data'



const Indexshop = () => {
    const [strains,setStrains] = useState(data);
    const [tops,setTop] = useState(topmenu)

    return (
        <>
        {/* containner */}
        <div className="max-w-[1640px] mx-auto p-4 py-12 flex justify-between">
                
            {/* left side */}
            <div className="bg-black flex flex-col items-center max-w-[70%] w-full">
                
                <h1 className="text-white">Top Menu</h1>
                <div className='grid grid-cols-2 px-4 py-6 gap-3 lg:grid-cols-3'>
                {tops.map((item,index) => (
                   <div key={index} >
                            
                   {/* Card */}
                   <div className="w-full h-[250px] object-cover rounded-xl relative">
                       {/* Overlay */}
                       <div className="absolute w-full h-full bg-black/40 text-white rounded-xl">
                           <p className="font-bold text-2xl px-4 pt-4">{item.id}</p>
                           <p className="px-4 text-xl">{item.name}</p>
                           <p className="px-4 text-xl">{item.price}</p>
                           <button className="bg-red-200 mx-6 rounded-full p-1 text-black px-4 absolute bottom-6 hover:bg-red-400 duration-200">Order Now</button>
                           </div>
                       <img className="rounded-xl h-full  object-cover" 
                       src={item.image} alt={item.name} />
                   </div>
                   </div>
                ))}
                </div>

                <h1 className="text-white"> AllMenu</h1>
                <div className='grid grid-cols-2 py-6 gap-3 lg:grid-cols-3'>
                    {strains.map((item,index)=> (
                        <div key={index} >
                            
                        {/* Card */}
                        <div className="w-full h-[250px] object-cover rounded-xl relative">
                            {/* Overlay */}
                            <div className="absolute w-full h-full bg-black/40 text-white rounded-xl">
                                <p className="font-bold text-2xl px-4 pt-4">{item.id}</p>
                                <p className="px-4 text-xl">{item.name}</p>
                                <p className="px-4 text-xl">{item.price}</p>
                                <button className="bg-red-200 mx-6 rounded-full p-1 text-black px-4 absolute bottom-6 hover:bg-red-400 duration-200">Order Now</button>            
                            </div>
                            <img className="rounded-xl w-full max-h-[250px] object-cover" 
                            src={item.image} alt={item.name} />
                        </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* right side */}
            <div className="bg-green-200  max-w-[30%] w-full">
                {/* Display */}
                    <div>

                    </div>
                        
                    <div>1</div>
                    <div>1</div>
            </div>
        </div>
        </>
    )
}

export default Indexshop;