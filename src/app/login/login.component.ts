import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {
  	const { spotifyAccountApi, client_id, appUrl } = environment;
	const urlSpotify = `${spotifyAccountApi}authorize?
						client_id=${client_id}&
						response_type=code&
						redirect_uri=${appUrl}token`;
	window.location.href = urlSpotify;
  }

}
