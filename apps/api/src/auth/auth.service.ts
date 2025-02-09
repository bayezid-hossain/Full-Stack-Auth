import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { LoginUserDto } from 'src/user/dto/login-user.dto';
import { verify } from 'argon2';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) { }
    async signup(dto: CreateUserDto) {
        const user = await this.userService.findByEmail(dto.email)
        //console.log(user)
        if (user) throw new ConflictException("User already exists")

        return this.userService.create(dto)
    }
    async validateLocalUser(email: string, password: string) {
        console.log(email, password)
        const user = await this.userService.findByEmail(email)
        if (!user) throw new UnauthorizedException("Invalid Credentials")
        const isMatched = verify(user.password, password)
        if (!isMatched) throw new UnauthorizedException("Invalid Credentials")

        return { id: user.id, name: user.name }
    }
}
