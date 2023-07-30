import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = 'https://localhost:44340/api/';
  constructor(private httpClient: HttpClient) {}
  getCars(): Observable<ListResponseModel<Brand>> {
    let newPath = this.apiUrl + 'Brand/getall';
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }
}
