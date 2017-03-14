import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';

import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { NeedLoginGuard } from "./need-login.guard";
import { FormComponent } from './form/form.component';
import { Form2Component } from './form2/form2.component';
import { Advcomp1Component } from './advcomp1/advcomp1.component';
import { Advcomp1HeaderComponent } from './advcomp1-header/advcomp1-header.component';
import { Advcomp1PartComponent } from './advcomp1-part/advcomp1-part.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    DashboardComponent,
    CardsComponent,
    LayoutComponent,
    LoginComponent,
    FormComponent,
    Form2Component,
    Advcomp1Component,
    Advcomp1HeaderComponent,
    Advcomp1PartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [NeedLoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
