import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operator';
import { pipe } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  getQuery( query: string ){
    const URL = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCKOKvIq6Dobbqd2aBXSQZ1Q9mgncd2UHJ4lzBBsUSbRc2IW_5JQE94GMUIqR5vBY-kebdj1-jx0y7ucCvy5iYwRuZRqFKTq6q45hThDzgniW03oPAI5M13EBjCoq9QddDOUnhTgTeDlunCfbfRk8seMisayYGYc0A'
    });

    return this.http.get(URL, { headers });
  }


  constructor(private http: HttpClient) {
    console.log('spotify service listo');
  }
  getNewReleases() {
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers } );
          .pipe( map( data => data['albums'].items ));
  }

  getArtista(termino: string){
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers } );
    .pipe( map( data => data['artists'].items ));
  }
}
