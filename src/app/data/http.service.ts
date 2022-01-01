import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICompanyInfoFull} from "./interfaces/CompanyInfoFull";

@Injectable()
export class HttpService {
  public url = "https://random-data-api.com/api/company/random_company?size=100"
  constructor(private http: HttpClient) {}
  public getCompanies()  {
    return this.http.get<ICompanyInfoFull[]>(this.url)
  }
}
