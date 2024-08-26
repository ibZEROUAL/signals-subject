import {Component, inject, OnInit, signal} from '@angular/core';
import {TestService} from "../service/test.service";

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent implements OnInit{

  testService = inject(TestService);

  counterValue = signal('');

  ngOnInit(): void {
    this.testService.testSubject$.subscribe((s:string) => {
      this.counterValue.set(s);
    })
  }



}
