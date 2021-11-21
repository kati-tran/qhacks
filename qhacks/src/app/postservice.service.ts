import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum PostType {
  all = '',
  commission = '2',
  donation = '1'
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
    return this.http.get(`${this.apiurl}?type=${type}`)
  }

  registerUser(postdata: Object){
    this.http.post(`${this.apiurl}`, postdata)
    .subscribe(data => {
      console.log(data['_body']);
     }, error => {
      console.log(error);
    });
  }
  createPost(postdata: Object){
    this.http.post(`${this.apiurl}`, postdata)
    .subscribe(data => {
      console.log(data['_body']);
     }, error => {
      console.log(error);
    });
  }
}
