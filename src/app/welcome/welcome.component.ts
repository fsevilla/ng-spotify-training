import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { SpotifyService } from '../shared/services/spotify.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  topArtists: Array<any>;
  myPlaylists: Array<any>;
  mySearch: FormGroup;
  constructor(
  	private spotifyService: SpotifyService,
    private router: Router,
    private fb: FormBuilder
  ) { 
    this.createForm();
  }

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
      });
  }

  onSearch(): void {
     this.router.navigate(['/search'],{queryParams: {artist: this.mySearch.value.search}});
  }

  createForm(): void {
    this.mySearch = this.fb.group({
      search: [null, [Validators.required]],
      range: [null, [Validators.required, Validators  .min(18)]],
    });
  }

}
