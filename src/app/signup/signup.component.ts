import { Component, OnInit } from '@angular/core';
import {UserModel} from '../user.model'
import {Http, Response,Headers,RequestOptions} from '@angular/http';
import {DataService} from '../data.service' ;
import 'rxjs/add/operator/map';
import {validate} from "codelyzer/walkerFactory/walkerFn";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


    model = new UserModel('','','','','','','',null);

  ngOnInit() {

  }


}
