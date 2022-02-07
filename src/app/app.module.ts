import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './cmps/header/header.component';
import { MyBelieveComponent } from './cmps/my-believe/my-believe.component';
import { AboutComponent } from './cmps/about/about.component';
import { TestimonialsComponent } from './cmps/testimonials/testimonials.component';
import { SignupComponent } from './cmps/signup/signup.component';
import { MyMethodComponent } from './cmps/my-method/my-method.component';
import { WhereComponent } from './cmps/where/where.component';
import { FooterComponent } from './cmps/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    MyBelieveComponent,
    AboutComponent,
    TestimonialsComponent,
    SignupComponent,
    MyMethodComponent,
    WhereComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    YouTubePlayerModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
