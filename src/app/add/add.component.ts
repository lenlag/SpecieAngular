import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Specie } from '../specie';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

    constructor(private service: DataService, private location: Location, private router: Router) { }

    id: number;
    specieJson: Specie;
    errorJson;

    title = 'Create new specie';
    ngOnInit() {
    }

    addSpecie(commonName: string, latinName: string): void {
        this.service.createSpecie({ commonName, latinName } as Specie).subscribe(
            (idValue) => { this.specieJson = idValue; },
            (error) => { this.errorJson = error.message; },
            () => { this.router.navigate(['/first']); },
            // 3eme f-on, dess que l'onservable a fini son travail, on nous redirige vers la page first
        );


    }
    /*
      this.heroesService.addHero(newHero)
      .subscribe(hero => this.heroes.push(hero)); */

    cancel() {
        this.location.back();
    }

}
