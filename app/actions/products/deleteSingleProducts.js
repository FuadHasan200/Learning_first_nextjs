"use server"

import dbConnect, { collectionName } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const deleteSingleProduct = async(params)=>{
    try {
        const p = await params;
    const response = await dbConnect(collectionName.USERS).deleteOne({_id: new ObjectId(p.id)})
    return response
    } catch (error) {
        console.log(error)
        return null
    }
}