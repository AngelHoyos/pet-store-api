import { Validators } from "../../../config/validator";



export class RegisterUserDTo {
    constructor(
        public name: string,
        public email: string,
        public password: string,
    ) {}
    static create( object: { [ key: string ]: any; } ): [ string?, RegisterUserDTo?] {
            const {name, email, password} = object;

                        if ( !name ) return [ 'Missing name' ];
                        if ( !email ) return [ 'Missing email' ];
                        if (!Validators.email.test(email)) return [ "Email is not valid" ];
                        if ( !password ) return ['Missing password'];
                        if ( password.length < 6 ) return ['Password too short'];
            
                        return [
                            undefined,
                            new RegisterUserDTo( name, email,password)
                        ];//5
    }
}