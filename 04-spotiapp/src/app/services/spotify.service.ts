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
      'Authorization': 'Bearer BQAgCeFqOzR9mojYrpTEkDDam48HTyRciW_USwqgkQH3Ps_ob0swjEtJ68nBolHa8ej2WzGh8K4Q3OMk2p_97Np9LP19OmYL0wVAx5qtCOQUfR5_zRIONT5zrQbwKPmuBMw4gpkxrSUe5GCr0XqPQKOAwkXqVNdviTY'
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
