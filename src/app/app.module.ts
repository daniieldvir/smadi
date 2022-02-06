import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './cmps/header/header.component';
import { MyBelieveComponent } from './cmps/my-believe/my-believe.component';
import { AboutComponent } from './cmps/about/about.component';
import { TestimonialsComponent } from './cmps/testimonials/testimonials.component';
import { SignupComponent } from './cmps/signup/signup.component';
import { MymethodComponent } from './cmps/mymethod/mymethod.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    MyBelieveComponent,
    AboutComponent,
    TestimonialsComponent,
    SignupComponent,
    MymethodComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, YouTubePlayerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
