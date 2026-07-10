// import { Routes } from '@angular/router';

// import { Landing } from './pages/landing/landing';
// import { Login } from './pages/login/login';
// import { Register } from './pages/register/register';

// // Admin
// import { Dashboard as AdminDashboard } from './pages/admin/dashboard/dashboard';
// import { Courses } from './pages/admin/courses/courses';
// import { Users } from './pages/admin/users/users';
// import { Certificates as AdminCertificates } from './pages/admin/certificates/certificates';

// // Instructor
// import { Dashboard as InstructorDashboard } from './pages/instructor/dashboard/dashboard';
// import { Lessons } from './pages/instructor/lessons/lessons';
// import { Quizzes } from './pages/instructor/quizzes/quizzes';
// import { Questions } from './pages/instructor/questions/questions';

// // Student
// import { Dashboard as StudentDashboard } from './pages/student/dashboard/dashboard';
// import { ExploreCourses } from './pages/student/explore-courses/explore-courses';
// import { MyCourses } from './pages/student/my-courses/my-courses';
// import { LessonPlayer } from './pages/student/lesson-player/lesson-player';
// import { Quiz } from './pages/student/quiz/quiz';
// import { Progress } from './pages/student/progress/progress';
// import { Certificates as StudentCertificates } from './pages/student/certificates/certificates';

// export const routes: Routes = [

//   { path: '', component: Landing },

//   { path: 'login', component: Login },

//   { path: 'register', component: Register },

//   // Admin

//   { path: 'admin/dashboard', component: AdminDashboard },
//   { path: 'admin/courses', component: Courses },
//   { path: 'admin/users', component: Users },
//   { path: 'admin/certificates', component: AdminCertificates },

//   // Instructor

//   { path: 'instructor/dashboard', component: InstructorDashboard },
//   { path: 'instructor/lessons', component: Lessons },
//   { path: 'instructor/quizzes', component: Quizzes },
//   { path: 'instructor/questions', component: Questions },

//   // Student

//   { path: 'student/dashboard', component: StudentDashboard },
//   { path: 'student/explore-courses', component: ExploreCourses },
//   { path: 'student/my-courses', component: MyCourses },
//   { path: 'student/lesson-player', component: LessonPlayer },
//   { path: 'student/quiz', component: Quiz },
//   { path: 'student/progress', component: Progress },
//   { path: 'student/certificates', component: StudentCertificates },

//   {
//     path: '**',
//     redirectTo: ''
//   }

// ];
import { Routes } from '@angular/router';

import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Dashboard } from './pages/admin/dashboard/dashboard';
import { Courses } from './pages/admin/courses/courses';
import { AdminLayout } from './pages/admin/admin-layout/admin-layout';
import { Categories } from './pages/admin/categories/categories';
import { Certificates } from './pages/admin/certificates/certificates';
import { Reports } from './pages/admin/reports/reports';
import { Settings } from './pages/admin/settings/settings';
import { Profile } from './pages/admin/profile/profile';
import { Students } from './pages/admin/students/students';
import { Instructors } from './pages/admin/instructors/instructors';
import { Landing } from './pages/landing/landing';
import { StudentLayout } from './pages/student/student-layout/student-layout';
import { StudentDashboard } from './pages/student/dashboard/dashboard';
import { ExploreCourses } from './pages/student/explore-courses/explore-courses';
import { MyCourses } from './pages/student/my-courses/my-courses';
import { Progress } from './pages/student/progress/progress';
import { Quiz } from './pages/student/quiz/quiz';
export const routes: Routes = [
{ path: '', component: Landing },

  { path: 'login', component: Login },

  { path: 'register', component: Register },

{
    path:'admin',
    component:AdminLayout,
    children:[

        {
            path:'dashboard',
            component:Dashboard
        },

        {
            path:'courses',
            component:Courses
        },

        {
            path:'students',
            component:Students
        },

        {
            path:'instructors',
            component:Instructors
        },

        {
            path:'certificates',
            component:Certificates
        },

        {
            path:'reports',
            component:Reports
        },

        {
            path:'settings',
            component:Settings
        }

    ]
},
{
path:'student',

component:StudentLayout,

children:[

{
path:'dashboard',
component:StudentDashboard
},

{
path:'explore-courses',
component:ExploreCourses
},

{
path:'my-courses',
component:MyCourses
},

{
path:'progress',
component:Progress
},

{
path:'quizzes',
component:Quiz
},
{
path:'',
redirectTo:'dashboard',
pathMatch:'full'
}

]

},
];