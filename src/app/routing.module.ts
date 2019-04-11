import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SpecieDetailsComponent } from './specie-details/specie-details.component';
import { AddComponent } from './add/add.component';
import { ModifyComponent } from './modify/modify.component';

const routes: Routes = [
    { path: 'first', component: FirstComponent },
    { path: 'details/:id', component: SpecieDetailsComponent },
    { path: '', redirectTo: '/first', pathMatch: 'full' },
    { path: 'add', component: AddComponent },
    { path: 'modify/:id', component: ModifyComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class RoutingModule { }
