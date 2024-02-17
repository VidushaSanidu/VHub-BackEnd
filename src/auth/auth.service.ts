import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signIn() {
    return { msg: 'I have signin' };
  }

  signUp() {
    return { msg: 'I have signUp' };
  }
}