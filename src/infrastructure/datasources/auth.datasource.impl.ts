import { UserModel } from "../../data/models/users.model";
import { AuthDataSources, CustomError, RegisterUserDTo, UserEntity } from "../../domain";


export class AuthDataSourceImpl implements AuthDataSources {
  async register(registerUserDTo: RegisterUserDTo): Promise<UserEntity> {
      const {name, email, password} = registerUserDTo;

      try {

const exists= await UserModel.findOne({email})
if (exists) throw CustomError.badRequest("User already exists");

const user=await UserModel.create({
  name:name,
  email:email,
  password:password
})
await user.save()

        return new UserEntity(
            user.id,
            name,
            email,
            password,
            user.roles);
      }catch(error){
        if (error instanceof CustomError) {
            throw error;
        }
        throw CustomError.internalServer()
      }
  }
}

