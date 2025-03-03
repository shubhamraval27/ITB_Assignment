import { Routes } from '@angular/router';
import { LoginComponent } from './auth-user/login/login.component';
import { RegisterComponent } from './auth-user/register/register.component';
import { ForgotpasswordComponent } from './auth-user/forgotpassword/forgotpassword.component';
import { UserComponent } from './auth-user/user/user.component';

export const routes: Routes = [
    {
        path : 'login',
        component : LoginComponent

    },
    {
        path : 'register',
        component : RegisterComponent

    },
    {
        path : 'forgotpassword',
        component : ForgotpasswordComponent

    },
    {
        path : 'user',
        component : UserComponent

    },

];
