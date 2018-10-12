import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../shared/services/spotify.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})
export class ArtistDetailsComponent implements OnInit {
  artist: any;
  albums: Array<any>;
  constructor(
  	private spotifyService: SpotifyService,
  	private activatedRoute: ActivatedRoute
  ) { 
  	this.activatedRoute.params.subscribe((params: any) => {
  		this.getArtistDetails(params.id);
  	});
  }

  ngOnInit() {
  }

  getArtistDetails(id: string): void {
  	this.spotifyService.getArtist(id)
		.then(artist => {
			this.artist = artist;
			console.log(artist);
			return this.spotifyService.getArtistAlbums(id);	
		})
		.then(albums => {
			console.log('Albums: ', albums);
			this.albums = albums.items;
		})
		.catch(err => {
			console.error(err);
		});
  }

}
