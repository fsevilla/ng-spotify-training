import { Component, OnInit } from '@angular/core';

import { SpotifyService } from '../shared/services/spotify.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  topArtists: Array<any>;
  myPlaylists: Array<any>;
  constructor(
  	private spotifyService: SpotifyService
  ) { }

  ngOnInit() {
  	this.getMyTopArtists();
    this.getMyPlaylists();
  }

  getMyTopArtists(): void {
    this.spotifyService.getTop('artists').then(top => {
      this.topArtists = top.items;
      console.log(top);
    }).catch(err => {
      console.error(err);
    });
  }

  getMyPlaylists(): void {
    this.spotifyService.getMyPlaylists()
      .then(playlists => {
        this.myPlaylists = playlists.items;
        console.log(playlists);
      }).catch(err => {
        console.error(err);
      })
  }

}
