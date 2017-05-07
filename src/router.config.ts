import { CalendarComponent } from './app/calendar/calendar.component';
import { PaymentsComponent } from './app/payments/payments.component';
import { NotificariComponent } from './app/notificari/notificari.component';
import { Route } from '@angular/router';
import { LoginComponent } from './app/login/login.component';
import { HomeComponent } from './app/home/home.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';

export const routerConfig: Route[] = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'payments',
        component: PaymentsComponent
    },
    {
        path: 'calendar',
        component: CalendarComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'notifications',
        component: NotificariComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];



