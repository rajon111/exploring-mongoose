import express, { Application, NextFunction, Request, Response, urlencoded } from "express"
import cors from "cors"
import { Schema } from "mongoose"

const app:Application = express()

// using cors
app.use(cors())

// parse data
app.use(express.json())
app.use(urlencoded({extended:true}))

app.get('/', (req:Request, res:Response, next:NextFunction) => {
    

    // inserting a test data to mongodb
    /*
        step1: Interface
        step2: Schema
        step1: Model
        step1: DB query
    */

    //   creating an interface
    interface IUser{
        id:string;
        role:"student";
        password:string;
        name:{
            firstName:"string";
            middleName?:"string";

            lastName:"string"
        }
        dateOfBirth?: string;
        gender: "male" | "female";
        email?:string;
        contactNo:string;
        emergencyContactNo:string;
        presentAddress:string;
        permanentAddress:string;
    }

    // Create a Schema using interface
    const userSchema = new Schema<IUser>({
        id:{ 
            type: String, 
            required: true,
            unique:true 
        },
        role: { 
            type: String, 
            required: true 
        },
        password: { 
            type: String, 
            required: true,
        },
        name: { 
            firstName: {
                type:String,
                required:true
            },
            middleName: {
                type:String
            },
            lasttName: {
                type:String,
                required:true
            }
        },
        dateOfBirth: { 
            type: String
        },
        gender: { 
            type: String,
            enum:["male","female"]
        },
        email: { 
            type: String
        },
        contactNo: { 
            type: String
        },
        emergencyContactNo:{
            type:String,
        }
        
        // gender
        // contactNo
        // email
        // emergencyContactNo
        // presentAddress
        // permanentAddress
        
      });
})

export default app;