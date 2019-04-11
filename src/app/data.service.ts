import { Injectable } from '@angular/core';
import { Specie } from './specie';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class DataService {
    REST_URL = 'http://10.111.61.48:8080/FrontRestNoSecurity/rest/species';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    // pour un POST ou PUT en JSON, il faut ajouter dans le header, le fait qu�on envoie du JSON

    constructor(private http: HttpClient) { }

    /*     speciesTab = [
            { id: 1, commonName: 'Horse', latinName: 'Feruus Cabalus' },
            { id: 77, commonName: 'Cat', latinName: 'Felis Silvestrus Catus' },
            { id: 4, commonName: 'Dog', latinName: 'Canidae' }
        ];
     */
    /*   listSpecies() {
          return this.speciesTab;
      } */


    listSpecies(): Observable<Specie[]> {
        return this.http.get<Specie[]>(this.REST_URL);
    }


    createSpecie(specie: Specie): Observable<any> {
        return this.http.post<Specie>(this.REST_URL, specie, this.httpOptions);
    }

    updateSpecie(specie: Specie): Observable<any> {
        return this.http.put<Specie>(this.REST_URL + '/' + specie.id, specie, this.httpOptions);
    }

    deleteSpecie(specie: Specie | number): Observable<Specie> {
        const id = typeof specie === 'number' ? specie : specie.id;
        const url = `${this.REST_URL}/${id}`;
        return this.http.delete<Specie>(url, this.httpOptions);
    }

    getSpecie(id: number, specie: Specie[]): Specie {

        let specieFoundById: Specie;

        for (const sp of specie) {
            if (sp.id === id) {
                specieFoundById = sp;
            }
        }
        return specieFoundById;
    }

    /* GET species whose name contains search term */
    searchSpecies(term: string): Observable<Specie[]> {
        if (!term.trim()) {
            // if not search term, return empty hero array.
            return of([]);
        }
        return this.http.get<Specie[]>(`${this.REST_URL}/?name=${term}`);

        // il n'y a pas de lien correspondant dans l'API de JCV, cette requete retourne la liste de tous les species
    }

}
