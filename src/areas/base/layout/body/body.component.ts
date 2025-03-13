import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'layout-body',
  templateUrl: './Body.component.html',
  imports: [FooterComponent,HeaderComponent,RouterModule]
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
