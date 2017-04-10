import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Http} from '@angular/http';
@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {
forecast;
  cityName:string;
  city: Object;
  constructor(private dataService: DataService , public http:Http) {}


  getForeCast(){
    if(this.cityName.length > 0 ) {
      this.dataService.getForeCast(this.cityName)
        .subscribe(data => this.forecast = data.list);

      this.dataService.getForeCast(this.cityName)
        .subscribe(data => this.city = data.city.name);
    }
  }

  ngOnInit() {


//     console.log(this.weather);
    console.log(this.forecast);
  }
}
