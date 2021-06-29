import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class KpDataService {

 private url = 'https://kol2tai.herokuapp.com/api/shop/items';

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get(this.url);
  }

  getById(id: string | null) {
    return this.http.get(this.url + '/' + id);
  }


}
