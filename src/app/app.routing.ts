import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';

const routes: Routes = [
	{ path: '', component: WelcomeComponent },
	{ path: 'artist/:id', component: ArtistDetailsComponent }
];

export const routing = RouterModule.forRoot(routes);