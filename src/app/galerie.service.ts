import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GalerieService {

  constructor(private http:HttpClient) {

  }
  search(motcle,currentPage,size):Observable<any>{
    let chemin="https://pixabay.com/api/?key=16588805-ca2f1a5c98a669bb8c5d73ef8&q="+motcle+"&image_type="+currentPage+"&pretty="+size;
    return this.http.get<any>(chemin);
}
findbyid(value):Observable<any>{
  let chemin="https://pixabay.com/api/?key=16588805-ca2f1a5c98a669bb8c5d73ef8&id="+value+"&image_type=photo&pretty=true";
  return this.http.get<any>(chemin);
}
}
