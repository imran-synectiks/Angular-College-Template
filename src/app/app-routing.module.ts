import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

import { UserComponent } from './user/user.component';
import {AddUserComponent} from './user/add-user.component';
import {StudyAddComponent} from './study/study-add.component';
import {StudyComponent} from './study/study.component';
import {SubjectaddComponent} from './subject/subjectadd/subjectadd.component';
import {SubjectlistComponent} from './subject/subjectlist/subjectlist.component';
import {StudentaItemComponent} from './student/student-item/studenta-item.component';
import {StudentlistComponent} from './student/studentlist/studentlist.component';
import {AddfromfileComponent} from './attendance/addfromfile/addfromfile.component';
import {AttendanceaddComponent} from './attendance/attendanceadd.component';
import {AttendanceviewComponent} from './attendance/attendanceview.component';
import {MarksaddComponent} from './marks/marksadd.component';
import {MarkslistComponent} from './marks/markslist.component';
import {GenerateComponent} from './result/generate/generate.component';
import {SearchComponent} from './result/search/search.component';
import {SearchpublicComponent} from './result/searchpublic/searchpublic.component';
import {PromotionComponent} from './promotion/promotion.component';
import {SectorsComponent} from './accounting/sectors/sectors.component';
import {AddincomeComponent} from './accounting/addincome/addincome.component';
import {ViewincomeComponent} from './accounting/viewincome/viewincome.component';
import {AddexpenseComponent} from './accounting/addexpense/addexpense.component';
import {ViewexpenseComponent} from './accounting/viewexpense/viewexpense.component';
import {FormatsComponent} from './sms/formats/formats.component';
import {SendComponent} from './sms/send/send.component';
import {LogComponent} from './sms/log/log.component';
import {MarksheetComponent} from './reports/marksheet/marksheet.component';
import {AttendanceComponent} from './reports/attendance/attendance.component';
import {MonthlyattendanceComponent} from './reports/monthlyattendance/monthlyattendance.component';
import {TabulationsheetComponent} from './reports/tabulationsheet/tabulationsheet.component';
import {AccounttypeComponent} from './reports/accounttype/accounttype.component';
import {AccountbalanceComponent} from './reports/accountbalance/accountbalance.component';
import {BarcodegenerateComponent} from './reports/barcodegenerate/barcodegenerate.component';
import {GparulesComponent} from './settings/gparules/gparules.component';
import {UsersComponent} from './settings/users/users.component';
import {HolidaysComponent} from './settings/holidays/holidays.component';
import {ClassofdaysComponent} from './settings/classofdays/classofdays.component';
import {InstituteComponent} from './settings/institute/institute.component';
import {CountriesComponent} from './countries/countries.component';
import {AddCountriesComponent} from './countries/add-countries.component';
import {ChildComponent} from './child/child.component';
import {ParentComponent} from './parent/parent.component';
import {SiblingComponent} from './sibling/sibling.component';



// const routes: Routes = [
//   { path: 'users', component: UserComponent },
//   { path: 'add', component: AddUserComponent }
// ];

