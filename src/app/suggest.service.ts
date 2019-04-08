import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SuggestService {
  constructor(private http: HttpClient) {}

  public getSuggestJson(): Observable<any> {
    return this.http.get(environment.suggestUrl);
  }
}
