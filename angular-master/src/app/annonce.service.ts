import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  private baseUrl = 'http://localhost:8080/api/location';

  constructor(private http: HttpClient) { }

  getAnnonceAll(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createAnnonce(customer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, customer);
  }

  updateAnnonce(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteAnnonce(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAnnoncesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getAnnonce(ecole:string,prix:number,nb_places:number,distance:string,type: string ): Observable<any> {
    return this.http.get(`${this.baseUrl}/prix/distance/type/ecole/nb_places/${prix}${distance}${ecole}${type}${nb_places}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }
}
