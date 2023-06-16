import { connectMongo } from "@/lib/dbConnection"
import { Student } from "@/modals/studentsSchema";
import mongoose from "mongoose";
import getConfig from 'next/config';
import { ObjectId } from 'mongodb';

export default async function handle(req, res) {
    const { serverRuntimeConfig } = getConfig();

    mongoose.connect(process.env.MONGODB_URI || serverRuntimeConfig.connectionString);
    mongoose.Promise = global.Promise;
    const { method } = req;

    if(method === 'GET'){
            res.json(await Student.find());
    }
    if (method === 'POST') {
        const { name,standard,batch,mobileNumber,address,fees } = req.body;
        const studentInfo = await Student.create({name,standard,batch,mobileNumber,address,fees})
        res.json(studentInfo)
    } 

    // if(method === 'PUT'){
    //     const {title,description,price,_id} = req.body;
    //     await Product.updateOne({_id},{title,description,price})
    //     res.json(true)
    // }

    if(method === 'DELETE'){
        await Student.deleteOne({_id : req.query?.id});
            res.json(true)
    }
}