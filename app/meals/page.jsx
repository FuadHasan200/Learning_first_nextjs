"use client"
import Image from 'next/image';
import  { useEffect, useState } from 'react'

export default function Mealspage() {
    const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState("");
        const fetchMeal = async () =>{
        try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`,{
            cache: "force-cache"
        })
        const data = await res.json();
        console.log("fuad barkorse: ",data)
        setMeals(data?.meals || []);
        return data.meals;
    }
    catch (error) {
        console.log(error)
        return [];
    }
} 
    useEffect(()=>{
        fetchMeal()
    },[search])
  return (
    <div>
        <div className='py-2 px-2 mt-10 mb-10'>
            <span>Search: </span>
            <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} className='bg-amber-500  text-black'/>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
    {
        meals.map((singleMeal)=>{
            return(
                <div key={singleMeal.idMeal} className='' >
                    {/* <img src={singleMeal.strMealThumb} alt='img' /> */}
                     <Image src={singleMeal.strMealThumb} alt='kitar' height={500} width={500} />
                    <p className='text-2xl font-semibold'>{singleMeal.strMeal}</p>
                    <p>{singleMeal.strInstructions}</p>
                </div>
            )
        })
    }
    </div>
    </div>
  )
}
