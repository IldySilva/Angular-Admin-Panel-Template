import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Product } from 'src/app/Model/product';
import { DialogsService } from '../view/dialogs.service';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {



  baseUrl = "http://localhost:3001/products";
  dialogs:any;
  constructor(private http: HttpClient,viewServices:DialogsService) { 
this.dialogs=viewServices;

  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(map((obj)=>obj),catchError((e)=>this.errorHandler(e)))
  }
  readAll(): Observable<Product[]> {

    return this.http.get<Product[]>(this.baseUrl);
  }
  delete(id:number): Observable<Product> {
    let url = this.baseUrl + "/" + id;
    return this.http.delete<Product>(url)
  }
  readById(id: number): Observable<Product> {

    let url = this.baseUrl + "/" + id;
    return this.http.get<Product>(url);
  }

  editProduct(product:Product){
    
    let url = this.baseUrl + "/" + product.id;
    return this.http.put<Product>(url,product).pipe(map((obj)=>obj),catchError((e)=>this.errorHandler(e)))


  }
  errorHandler(e:any):Observable<any>{

this.dialogs.showMessage("Ocorreu um erro",true)
return EMPTY;

  }
  

}
