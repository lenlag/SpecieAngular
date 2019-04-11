import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Specie } from '../specie';
import { DataService } from '../data.service';

@Component({
    selector: 'app-specie-details',
    templateUrl: './specie-details.component.html',
    styleUrls: ['./specie-details.component.css']
})
export class SpecieDetailsComponent implements OnInit {

   title = 'Specie details';

    mySpecie: Specie;
    constructor(private location: Location,
        private route: ActivatedRoute,
        private service: DataService,
        private router: Router) { }

    ngOnInit() {
        const id = +this.route.snapshot.params['id'];
        /*  this.specie = this.service.getSpecie(id); */
        this.service.listSpecies().subscribe(
            (value) => { this.mySpecie = this.service.getSpecie(id, value); }
        );
    }


    goBack() {
        this.location.back();
    }

    modify(id: number) {
        this.router.navigate(['/modify/' + id]);
    }
}
