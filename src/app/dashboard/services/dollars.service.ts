import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Dollar } from '../interfaces/dollars.interface';

@Injectable({
   providedIn: 'root'
})
export class DollarsService {
   private http = inject(HttpClient);
   private url = 'https://dolarapi.com/v1/dolares';

   getDollars () {
      return this.http.get<Dollar[]>(this.url);
   }
}
