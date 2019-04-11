import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Specie } from '../specie';

@Component({
    selector: 'app-first',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

    myTable = [];
    errorJson;

    title = 'Species list';


    constructor(private service: DataService, private router: Router) { }

    ngOnInit() {
        this.listSpecies();
        console.log('onInit');

    }

    listSpecies() {
        this.service.listSpecies().subscribe(
            (specieJson) => { this.myTable = specieJson; }, // 1re fonction = recup�re les valeurs renvoy�es par l'Observable
            (error) => { this.errorJson = error; }, // 2eme fonction = recup�re une erreur
            () => { console.log('Observable completed!'); } // 3eme f-on appell�e quand l'Observable a fini de bosser
        );
    }

    createSpecie() {
        this.router.navigate(['/add']);

    }

    delete(specie: Specie): void {
        this.myTable = this.myTable.filter(s => s !== specie);
        this.service.deleteSpecie(specie).subscribe();
    }

}
