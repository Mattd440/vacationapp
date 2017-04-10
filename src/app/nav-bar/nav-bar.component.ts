import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],


})
export class NavBarComponent implements OnInit {
  image: string = "logo.jpg";

  constructor() {  }

  ngOnInit() {
  }
  menu;
  button;
 dropdown() {
  this.menu = document.getElementsByClassName('navbar');
  this.button = document.getElementById('dropdownButton');
this.button.addEventListener('click',function(){
     this.menu.style.display="inline-block"});

}



}
