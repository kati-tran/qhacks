import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum PostType {
  all = '',
  commission = 'commission',
  donation = 'donation'
}
@Injectable({
  providedIn: 'root'
})
export class PostserviceService {
  apiurl = 'https://qhacks-backend.herokuapp.com/api/post';

  constructor(private http: HttpClient) { }
  
  searchData(title: string, type: PostType): Observable<any> {
    return this.http.get(`${this.apiurl}?s=${encodeURI(title)}&type=${type}`).pipe(
      map(results => results['Search'])
    );
  }

  getPosts(type: PostType): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Expose-Headers': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
        'Access-Control-Allow-Headers': 'access-control-allow-headers,access-control-allow-methods,access-control-allow-origin,access-control-expose-headers,content-type',
        'Content-Type':  'application/json',
        'Accept': 'application/json, text/plain'
        })
      };
      var headers = new Headers();
      headers.append('Accept', 'application/json');
      headers.append('Content-Type', 'application/json');
      headers.append('responseType', 'text');
    return this.http.get(`${this.apiurl}`, httpOptions).pipe(
      map(results => results['GetPosts'])
    );
  }
}
