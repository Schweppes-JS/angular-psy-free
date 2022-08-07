import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ThemePalette } from '@angular/material/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent extends HeaderComponent { }
