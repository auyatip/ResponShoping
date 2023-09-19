import { useState } from 'react';
import {data} from '../data/data'

const Strains = () => {
    //import data
    const [strains,setStrains] = useState(data);

    //Filter Type Hybrid,indica,sativa
    const filterType = (category) =>{
        setStrains(
            data.filter((item) => {
                return item.category === category;
            })
        );
    };
       
    return (
        <div className='max-w-[1640px] mx-auto px-4 py-6'>
            <h1 className='text-[#ff9d00] font-bold text-4xl text-center'>Top Rated Menu Item</h1>

            {/* Filter Row */}
            
                {/* Filter Type */}
                <div className='flex flex-col'>
                    <p className='font-bold text-gray-700'>Filter Type :</p>
                    <div className='flex justify-between flex-wrap'>
                        <button onClick={()=> setStrains(data)} className="bg-red-200 rounded-full w-[200px] p-1 text-black hover:bg-red-400 duration-200">All</button>
                        <button onClick={()=> filterType('hybrid')} className="bg-red-200 rounded-full w-[200px] p-1 text-black hover:bg-red-400 duration-200">Hybrid</button>
                        <button onClick={()=> filterType('indica')} className="bg-red-200 rounded-full w-[200px] p-1 text-black hover:bg-red-400 duration-200">Indica</button>
                        <button onClick={()=> filterType('sativa')} className="bg-red-200 rounded-full w-[200px] p-1 text-black hover:bg-red-400 duration-200">Sativa</button>
                    </div>
                </div>

        {/* DisplayFood */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-5'>
                {strains.map((item, index) => (
                    <div key={index} className='border shadow-xl hover:scale-105 duration-300"'>
                        
                        <img src={item.image} alt={item.name} 
                        className='w-full h-[250px] object-cover rounded-t-lg'/>

                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold '>{item.name}</p>
                            <p>
                             <span className= 'bg-red-500 px-2 py-1 rounded-lg text-gray-200'>{item.price}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Strains;