import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  StudentDashboardService,
  StudentDashboardDTO,
  MyCourse
} from '../../../core/services/student-dashboard.service';
@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class StudentDashboard implements OnInit {

 dashboard: StudentDashboardDTO = {
  studentName: '',
  enrolledCourses: 0,
  certificates: 0,
  overallProgress: 0
};
  courses: MyCourse[] = [];

  constructor(private dashboardService: StudentDashboardService) {}

  ngOnInit(): void {

    this.dashboardService.getDashboard().subscribe({

      next: (data) => {
        console.log(data);
        this.dashboard = data;
      },

      error: (err) => {
        console.error(err);
      }

    });
    
    this.dashboardService.getMyCourses().subscribe({

  next: (data) => {
    console.log("My Courses:", data);
    this.courses = data;
  },

  error: (err) => {
    console.error("My Courses Error:", err);
  }

});

  }
   ngOnDestroy() {
    console.log("Dashboard Destroy");
  }

}