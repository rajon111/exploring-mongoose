import express, { Application, urlencoded } from "express"
import cors from "cors"


const app: Application = express()

// application routes
import userRoutes from './app/modules/user/user.route'

// using cors
app.use(cors())

// parse data
app.use(express.json())
app.use(urlencoded({ extended: true }))

app.use('/api/v1/user',userRoutes)

export default app;



    // inserting a test data to mongodb
    /*
        step1: Interface 
        step2: Schema
        step1: Model
        step1: DB query on model
    */
   
    /*
        iterface -->interface.ts
        Schema,Model -->Model.ts
        
        *route
        route function --> controller.ts
        db query function --> service.ts
    */

    // step4: DB query
    
    // createUserToDB()