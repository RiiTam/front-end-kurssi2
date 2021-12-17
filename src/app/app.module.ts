import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestikomponenttiComponent } from './testikomponentti/testikomponentti.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {MatSliderModule} from "@angular/material/slider";
import {Routes, RouterModule } from "@angular/router";
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CoursesComponent } from './courses/courses.component';
import {CoursesService} from "./courses.service";
import { CinemaComponent } from './cinema/cinema.component';
import { FormComponent } from './form/form.component';


const appRoutes: Routes = [
  { path: 'calculator', component: CalculatorComponent},
  { path: '', redirectTo: '/calculator', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    TestikomponenttiComponent,
    FeedbackComponent,
    CalculatorComponent,
    ToolbarComponent,
    CoursesComponent,
    CinemaComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatGridListModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true }

    )
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
