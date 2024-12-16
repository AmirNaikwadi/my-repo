import { Routes } from '@angular/router';
import { EmailComponent } from './email/email.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path:"sendEmail",
        component:EmailComponent,
        // pathMatch:'full'
    },
    {
        path:"",
        component:HomeComponent,
        // pathMatch:'full'
    }
];
