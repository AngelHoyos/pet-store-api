import { AuthDataSources, AuthRepository,RegisterUserDTo, UserEntity } from "../../domain";

export class AuthRepositoryImpl implements AuthRepository  {
    constructor(
        private readonly authDataSource: AuthDataSources,
    ) {}
    register(registerUserDTo: RegisterUserDTo): Promise<UserEntity> {
        return this.authDataSource.register(registerUserDTo)
    }
}