import { RegisterUserDTo } from './../dto/auth/register-user.dto';
import { UserEntity } from "../entities/auth/user.entity";

export abstract class AuthDataSources {
    abstract register(registerUserDTo: RegisterUserDTo):Promise<UserEntity>
}
