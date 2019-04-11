import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { RoutingModule } from './routing.module';
import { SpecieDetailsComponent } from './specie-details/specie-details.component';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './add/add.component';
import { ModifyComponent } from './modify/modify.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SpecieDetailsComponent,
    AddComponent,
    ModifyComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
