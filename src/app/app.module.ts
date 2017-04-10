import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home/home.component';
import { HomeImageBoxesComponent } from './home-image-boxes/home-image-boxes.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { VideosComponent } from './videos/videos.component';
import { SignupComponent } from './signup/signup.component';
import { DestinationsComponent } from './destinations/destinations.component';
import {DataService} from "./data.service";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    SideBarComponent,
    BannerComponent,
    HomeComponent,
    HomeImageBoxesComponent,
    AboutComponent,
    PageNotFoundComponent,
    BookComponent,
    VideosComponent,
    SignupComponent,
    DestinationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'book',
        component: BookComponent
      },
      {
        path: 'videos',
        component: VideosComponent
      },
      {
        path: 'destinations',
        component: DestinationsComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ])

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
