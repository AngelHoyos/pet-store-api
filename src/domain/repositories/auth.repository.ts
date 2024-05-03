import { RegisterUserDTo } from './../dto/auth/register-user.dto';
import { UserEntity } from "../entities/auth/user.entity";

export abstract class AuthRepository {
    abstract register(registerUserDTo: RegisterUserDTo):Promise<UserEntity>
}
