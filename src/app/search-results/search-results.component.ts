import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpotifyService } from '../shared/services/spotify.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
   artists: Array<any>;
  constructor(
  	private spotifyService: SpotifyService,
  	private activatedRoute: ActivatedRoute) { 
  		this.activatedRoute.queryParams.subscribe(q => {
  			this.search(q.artist);
  		});
  }

  ngOnInit() {
  }

  search(query: string): void {
  	this.spotifyService.searchArtist(query)
      .then((res: any) => {
      	this.artists = res.artists.items;
        console.log(res.artists.items);
      }).catch(err => {
        console.error(err);
      });
  }

}
