import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
   private spotifyApi = environment.spotifyApi;
   private token = environment.token;

  constructor(
  	private httpClient: HttpClient
  ) { }

  private getHttpOptions(): any {
	return {
	  headers: new HttpHeaders({
	    'Content-Type':  'application/json',
	    'Authorization': this.token,
	    'Accept': 'application/json'
	  })
	 };
  }

  getCurrentUser(): Promise<any> {

  	return this.httpClient.get(`${this.spotifyApi}/me`, this.getHttpOptions())
  		.toPromise()
  }

  getTop(type: string): Promise<any> {

  	return this.httpClient.get(`${this.spotifyApi}/me/top/${type}`, this.getHttpOptions())
  		.toPromise();
  }

  getArtist(id: string): Promise<any> {

	 return this.httpClient.get(`${this.spotifyApi}/artists/${id}`, this.getHttpOptions())
	 	.toPromise();
  }

  getArtistAlbums(id: string = "53KTldaJ8tHSkYU3nigfwP"): Promise<any> {
  	return this.httpClient.get(`${this.spotifyApi}/artists/${id}/albums`, this.getHttpOptions())
	 	.toPromise();
  }

  getMyPlaylists(): Promise<any> {
  	return this.httpClient.get(`${this.spotifyApi}/me/playlists`, this.getHttpOptions())
  		.toPromise();
  }

}
