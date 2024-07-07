import { envs } from "./config/envs";
import { MongoDatabase } from "./data/mongodb";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";
import {  } from "../src/presentation/auth/routes";
(()=>{
    main()
})()

async function main() {
    
    await MongoDatabase.connect({
        dbName: envs.MONGO_DB_NAME,
        mongoUrl: envs.MONGO_URL,
    })

    new Server({
        port:envs.PORT,
        routes:AppRoutes.routes
    }).start()
}