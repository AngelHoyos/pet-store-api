import { Request,Response } from "express";
import { RegisterUserDTo } from "../../domain";
RegisterUserDTo
export class AuthController {
    constructor() {}

    registerUser=(req: Request, res: Response) => {
        const [error,registerUserDTo]= RegisterUserDTo.create(req.body)
        if(error) return res.status(400).send({error})

            res.json(registerUserDTo)
    }

    loginUser=(req:Request, res:Response)=>{
        res.json('LoginUser controller')
    }
}