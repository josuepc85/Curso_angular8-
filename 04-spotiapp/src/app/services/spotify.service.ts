import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('spotify service listo');
  }
  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCKOKvIq6Dobbqd2aBXSQZ1Q9mgncd2UHJ4lzBBsUSbRc2IW_5JQE94GMUIqR5vBY-kebdj1-jx0y7ucCvy5iYwRuZRqFKTq6q45hThDzgniW03oPAI5M13EBjCoq9QddDOUnhTgTeDlunCfbfRk8seMisayYGYc0A'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers } );
    /*
    .subscribe ( data => {
      console.log(data);
    });*/


  }
}
