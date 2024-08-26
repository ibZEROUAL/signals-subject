import {Component, inject, signal} from '@angular/core';
import {TestService} from "../service/test.service";

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {

  testService = inject(TestService);

  //counter : number = 0;
  counter = signal(0);

  increment(){
    this.counter.update(counter=> counter + 1);
    this.testService.testFunction("counter value is "+this.counter());
  }

}
