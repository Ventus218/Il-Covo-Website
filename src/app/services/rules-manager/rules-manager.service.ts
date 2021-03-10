import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rule } from 'src/app/models/Rule/rule';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RulesManagerService {

  constructor(private http: HttpClient) { }

  getRules(): Observable<Rule[]> {
    return this.http.get<Rule[]>( environment.api_base_url + '/rules');
  }
}
