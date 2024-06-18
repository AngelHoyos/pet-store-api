import { BcryptAdapter } from "../../config";
import { UserModel } from "../../data/models/users.model";
import { AuthDataSources, CustomError, RegisterUserDTo, UserEntity } from "../../domain";
import { UserMapper } from "../mappers/user.mapper";
type HashFuntion= (password: string) => string;
type CompareFuntion=(password: string, hashed:string)=>boolean

export class AuthDataSourceImpl implements AuthDataSources {

  constructor(
    private readonly hashPassword: HashFuntion=BcryptAdapter.hash,
    private readonly comparePasword: CompareFuntion=BcryptAdapter.compare
  ){}

  async register(registerUserDTo: RegisterUserDTo): Promise<UserEntity> {
      const {name, email, password} = registerUserDTo;

      try {

const exists= await UserModel.findOne({email})
if (exists) throw CustomError.badRequest("User already exists");

const user=await UserModel.create({
  name:name,
  email:email,
  password:this.hashPassword(password)
})
await user.save()

        return UserMapper.userEntityFromObject(user)
      }catch(error){
        if (error instanceof CustomError) {
            throw error;
        }
        throw CustomError.internalServer()
      }
  }
}

