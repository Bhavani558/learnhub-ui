import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-student-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './student-sidebar.html',
  styleUrl: './student-sidebar.css'
})
export class StudentSidebar {

}