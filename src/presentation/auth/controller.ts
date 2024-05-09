import { Request,Response } from "express";
import { RegisterUserDTo,AuthRepository } from "../../domain";


export class AuthController {
    constructor(
        private readonly authRepository: AuthRepository,
    ) {}

    registerUser=(req: Request, res: Response) => {
        const [error,registerUserDTo]= RegisterUserDTo.create(req.body)
        if(error) return res.status(400).send({error})

            this.authRepository.register(registerUserDTo!)
            .then(user => res.json(user))
            .catch(error => res.status(500).json(error))
    }

    loginUser=(req:Request, res:Response)=>{
        res.json('LoginUser controller')
    }
}