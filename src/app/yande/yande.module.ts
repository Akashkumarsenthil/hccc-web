import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { MaterialModule } from '../material.module';
import { YandeRoutingModule } from './yande-routing.module';

import { CourseCardComponent} from "./course-card/course-card.component";
import { CourseCatalogueComponent} from "./course-catalogue/course-catalogue.component";
import { CourseCreateComponent} from "./course-create/course-create.component";
import { CourseEnrollComponent} from "./course-enroll/course-enroll.component";
import { CourseIndemnityComponent} from "./course-indemnity/course-indemnity.component";
import { CourseSearchNavbarComponent} from "./course-search-navbar/course-search-navbar.component";
import { TeacherCardComponent} from "./teacher-card/teacher-card.component";
import { TeacherListComponent} from "./teacher-list/teacher-list.component";
import { TeacherOnboardComponent} from "./teacher-onboard/teacher-onboard.component";
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseDetailsUpdateComponent } from './course-details-update/course-details-update.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { TeacherDetailsUpdateComponent } from './teacher-details-update/teacher-details-update.component';
import { CourseBaseComponent } from './course-base/course-base.component';
import { TeacherBaseComponent } from './teacher-base/teacher-base.component';


@NgModule({
  imports: [
    CommonModule,
    YandeRoutingModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    CourseCardComponent,
    CourseCatalogueComponent,
    CourseCreateComponent,
    CourseEnrollComponent,
    CourseIndemnityComponent,
    CourseSearchNavbarComponent,
    TeacherCardComponent,
    TeacherListComponent,
    TeacherOnboardComponent,
    CourseDetailsComponent,
    CourseDetailsUpdateComponent,
    TeacherDetailsComponent,
    TeacherDetailsUpdateComponent,
    CourseBaseComponent,
    TeacherBaseComponent
  ]
})
export class YandeModule { }
