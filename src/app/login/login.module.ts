import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { AuthGuard } from '../auth-guard.service';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';

@NgModule({
	imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule
	],
	declarations: [
    LoginComponent

	],
	providers: [AuthGuard, AuthService]
})
export class LoginModule { }