export const Approutes: Routes = [
{
    path: '',
    component: FullComponent,
    children: [
        { path: '', redirectTo: '/starter', pathMatch: 'full' },
        { path: 'starter', loadChildren: './starter/starter.module#StarterModule' },
        { path: 'component', loadChildren: './component/component.module#ComponentsModule' },
        { path: 'charts', loadChildren: './charts/charts.module#ChartModule' },
        { path: 'user', component: UserComponent },
        { path: 'add', component: AddUserComponent },
        { path: 'class-add', component: StudyAddComponent },
        { path: 'class-list', component: StudyComponent },
        { path: 'add-countries', component: AddCountriesComponent },
        { path: 'list-countries', component: CountriesComponent },
      {
        path: 'subject/subjectadd',
        component: SubjectaddComponent,
        data:  {
          title: 'Add New',
          urls: [ {title: 'Subject', url: ''}, {title: 'Add New'}]
        }
      },
      {
        path: 'subject/subjectlist',
        component: SubjectlistComponent,
        data:  {
          title: 'Subject List',
          urls: [ {title: 'Subject', url: ''}, {title: 'Subject List'}]
        }
      },
      {
        path: 'student/student-item',
        component: StudentaItemComponent,
        data:  {
          title: 'Add New',
          urls: [ {title: 'Student', url: ''}, {title: 'Add New'}]
        }
      },
      {
        path: 'student/studentlist',
        component: StudentlistComponent,
        data:  {
          title: 'Student List',
          urls: [ {title: 'Student', url: ''}, {title: 'Student List'}]
        }
      },
      {
        path: 'attendance/addfromfile',
        component: AddfromfileComponent,
        data:  {
          title: 'Add from File',
          urls: [ {title: 'Attendance', url: ''}, {title: 'Add from File'}]
        }
      },
      {
        path: 'attendance/attendanceadd',
        component: AttendanceaddComponent,
        data:  {
          title: 'Add',
          urls: [ {title: 'Attendance', url: ''}, {title: 'Add'}]
        }
      },
      {
        path: 'attendance/attendanceview',
        component: AttendanceviewComponent,
        data:  {
          title: 'View',
          urls: [ {title: 'Attendance', url: ''}, {title: 'View'}]
        }
      },
      {
        path: 'marks/marksadd',
        component: MarksaddComponent,
        data:  {
          title: 'Add New',
          urls: [ {title: 'Marks', url: ''}, {title: 'Add New'}]
        }
      },
      {
        path: 'marks/markslist',
        component: MarkslistComponent,
        data:  {
          title: 'Marks List',
          urls: [ {title: 'Marks', url: ''}, {title: 'Marks List'}]
        }
      },
      {
        path: 'result/generate',
        component: GenerateComponent,
        data:  {
          title: 'Generate',
          urls: [ {title: 'Result', url: ''}, {title: 'Generate'}]
        }
      },
      {
        path: 'result/search',
        component: SearchComponent,
        data:  {
          title: 'Search',
          urls: [ {title: 'Result', url: ''}, {title: 'Search'}]
        }
      },
      {
        path: 'result/searchpublic',
        component: SearchpublicComponent,
        data:  {
          title: 'Search Public',
          urls: [ {title: 'Result', url: ''}, {title: 'Search Public'}]
        }
      },
      {
        path: 'promotion',
        component: PromotionComponent,
        data:  {
          title: 'Promotion',
          urls: [ {title: 'Promotion', url: ''}]
        }
      },
      {
        path: 'accounting/sectors',
        component: SectorsComponent,
        data:  {
          title: 'Sectors',
          urls: [ {title: 'Accounting', url: ''}, {title: 'Sectors'}]
        }
      },
      {
        path: 'accounting/addincome',
        component: AddincomeComponent,
        data:  {
          title: 'Add Income',
          urls: [ {title: 'Accounting', url: ''}, {title: 'Add Income'}]
        }
      },
      {
        path: 'accounting/viewincome',
        component: ViewincomeComponent,
        data:  {
          title: 'View Income',
          urls: [ {title: 'Accounting', url: ''}, {title: 'View Income'}]
        }
      },
      {
        path: 'accounting/addexpense',
        component: AddexpenseComponent,
        data:  {
          title: 'Add Expense',
          urls: [ {title: 'Accounting', url: ''}, {title: 'Add Expense'}]
        }
      },
      {
        path: 'accounting/viewexpense',
        component: ViewexpenseComponent,
        data:  {
          title: 'View Expense',
          urls: [ {title: 'Accounting', url: ''}, {title: 'View Expense'}]
        }
      },
      {
        path: 'sms/formats',
        component: FormatsComponent,
        data:  {
          title: 'SMS Formats',
          urls: [ {title: 'SMS', url: ''}, {title: 'SMS Formats'}]
        }
      },
      {
        path: 'sms/send',
        component: SendComponent,
        data:  {
          title: 'Send Bulk SMS',
          urls: [ {title: 'SMS', url: ''}, {title: 'Send Bulk SMS'}]
        }
      },
      {
        path: 'sms/log',
        component: LogComponent,
        data:  {
          title: 'SMS Log',
          urls: [ {title: 'SMS', url: ''}, {title: 'SMS Log'}]
        }
      },
      {
        path: 'reports/marksheet',
        component: MarksheetComponent,
        data:  {
          title: 'Marksheet',
          urls: [ {title: 'Reports', url: ''}, {title: 'Marksheet'}]
        }
      },
      {
        path: 'reports/attendance',
        component: AttendanceComponent,
        data:  {
          title: 'Attendance',
          urls: [ {title: 'Reports', url: ''}, {title: 'Attendance'}]
        }
      },
      {
        path: 'reports/monthlyattendance',
        component: MonthlyattendanceComponent,
        data:  {
          title: 'Monthly Attendance',
          urls: [ {title: 'Reports', url: ''}, {title: 'Monthly Attendance'}]
        }
      },
      {
        path: 'reports/tabulationsheet',
        component: TabulationsheetComponent,
        data:  {
          title: 'Tabulationsheet',
          urls: [ {title: 'Reports', url: ''}, {title: 'Tabulationsheet'}]
        }
      },
      {
        path: 'reports/accounttype',
        component: AccounttypeComponent,
        data:  {
          title: 'Account by Type',
          urls: [ {title: 'Reports', url: ''}, {title: 'Account by Type'}]
        }
      },
      {
        path: 'reports/accountbalance',
        component: AccountbalanceComponent,
        data:  {
          title: 'Account Balance',
          urls: [ {title: 'Reports', url: ''}, {title: 'Account Balance'}]
        }
      },
      {
        path: 'reports/barcodegenerate',
        component: BarcodegenerateComponent,
        data:  {
          title: 'Barcode Generate',
          urls: [ {title: 'Reports', url: ''}, {title: 'Barcode Generate'}]
        }
      },
      {
        path: 'settings/gparules',
        component: GparulesComponent,
        data:  {
          title: 'GPA Rules',
          urls: [ {title: 'Settings', url: ''}, {title: 'GPA Rules'}]
        }
      },
      {
        path: 'settings/users',
        component: UsersComponent,
        data:  {
          title: 'Users',
          urls: [ {title: 'Settings', url: ''}, {title: 'Users'}]
        }
      },
      {
        path: 'settings/holidays',
        component: HolidaysComponent,
        data:  {
          title: 'Holidays',
          urls: [ {title: 'Settings', url: ''}, {title: 'Holidays'}]
        }
      },
      {
        path: 'settings/classoffdays',
        component: ClassofdaysComponent,
        data:  {
          title: 'Class Off Days',
          urls: [ {title: 'Settings', url: ''}, {title: 'Class Off Days'}]
        }
      },
      {
        path: 'settings/institute',
        component: InstituteComponent,
        data:  {
          title: 'Institute',
          urls: [ {title: 'Settings', url: ''}, {title: 'Institute'}]
        }
      },
      {
        path: 'countries',
        component: CountriesComponent,
        data:  {
          title: 'Country',
          urls: [ {title: 'Country', url: ''}, {title: 'Country'}]
        }
      },
{
        path: 'parent',
        component: ParentComponent,
        data:  {
          title: 'parent',
          urls: [ {title: 'parent', url: ''}, {title: 'parent'}]
        }
      },
      {
        path: 'sibling',
        component: SiblingComponent,
        data:  {
          title: 'sibling',
          urls: [ {title: 'sibling', url: ''}, {title: 'sibling'}]
        }
      },
      {
        path: 'child',
        component: ChildComponent,
        data:  {
          title: 'child',
          urls: [ {title: 'child', url: ''}, {title: 'child'}]
        }
      }


    ]
},
{
    path: '**',
    redirectTo: '/starter'
}];


