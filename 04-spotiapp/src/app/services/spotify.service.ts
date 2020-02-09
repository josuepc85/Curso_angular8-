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
      'Authorization': 'Bearer BQB6JYtt3HIpTrR9DfAdtUQS0yxPH--vH-N8pM4UtaNhHjAoAJu61Shc_FcxFgHlkxDI5OHpkSjLRFazU7_iird2S8DWFiDlMkxq3u3rpAjPof_V0H93zWwgzv1FLWc4X5ef0StccCupY9q8jXNdHus_N27yq2_xNZ4'
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
