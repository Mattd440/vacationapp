import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showList:Function;

  constructor() {
    this.showList = function(){
      let list = document.getElementById("destList");
      // if(list.style.display == 'none'){
      //   list.style.display = "block";
      // }else if(list.style.display == 'block'){
      //   list.style.display = 'none';
      // }
      list.classList.toggle('showList')


    }

  }

  ngOnInit() {
  }

}
