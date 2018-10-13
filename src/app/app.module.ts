import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { routing } from './app.routing';
import { CardComponent } from './shared/components/card/card.component';
import { CardHolderComponent } from './shared/components/card-holder/card-holder.component';
import { PopularityDirective } from './shared/directives/popularity.directive';
import { SearchResultsComponent } from './search-results/search-results.component';
import { LoginComponent } from './login/login.component';
import { TokenComponent } from './token/token.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    ArtistDetailsComponent,
    CardComponent,
    CardHolderComponent,
    PopularityDirective,
    SearchResultsComponent,
    LoginComponent,
    TokenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
