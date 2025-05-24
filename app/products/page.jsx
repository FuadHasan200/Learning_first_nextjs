import dbConnect from "@/lib/dbConnect";
import { getProducts } from "../actions/products/getProducts";
import Image from "next/image";
import { deleteSingleProduct } from "../actions/products/deleteSingleProducts";


export default async function Productpage() {

  // const res = await fetch (`http://localhost:3000/api/items`)
  // const dat =  res.json();
  // const data = dat.data;
  const data = await getProducts();
  return (
    <div className="grid grid-cols-3 mt-15 mb-10 gap-5 px-8 md:px-16 lg:px-24">
      {data?.map((d) => {
        return (
          <div key={d._id}>
            <div className="card bg-base-100  shadow-sm">
              <figure>
                <img
                  src={d.product_image}
                  alt="Shoes"
                  
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{d.product_name}</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                    <button  className="btn btn-primary" type="submit" >Delete product</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
