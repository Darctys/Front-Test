import { Component, OnInit } from '@angular/core';
import {initCompanyListServices} from "../serviсes/init-company-list-services";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-company-sort',
  templateUrl: './company-sort.component.html',
  styleUrls: ['./company-sort.component.css']
})
export class CompanySortComponent implements OnInit {

  sortForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private initCompanyListServices: initCompanyListServices) {
    this.sortForm = this.formBuilder.group({sortType:new FormControl(null)});
  }

  ngOnInit(): void {
  }

  public sortList(){
    const sortType: sortItems = this.sortForm.get('sortType')?.value;
    this.initCompanyListServices.sortList(sortType);
  }
}
