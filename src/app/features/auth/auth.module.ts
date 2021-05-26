import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './pages/register/register.component';
import {AuthRoutingModule} from "./auth-routing.module";
import {LayoutsModule} from "../../layouts/layouts.module";
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./services/auth.service";

@NgModule({
  declarations: [
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    LayoutsModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
  ]
})
export class AuthModule { }
