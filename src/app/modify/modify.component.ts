import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Specie } from '../specie';
import { DataService } from '../data.service';


@Component({
    selector: 'app-modify',
    templateUrl: './modify.component.html',
    styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {

    title = 'Modify a specie';
    specie: Specie;

    constructor(private router: Router, private service: DataService, private route: ActivatedRoute) { }

    ngOnInit() {
        const id = +this.route.snapshot.params['id'];
        this.service.listSpecies().subscribe(
            (value) => { this.specie = this.service.getSpecie(id, value); }
        );
    }

    cancel() {
        this.router.navigate(['/first']);

    }

    submit(): void {
        this.service.updateSpecie(this.specie).subscribe(
            () => this.router.navigate(['/first'])
        );
    }

}
