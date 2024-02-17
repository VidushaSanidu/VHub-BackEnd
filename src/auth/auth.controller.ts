import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authServive: AuthService) {}

  @Post('signup')
  signUp() {
    return this.authServive.signUp();
  }

  @Post('signin')
  signIn() {
    return this.authServive.signIn();
  }
}
