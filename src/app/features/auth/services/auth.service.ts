import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient
  ) {
  }

  public register(payload: RegistrationPayload) {
    return this.http.post('http://localhost:8000/api/register', payload)
  }
}

export interface RegistrationPayload {
  name: string;
  email: string;
  password: string;
}
