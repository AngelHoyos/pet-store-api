import { Router } from "express";

export class AuthRoutes {
    static get routes():Router{
        const router=Router();

        router.get("/login", (req, res) =>{
            res.json({message:"login"})
        })
        router.get("/register", (req, res) =>{
            res.json({message:"register"})
        })

        return router;
    }
}