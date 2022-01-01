import { Injectable } from '@angular/core';
import {HttpService} from "../data/http.service";
import {ICompanyInfoFull} from "../data/interfaces/CompanyInfoFull";
import {BehaviorSubject} from "rxjs";




@Injectable()
export class initCompanyListServices {
  companyList!: ICompanyInfoFull[];
  private resList!: ICompanyInfoFull[];
  public subject: BehaviorSubject<ICompanyInfoFull[]> = new BehaviorSubject<ICompanyInfoFull[]>([])
  private sortKey: sortItems = '';
  public listIndustries: Set<string> = new Set<string>();
  public listTypes: Set<string> = new Set<string>();
  constructor(private companies: HttpService){
    this.companies.getCompanies().subscribe((x: ICompanyInfoFull[]) => this.initialise(x))
  }



  public getCompany(companyId: number) {
    return this.companyList.find((x: ICompanyInfoFull) => x.id === companyId)!;
  }
  public sortList(key: sortItems){
    if(key !== ''){
      this.resList = this.resList.sort((x, y) => {
        if (x[key] > y[key])
          return 1;
        if (x[key] < y[key])
          return -1;
        return 0;
      })
      this.sortKey = key;
    }
    this.subject.next(this.resList);
  }
  public filterListCompanies(name:string,type:string,industry:string){
    this.resList = [];
    for (let company of this.companyList){
      if (this.checkIndustryCompany(company,industry) && this.checkNameCompany(company,name) && this.checkTypeCompany(company,type)){
        this.resList.push(company);
      }
    }
    this.sortList(this.sortKey);
  }

  public getCompaniesTypes(){
    return this.listTypes;
  }

  public getCompaniesIndustries(){
    return this.listIndustries;
  }

  private initialise(companyList: ICompanyInfoFull[]){
    this.companyList = companyList
    this.subject.next(companyList);
    this.resList = companyList;
    this.makeCompaniesIndustries();
    this.makeCompaniesTypes();
  }
  private checkIndustryCompany(company:ICompanyInfoFull, industry:string ){
    return company.industry === industry || !industry;
  }
  private checkTypeCompany(company:ICompanyInfoFull, type:string ){
    return company.type == type || !type;
  }
  private checkNameCompany(company:ICompanyInfoFull, name:string ){
    return company.business_name.toLowerCase().includes(name) || !name;
  }

 private makeCompaniesTypes(){
    for (let company of this.companyList)
      this.listTypes.add(company.type)
  }
  private makeCompaniesIndustries(){
    for (let company of this.companyList)
      this.listIndustries.add(company.industry)
  }
}
