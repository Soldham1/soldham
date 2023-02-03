import { Component, OnInit } from '@angular/core';
import AOS from "aos";

AOS.init();

@Component({
  selector: 'app-moon',
  templateUrl: './moon.component.html',
  styleUrls: ['./moon.component.css']
})
export class MoonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
