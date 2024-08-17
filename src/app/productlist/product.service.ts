import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})

export class ProductService{
    constructor(private htp:HttpClient){

    }

    getProductList(count = 12, page = 0): Observable<any>{
        return this.htp.get("https://dummyjson.com/products?limit="+count+"&skip="+page);
    }
}