import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MainTimeData } from '../models/model';

@Injectable({
  providedIn: 'root',
})
export class TimeDataService {
  constructor(private http: HttpClient) {}
  getTimeData() {
    return this.http.get<MainTimeData>(environment.ApiBaseUrl, {
      headers: new HttpHeaders()
        .set(
          environment.XRapidAPIHostHeaderName,
          environment.XRapidAPIHostHeaderValue
        )
        .set(
          environment.XRapidAPIKeyHeaderName,
          environment.XRapidAPIKeyHeaderValue
        ),
      params: new HttpParams()
        .set('interval', '30min')
        .set('function', 'TIME_SERIES_INTRADAY')
        .set('symbol', 'IBM'),
    });
  }
}
