import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  testSubject$ = new Subject<string>();

  testFunction(myString : string){
    return this.testSubject$.next(myString);
  }


}
