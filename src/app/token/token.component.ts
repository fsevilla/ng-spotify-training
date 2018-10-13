import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SpotifyService } from '../shared/services/spotify.service';
import { OauthService } from '../shared/services/oauth.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss']
})
export class TokenComponent implements OnInit {
  code: string;
  constructor(
  	private activatedRoute: ActivatedRoute,
  	private spotifyService: SpotifyService,
    private oauthService: OauthService,
    private router: Router
  ) {
		this.activatedRoute.queryParams.subscribe(q => {
			this.code = q.code;
		});
	}

  ngOnInit() {
  	this.getToken();
  }

  getToken() {
  	this.spotifyService.getToken(this.code)
  		.then(token => {
        this.oauthService.setToken(`${token.token_type} ${token.access_token}`);
        this.router.navigate(['/welcome']);
  		}).catch(err => {
  			console.error(err);
  		})
  }

}
