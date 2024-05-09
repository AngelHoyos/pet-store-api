import { AuthDataSources, CustomError, RegisterUserDTo, UserEntity } from "../../domain";


export class AuthDataSourceImpl implements AuthDataSources {
  async register(registerUserDTo: RegisterUserDTo): Promise<UserEntity> {
      const {name, email, password} = registerUserDTo;

      try {
        return new UserEntity(
            '1',
            name,
            email,
            password,
            ["USER"]);
      }catch(error){
        if (error instanceof CustomError) {
            throw error;
        }
        throw CustomError.internalServer()
      }
  }
}

