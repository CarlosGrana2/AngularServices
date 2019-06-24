import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { }

  getQuery( query: string) {

    const url =  `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization : 'Bearer BQBcBq1T8YqCONW1BZ8Pm1r64UKM4fJTice2QZ_rsUgKZ5L-UbytAG0ADdlMsCXUSvseYPz6ZlzvReeeBd4'
    });

    return this.http.get( url, {headers});

  }

  getNewRelease() {

    return this.getQuery ('browse/new-releases')
        .pipe ( map (data => data['albums'].items));
  }

  getArtistas( termino: string) {

    return this.getQuery( `search?query=${ termino }&type=artist&market=CO&offset=0&limit=20`)
    .pipe ( map (data => data['artists'].items));

  }


  getArtista( id: string) {

    return this.getQuery( `artists/${ id }`);
}

getTopTrack( id: string) {

  return this.getQuery( `artists/${ id }/top-tracks?country=us`)
  .pipe ( map (data => data['tracks']));
}

}
