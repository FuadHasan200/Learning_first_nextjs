import dbConnect, { collectionName } from "@/lib/dbConnect"
import { ObjectId } from "mongodb";
export async function GET(req, {params}) {

    const p = await params;
    const singleData = await dbConnect(collectionName.USERS).findOne({_id: new ObjectId(p.id)});
    console.log(p)
    return Response.json({singleData})
}
export async function DELETE(req, {params}) {
    
    const p = await params;
    const response = await dbConnect(collectionName.USERS).deleteOne({_id: new ObjectId(p.id)})
    return Response.json({response})
}
export async function PATCH(req, {params}) {

    const p = await params;
    const newPostedData = await req.json();
    const filter = {_id : new ObjectId(p.id)}
    const updatedResponse = await dbConnect(collectionName.USERS).updateOne(filter, { $set:{...newPostedData}},{upsert:true})
    return Response.json({updatedResponse})
}