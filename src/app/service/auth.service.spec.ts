import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { Login } from "../interfaces/login";

describe('AuthService', () => {
  let login: Login = {email: 'email@g.com', password: '12345678'};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service.signIn(login)).toBeTruthy();
  }));
});
