import { Component, OnInit } from '@angular/core';
import { Specie } from '../specie';
import { Observable, Subject } from 'rxjs';
import { DataService } from '../data.service';
import {
    debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    species$: Observable<Specie[]>;
    private searchTerms = new Subject<string>();

    constructor(private service: DataService) { }

    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.species$ = this.searchTerms.pipe(
            // wait 300ms after each keystroke before considering the term
            debounceTime(300),

            // ignore new term if same as previous term
            distinctUntilChanged(),

            /*              Even with a 300ms pause between requests, you could have multiple HTTP requests in flight
                            and they may not return in the order sent.
                            switchMap() preserves the original request order while returning only the observable
                            from the most recent HTTP method call
             */
            // switch to new search observable each time the term changes
            switchMap((term: string) => this.service.searchSpecies(term)),
        );
    }

}
