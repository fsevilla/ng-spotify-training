import { Component, OnInit } from '@angular/core';

import { SpotifyService } from '../shared/services/spotify.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  me: any = {};
  constructor(
  	private spotifyService: SpotifyService
  ) { }

  ngOnInit() {
  	this.spotifyService.getCurrentUser().then(me => {
  		this.me = me;
  		console.log('me:', me);
  	}).catch(err => {
  		console.log('[API ERROR] Ocurrio un error al obtener los datos del usuario', err);
  	});
  }

}
