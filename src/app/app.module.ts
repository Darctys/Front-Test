import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { CompanyYandexMapComponent } from './company-yandex-map/company-yandex-map.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { LayoutComponentComponent } from './layout-component/layout-component.component';
import { CompanyItemComponent } from './company-item/company-item.component';
import {HttpService} from "./data/http.service";
import {initCompanyListServices} from "./serviсes/init-company-list-services";
import {HttpClientModule} from "@angular/common/http";
import { CompanySortComponent } from './company-sort/company-sort.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CompanyFilterComponent } from './company-filter/company-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyYandexMapComponent,
    CompanyListComponent,
    CompanyDetailComponent,
    LayoutComponentComponent,
    CompanyItemComponent,
    CompanySortComponent,
    CompanyFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HttpService, initCompanyListServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
