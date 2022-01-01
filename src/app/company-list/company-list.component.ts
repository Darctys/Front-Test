import { Component, OnInit } from '@angular/core';
import {ICompanyInfoFull} from "../data/interfaces/CompanyInfoFull";
import {initCompanyListServices} from "../serviсes/init-company-list-services";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  public companiesList: ICompanyInfoFull[] = [];
  constructor(private initCompanyListServices : initCompanyListServices) {
  }
  ngOnInit(): void {
    this.initCompanyListServices.subject.subscribe((value:ICompanyInfoFull[])=>{
        this.companiesList = value
      })
  }
}
