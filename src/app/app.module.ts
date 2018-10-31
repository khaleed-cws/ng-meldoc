import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';

/*mat module*/
import { MaterialModule } from './_modular/material/material.module';

import { AppHeaderComponent } from './_layout/app-header/app-header.component';
import { AppLayoutComponent } from './_layout/app-layout/app-layout.component';
import { AppSidebarComponent } from './_layout/app-sidebar/app-sidebar.component';


import { SiteHeaderComponent } from './_layout/site-header/site-header.component';
import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { SiteFooterComponent } from './_layout/site-footer/site-footer.component';

import { HomeComponent } from './_pages/_site/home/home.component';
import { LoginComponent } from './_pages/_site/login/login.component';
import { RegisterComponent } from './_pages/_site/register/register.component';
import { HelpComponent } from './_pages/_site/help/help.component';

import { routing } from './app.routing';
import { DashboardComponent } from './_pages/_site/dashboard/dashboard.component';
import { E404Component } from './_pages/_error/e404/e404.component';
import { ProfileComponent } from './_pages/_site/profile/profile.component';
import { ProfileModule } from './_pages/_site/profile/profile.module';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppLayoutComponent,
    AppSidebarComponent,

    SiteHeaderComponent,
    SiteLayoutComponent,
    SiteFooterComponent,

    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HelpComponent,
    DashboardComponent,
    E404Component,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    FormsModule,
    NgbModule.forRoot(),
    routing,
    ProfileModule
  ],
  providers: [ ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
