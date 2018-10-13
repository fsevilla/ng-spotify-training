import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { SpotifyService } from '../shared/services/spotify.service';
import { OauthService } from '../shared/services/oauth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  me: any = {};
  constructor(
  	private spotifyService: SpotifyService,
    private oauthService: OauthService,
    private router: Router
  ) { }

  ngOnInit() {
  	this.spotifyService.getCurrentUser().then(me => {
  		this.me = me;
  		console.log('me:', me);
  	}).catch(err => {
  		console.log('[API ERROR] Ocurrio un error al obtener los datos del usuario', err);
  	});
  }

  logOut(): void {
    this.oauthService.clearToken();
    this.router.navigate(['/login']);
  }

}
