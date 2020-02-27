import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('spotify service listo');
  }

  getQuery( query: string ) {

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD77c2VOen36LoUh9T7zS2ovYjnjwyVYD3iw1ZLumDTq6uHB4-gY2kjvjrL_YiKoBkUEHr0BM88za8oyzkNfg2Q32Ay_tBnHVgbBd9K2HD7D9R30T6TDdBBB5f50tYdASjMyJIwFLKevuuWaju3NX1FhpVpXlctehE'
    });

    return this.http.get(url, { headers });

  }
  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
              .pipe( map( data => data['albums'].items ));

  }

  getArtistas( termino: string ) {

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
                .pipe( map( data => data['artists'].items));

  }
}
