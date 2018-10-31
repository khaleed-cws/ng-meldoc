import { Routes, RouterModule } from '@angular/router';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { HomeComponent } from './_pages/_site/home/home.component';
import { LoginComponent } from './_pages/_site/login/login.component';
import { RegisterComponent } from './_pages/_site/register/register.component';
import { HelpComponent } from './_pages/_site/help/help.component';
import { DashboardComponent } from './_pages/_site/dashboard/dashboard.component';
import { ProfileComponent } from './_pages/_site/profile/profile.component';
import { E404Component } from './_pages/_error/e404/e404.component';



export const routes: Routes = [
   /*Site routes goes here*/
    {
        path: '',  component: SiteLayoutComponent,
        children: [
          { path: '', component: HomeComponent, pathMatch: 'full'},
          { path: 'login', component: LoginComponent },
          { path: 'register', component: RegisterComponent },
          { path: 'help', component: HelpComponent },
          { path: 'dashboard', component: DashboardComponent },
          { path: 'profile', component: ProfileComponent },
          { path: 'test/:id', component: HelpComponent }

        ]
    },
    {
        path: '',
        component: AppLayoutComponent,
        children: [
          // { path: 'dashboard', component: DashboardComponent },
          // { path: 'profile', component: ProfileComponent }
        ]
    },
   { path: 'Error404', component: E404Component },
   { path: '**', redirectTo: 'Error404' }
];


export const routing = RouterModule.forRoot(routes);


