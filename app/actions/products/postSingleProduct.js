"use server"

import dbConnect, { collectionName } from "@/lib/dbConnect"
import { revalidatePath } from "next/cache"

export const postSingleProduct = async(postedData) =>{
    try {
        const result = await dbConnect(collectionName.USERS).insertOne(postedData)
        revalidatePath('/products')
        return result
    } catch (error) {
        console.log(error)
        return null
    }
}