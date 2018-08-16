import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';

import { NavigationComponent } from './shared/header-navigation/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';
import { ChartistModule } from 'ng-chartist';
import {UserService} from './user/user.service';
import { StudyService } from './study/study.service';
import {AddUserComponent} from './user/add-user.component';
import {UserComponent} from './user/user.component';
import { StudyComponent } from './study/study.component';
import { StudyAddComponent } from './study/study-add.component';
import { SubjectaddComponent } from './subject/subjectadd/subjectadd.component';
import { SubjectlistComponent } from './subject/subjectlist/subjectlist.component';
import { StudentaItemComponent } from './student/student-item/studenta-item.component';
import { StudentlistComponent } from './student/studentlist/studentlist.component';
import { AddfromfileComponent } from './attendance/addfromfile/addfromfile.component';
import { AttendanceaddComponent } from './attendance/attendanceadd.component';
import { AttendanceviewComponent } from './attendance/attendanceview.component';
import { MarksaddComponent } from './marks/marksadd.component';
import { MarkslistComponent } from './marks/markslist.component';
import { GenerateComponent } from './result/generate/generate.component';
import { SearchComponent } from './result/search/search.component';
import { SearchpublicComponent } from './result/searchpublic/searchpublic.component';
import { PromotionComponent } from './promotion/promotion.component';
import { SectorsComponent } from './accounting/sectors/sectors.component';
import { AddincomeComponent } from './accounting/addincome/addincome.component';
import { ViewincomeComponent } from './accounting/viewincome/viewincome.component';
import { AddexpenseComponent } from './accounting/addexpense/addexpense.component';
import { ViewexpenseComponent } from './accounting/viewexpense/viewexpense.component';
import { FormatsComponent } from './sms/formats/formats.component';
import { SendComponent } from './sms/send/send.component';
import { LogComponent } from './sms/log/log.component';
import { MarksheetComponent } from './reports/marksheet/marksheet.component';
import { AttendanceComponent } from './reports/attendance/attendance.component';
import { MonthlyattendanceComponent } from './reports/monthlyattendance/monthlyattendance.component';
import { TabulationsheetComponent } from './reports/tabulationsheet/tabulationsheet.component';
import { AccounttypeComponent } from './reports/accounttype/accounttype.component';
import { AccountbalanceComponent } from './reports/accountbalance/accountbalance.component';
import { BarcodegenerateComponent } from './reports/barcodegenerate/barcodegenerate.component';
import { GparulesComponent } from './settings/gparules/gparules.component';
import { UsersComponent } from './settings/users/users.component';
import { HolidaysComponent } from './settings/holidays/holidays.component';
import { ClassofdaysComponent } from './settings/classofdays/classofdays.component';
import { InstituteComponent } from './settings/institute/institute.component';
import { CountriesComponent } from './countries/countries.component';
import { AddCountriesComponent } from './countries/add-countries.component';
import {CountriesService} from './countries/countries.service';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { SiblingComponent } from './sibling/sibling.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {Apollo, ApolloModule} from "apollo-angular";
import {HttpLinkModule, HttpLink} from "apollo-angular-link-http";
import {StudentService} from "./services/student.service";
import {InMemoryCache} from "apollo-cache-inmemory";


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true,
};

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    FullComponent,
    NavigationComponent,
    BreadcrumbComponent,
    SidebarComponent,
    UserComponent,
    AddUserComponent,
    StudyComponent,
    StudyAddComponent,
    SubjectaddComponent,
    SubjectlistComponent,
    StudentaItemComponent,
    StudentlistComponent,
    AddfromfileComponent,
    AttendanceaddComponent,
    AttendanceviewComponent,
    MarksaddComponent,
    MarkslistComponent,
    GenerateComponent,
    SearchComponent,
    SearchpublicComponent,
    PromotionComponent,
    SectorsComponent,
    AddincomeComponent,
    ViewincomeComponent,
    AddexpenseComponent,
    ViewexpenseComponent,
    FormatsComponent,
    SendComponent,
    LogComponent,
    MarksheetComponent,
    AttendanceComponent,
    MonthlyattendanceComponent,
    TabulationsheetComponent,
    AccounttypeComponent,
    AccountbalanceComponent,
    BarcodegenerateComponent,
    GparulesComponent,
    UsersComponent,
    HolidaysComponent,
    ClassofdaysComponent,
    InstituteComponent,
    CountriesComponent,
    AddCountriesComponent,
    ChildComponent,
    ParentComponent,
    SiblingComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(Approutes, { useHash: false }),
    PerfectScrollbarModule,
    ChartistModule,
    Ng2SmartTableModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [
    UserService,
   StudyService,
    CountriesService,
    StudentService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({ uri: 'http://localhost:3000/graphql'}),
      cache: new InMemoryCache()
    });
  }
}
