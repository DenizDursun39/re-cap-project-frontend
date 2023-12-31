import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = 'https://localhost:44340/api/';
  constructor(private httpClient: HttpClient) {}
  getBrands(): Observable<ListResponseModel<Brand>> {
    let newPath = this.apiUrl + 'Brand/getall';
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }
  add(brand: Brand): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'Brand/add',
      brand
    );
  }
}
