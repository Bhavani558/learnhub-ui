import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Course {
  id: number;
  image: string;
  title: string;
  instructor: string;
  category: string;
  students: number;
  duration: string;
  price: number;
  status: string;
}

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './courses.html',
  styleUrls: ['./courses.css']
})
export class Courses {

  // Search & Filter
  searchText: string = '';
  selectedCategory: string = 'All Categories';
  selectedStatus: string = 'All Status';

  // Statistics
  totalCourses = 148;
  activeCourses = 124;
  totalStudents = 2548;
  totalRevenue = '₹4.8L';

  // Sample Course Data
  courses: Course[] = [

    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=120',
      title: 'Java Full Stack Development',
      instructor: 'John Smith',
      category: 'Programming',
      students: 450,
      duration: '6 Months',
      price: 4999,
      status: 'Active'
    },

    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=120',
      title: 'Angular Development',
      instructor: 'David Lee',
      category: 'Web Development',
      students: 320,
      duration: '4 Months',
      price: 3999,
      status: 'Active'
    },

    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=120',
      title: 'Spring Boot Masterclass',
      instructor: 'Emily Davis',
      category: 'Programming',
      students: 280,
      duration: '5 Months',
      price: 4499,
      status: 'Draft'
    },

    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=120',
      title: 'MySQL Database',
      instructor: 'Michael Brown',
      category: 'Database',
      students: 190,
      duration: '2 Months',
      price: 2999,
      status: 'Active'
    }

  ];

  constructor() {}

  // ==========================
  // Button Actions
  // ==========================

  addCourse() {
    alert('Add Course Clicked');
  }

  viewCourse(course: Course) {
    alert('Viewing: ' + course.title);
  }

  editCourse(course: Course) {
    alert('Editing: ' + course.title);
  }

  deleteCourse(course: Course) {

    if (confirm('Delete "' + course.title + '" ?')) {

      this.courses = this.courses.filter(c => c.id !== course.id);

    }

  }

}