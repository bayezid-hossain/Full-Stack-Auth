import { IsEmail, IsString, Matches, Min, MinLength } from 'class-validator'

export class CreateUserDto {
    @IsString()
    name: string

    @IsString()
    @IsEmail()
    email: string

    @IsString()
    @Matches(/[a-zA-Z]/, { message: "Contain at least one letter" })
    @Matches(/[0-9]/, { message: "Contain atleast one number" })
    @Matches(/[^a-zA-Z0-9]/, { message: "Contain at least one special character" })
    @MinLength(8, { message: "Be at least 8 characters long" })
    password: string
}