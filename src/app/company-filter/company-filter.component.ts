import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {initCompanyListServices} from "../serviсes/init-company-list-services";
import {ICompanyInfoFull} from "../data/interfaces/CompanyInfoFull";

@Component({
  selector: 'app-company-filter',
  templateUrl: './company-filter.component.html',
  styleUrls: ['./company-filter.component.css']
})
export class CompanyFilterComponent implements OnInit {
  filterForm!: FormGroup;

  listIndustries: Set<string> = new Set<string>();
  listTypes: Set<string> = new Set<string>();
  constructor(private formBuilder: FormBuilder, private companyService: initCompanyListServices) {
    this.filterForm = this.formBuilder.group({
      name: new FormControl(null),
      type: new FormControl(null),
      industry: new FormControl(null)
    })
  }

  ngOnInit(): void {
    this.listIndustries=this.companyService.getCompaniesIndustries();
    this.listTypes=this.companyService.getCompaniesTypes();
  }
  public listFilter(){
    const name: string = this.filterForm.get('name')?.value;
    const type: string = this.filterForm.get('type')?.value;
    const industry: string = this.filterForm.get('industry')?.value;
    this.companyService.filterListCompanies(name,type,industry);
  }
}
