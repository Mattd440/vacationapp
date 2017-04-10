import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  bookName:String;
  bookDest:String;

  updateName:Function;

  constructor(private el: ElementRef) {

    this.updateName = function () {
      let textString = "Thank you for your interest in " + this.bookDest + " . We will by in contact soon. Thank you " + this.bookName;
      let para = document.getElementById('para');
      if(!document.getElementById('username')) {
        let name = document.createElement('p');
        name.style.fontSize = "18" + "px";
        name.setAttribute("id","username");
        name.style.backgroundColor = "darkblue";
        name.style.color = "white";
        name.style.border = "1px solid black";
        name.style.borderRadius = "6px";
        name.style.padding = "5px";
        let text = document.createTextNode(textString);
        name.appendChild(text);
        para.insertBefore(name, para.childNodes[0]);
        let form = document.getElementById('destForm');
        form.style.display = 'none';
      }
    }
  }
  ngOnInit(){

  }





}
