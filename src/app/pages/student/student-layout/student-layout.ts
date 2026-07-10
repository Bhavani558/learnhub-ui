import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentSidebar } from '../../../shared/student-sidebar/student-sidebar';
import { StudentNavbar } from '../../../shared/student-navbar/student-navbar';

@Component({
  selector: 'app-student-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    StudentSidebar,
    StudentNavbar
  ],
  templateUrl: './student-layout.html',
  styleUrls: ['./student-layout.css']
})
export class StudentLayout {

}
