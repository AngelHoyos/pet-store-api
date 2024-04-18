import { envs } from "./config/envs";
import { Server } from "./presentation/server";


(()=>{
    main()
})()

async function main() {
    console.log("main");
    
    new Server({
        port:envs.PORT
    }).start()
}