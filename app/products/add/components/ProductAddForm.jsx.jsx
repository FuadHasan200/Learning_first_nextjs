"use client"

import { postSingleProduct } from "@/app/actions/products/postSingleProduct";
import { useRouter } from "next/navigation";

export default function ProductAddForm() {
  const {NEXT_PUBLIC_SERVER_ADDRESS} = process.env
  // console.log("fuad",NEXT_PUBLIC_SERVER_ADDRESS)
  const router = useRouter();
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const form = e.target;
    const product_name = form.productName.value;
    const product_image = form.productImage.value;
    const payload = {product_name, product_image}
    // const res = await fetch(`http://localhost:3000/api/items`,{
    //     method:"POST",
    //     body: JSON.stringify(payload),
    //     headers:{
    //         'Content-type':'application/json'
    //     }
    // });
    const result = await postSingleProduct(payload)
    form.reset()
    router.push('/products')
    router.refresh()
    
  }
  return (
    <div className="flex justify-center">
        <div className="flex justify-center px-4 pt-8 mt-10 bg-amber-600 w-[400px] space-y-3">
            <form onSubmit={handleSubmit}>
                <p className='mr-2'>productName: </p><input className="bg-gray-300 px-4 py-1 rounded" type="text" name="productName" placeholder='product_name' />
                <p>productImage: </p><input className="bg-gray-300 px-4 py-1 rounded" type="text" name="productImage" placeholder="product_image" />
                <div>
                  <button  className="btn btn-accent mt-4 mb-4" type="submit" >Submit</button>
                 
                </div>
            </form>
        </div>
    </div>
  )
}
