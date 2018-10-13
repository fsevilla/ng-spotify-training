import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { OauthService } from './oauth.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
   private spotifyApi = environment.spotifyApi;
   private token: string;

  constructor(
  	private httpClient: HttpClient,
    private oAuthService: OauthService
  ) { 
    this.token = this.oAuthService.getToken();
  }

  private getHttpOptions(skipToken?: boolean): any {
	  let headers = new HttpHeaders({
	    'Content-Type':  'application/json',
	    'Accept': 'application/json'
	  });

    if (!skipToken) {
      headers = headers.append('Authorization', this.token);
    }
     return { headers };
	 }

  private getParams(params: any): HttpParams {
    let httpParams = new HttpParams();

    for(const param in params) {
      if(params.hasOwnProperty(param)) {
        httpParams = httpParams.append(param, params[param]);
      }
    }

    return httpParams;
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

  searchArtist(query: string, type: string = 'artist') {
    let params = new HttpParams();
    params = params.append('q', query);
    params = params.append('type', type);
   
    let httpOptions = this.getHttpOptions()
    httpOptions.params = params;

     return this.httpClient.get(`${this.spotifyApi}/search`, httpOptions)
      .toPromise();
}

  getMyPlaylists(): Promise<any> {
  	return this.httpClient.get(`${this.spotifyApi}/me/playlists`, this.getHttpOptions())
  		.toPromise();
  }

  getToken(code: string): Promise<any> {
    const { spotifyAccountApi, client_id, client_secret, appUrl, b64_client_id_secret } = environment;

    const params = {
      code: code,
      grant_type: 'authorization_code',
      client_id: client_id,
      client_secret: client_secret,
      redirect_uri: `${appUrl}token`
    };
    
    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    const httpParams = this.getParams(params);

    return this.httpClient.post(`${spotifyAccountApi}api/token`, httpParams.toString(), { headers: headers })
      .toPromise();
  }

}
