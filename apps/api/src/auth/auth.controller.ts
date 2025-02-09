import { Body, Controller, Post, Request, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { NoFilesInterceptor } from '@nestjs/platform-express';
import { LoginUserDto } from 'src/user/dto/login-user.dto';
import { LocalAuthGuard } from './guards/local-auth/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post("signup")
  @UseInterceptors(NoFilesInterceptor())
  signup(@Body() dto: CreateUserDto) {
    return this.authService.signup(dto)
  }

  @Post("signin")
  @UseInterceptors(NoFilesInterceptor())
  @UseGuards(LocalAuthGuard)
  sigin(@Request() req) {
    // console.log(dto)
    return req.user;
  }

}
