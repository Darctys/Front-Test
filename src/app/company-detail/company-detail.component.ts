import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {ICompanyInfoFull} from "../data/interfaces/CompanyInfoFull";
import {initCompanyListServices} from "../serviсes/init-company-list-services";

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css'],


})
export class CompanyDetailComponent implements OnInit {
  public company: ICompanyInfoFull | undefined;
  constructor( private route: ActivatedRoute, private companyService: initCompanyListServices) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.queryParams['id'])
      this.company = this.companyService.getCompany(id);
  }
}
