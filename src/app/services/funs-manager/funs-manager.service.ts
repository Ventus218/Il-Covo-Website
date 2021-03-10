import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fun } from 'src/app/models/fun/fun';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FunsManagerService {

  constructor(private http: HttpClient) { }

  getFuns(): Observable<Fun[]> {
    return this.http.get<Fun[]>( environment.api_base_url + '/funs');
  }
}
