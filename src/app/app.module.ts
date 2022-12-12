import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailsComponent } from './components/details/details.component';
import { DetailsMovieComponent } from './components/details-movie/details-movie.component';
import { DetailsReviewComponent } from './components/details-review/details-review.component';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';
import { SearchviewComponent } from './components/searchview/searchview.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ModelPopUpComponent } from './components/model-pop-up/model-pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    DetailsComponent,
    DetailsMovieComponent,
    DetailsReviewComponent,
    NotAuthorizedComponent,
    SearchviewComponent,
    LoaderComponent,
    ModelPopUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
