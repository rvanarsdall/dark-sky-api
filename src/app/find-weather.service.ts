import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders
} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class FindWeatherService {
  constructor(private http: HttpClient) {}

  gettingCoordinates(data) {
    let MAPAPIKEY = "REPLACEGOOGLEAPI-KEY-HERE";
    return this.http.get(
      `https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:${data}&key=${MAPAPIKEY}`
    );
  }

  getWeatherToday(lat, long) {
    return this.http.get(`http://localhost:3000/${lat}/${long}`);
  }
}
