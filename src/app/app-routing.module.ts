import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CompanyListComponent} from "./company-list/company-list.component";
import {CompanyYandexMapComponent} from "./company-yandex-map/company-yandex-map.component";
import {CompanyDetailComponent} from "./company-detail/company-detail.component";
import {LayoutComponentComponent} from "./layout-component/layout-component.component";

const routs: Routes = [
  {path: '', component: LayoutComponentComponent, children :[
      {path: '',component: CompanyListComponent },
      {path: 'map', component: CompanyYandexMapComponent },
      { path: 'detail/:id', component: CompanyDetailComponent},
    ]
  }
]

@NgModule({
  imports:[
    RouterModule.forRoot(routs)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule{

}
