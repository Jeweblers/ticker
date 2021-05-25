import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './pages/register/register.component';
import {AuthRoutingModule} from "./auth-routing.module";
import {LayoutsModule} from "../../layouts/layouts.module";
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    LayoutsModule,
    CardModule,
  ]
})
export class AuthModule { }
