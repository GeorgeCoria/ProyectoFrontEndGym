import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 
    let fechar:Date = new Date();
    console.log(fechar);
    fechar.setMonth(fechar.getMonth() + 1);
    console.log(fechar);
  }

  ngOnInit(): void {
  }

}
