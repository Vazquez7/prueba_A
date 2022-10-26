import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public image:string="https://st.depositphotos.com/1004221/1384/i/600/depositphotos_13846233-stock-photo-boardwalk-in-the-park.jpg";
  public Titulo:string = "Curso de Angular con Interpolación";
  constructor() { }

  ngOnInit(): void {
  }

}
