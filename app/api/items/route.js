import dbConnect, { collectionName } from "@/lib/dbConnect"
import { revalidatePath } from "next/cache"


export async function GET() {
  const data = await dbConnect(collectionName.USERS).find({}).toArray() 
  return Response.json({ data })
}

export async function POST(req){
    const postedData = await req.json()
    const result = await dbConnect(collectionName.USERS).insertOne(postedData)
    revalidatePath('/products')
    revalidatePath('/meals')
    return Response.json({result})
}