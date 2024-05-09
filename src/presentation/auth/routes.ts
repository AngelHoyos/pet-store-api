import { Router } from "express";
import { AuthController } from "./controller";
import { AuthDataSourceImpl,AuthRepositoryImpl } from "../../infrastructure";


export class AuthRoutes {
    static get routes():Router{
        const router=Router();
        const dataSources=new AuthDataSourceImpl();
        const AuthRepository=new AuthRepositoryImpl(dataSources)
        const controller=new AuthController(AuthRepository);
        router.post("/login", controller.loginUser)
        router.post("/register", controller.registerUser)

        return router;
    }
}