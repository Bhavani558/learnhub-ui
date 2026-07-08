import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [Navbar],
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class Landing {

}