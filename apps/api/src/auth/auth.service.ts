import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) { }
    async signup(dto: CreateUserDto) {
        const user = await this.userService.findByEmail(dto.email)
        console.log(user)
        if (user) throw new ConflictException("User already exists")

        return this.userService.create(dto)
    }
}
