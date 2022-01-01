import {Component, Input, OnInit} from '@angular/core';
import {ICompanyInfoFull} from "../data/interfaces/CompanyInfoFull";
import {Router} from "@angular/router";

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.css']
})
export class CompanyItemComponent implements OnInit {
  @Input() public companyItem!: ICompanyInfoFull;
  constructor(private _router: Router) { }

  ngOnInit(): void {

  }
  public goToCompanyDetail(){
    this._router.navigateByUrl(`detail/?id=${this.companyItem.id}`).then()
  }
}
