import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Create a new Observable
    const sqnc = new Observable(countOnetoTen);

    // Execute the Observable and print the
    // result of each notification
    // next() is a call to countOnetoTen method
    // to get the next value from the observable
    sqnc.subscribe({
        next(num) { console.log(num); }
    });

    // This function runs when subscribe()
    // is called
    function countOnetoTen(observer) {
        for(var i = 1; i <= 10; i++) {
            // Calls the next observable
            // notification
            observer.next(i);
        }

        // Unsubscribe after completing
        // the sequence
        return {unsubscribe(){}};
    }
  }
}
