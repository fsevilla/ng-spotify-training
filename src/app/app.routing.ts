import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { TokenComponent } from './token/token.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [
	{ path: '', redirectTo: '/welcome', pathMatch: 'full'},
	{ path: 'login', component: LoginComponent },
	{ path: 'token', component: TokenComponent },
	{ path: 'welcome', component: WelcomeComponent },
	{ path: 'artist/:id', component: ArtistDetailsComponent },
	{ path: 'search', component: SearchResultsComponent }
];

export const routing = RouterModule.forRoot(routes);