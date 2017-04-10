import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service' ;
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  cruises = [];
  resorts = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getCruises().subscribe(resCruiseData => this.cruises = resCruiseData);
    this.dataService.getResorts().subscribe(resResortData => this.resorts = resResortData);
  }

}
