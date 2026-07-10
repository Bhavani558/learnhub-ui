import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface StudentDashboardDTO {
  studentName: string;
  enrolledCourses: number;
  certificates: number;
  overallProgress: number;
}
export interface MyCourse {

  courseId:number;
  title:string;
  instructor:string;
  progress:number;

}
@Injectable({
  providedIn: 'root'
})
export class StudentDashboardService {

  private apiUrl = 'http://localhost:8081/api/student/dashboard';

  constructor(private http: HttpClient) {}

  getDashboard(): Observable<StudentDashboardDTO> {
    return this.http.get<StudentDashboardDTO>(this.apiUrl);
  }
  getMyCourses(){

  return this.http.get<MyCourse[]>(
    "http://localhost:8081/api/student/my-courses"
  );

}
}
