import { Request,Response } from "express";
import { RegisterUserDTo,AuthRepository,CustomError } from "../../domain";



export class AuthController {
    constructor(
        private readonly authRepository: AuthRepository,
    ) {}

    private handleError=(error: unknown, res:Response)=>{
        if(error instanceof CustomError){
            return res.status(error.statusCode).json({error:error.message})
        }

        return res.status(500).json({error: 'Internal Server Error'})
    }

    registerUser=(req: Request, res: Response) => {
        const [error,registerUserDTo]= RegisterUserDTo.create(req.body)
        if(error) return res.status(400).send({error})

            this.authRepository.register(registerUserDTo!)
            .then(user => res.json(user))
            .catch((error)=> this.handleError(error,res))
    }

    loginUser=(req:Request, res:Response)=>{
        res.json('LoginUser controller')
    }
}