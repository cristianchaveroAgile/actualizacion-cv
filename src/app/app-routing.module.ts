import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbilitiesEditComponent } from './abilities-edit/abilities-edit.component';
import { CardProfileComponent } from './card-profile/card-profile.component';
import { CvEditComponent } from './cv-edit/cv-edit.component';
import { CvComponent } from './cv/cv.component';
import { ExperienceEditComponent } from './experience-edit/experience-edit.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { SchoolarshipEditComponent } from './schoolarship-edit/schoolarship-edit.component';
import { SoftwareEditComponent } from './software-edit/software-edit.component';

const routes: Routes = [
  {
    path: '',
    component: CardProfileComponent
  },
  {
    path: 'cv',
    component: CvComponent
  },
  {
    path: 'edit',
    redirectTo: '/cv-edit/about-me',
    pathMatch: 'full',
  },
  {
    path: 'cv-edit',
    component: CvEditComponent,
    children: [
      {
        path: 'about-me',
        component: ProfileEditComponent
      },
      {
        path: 'abilities',
        component: AbilitiesEditComponent
      },
      {
        path: 'software',
        component: SoftwareEditComponent
      },
      {
        path: 'experience',
        component: ExperienceEditComponent
      },
      {
        path: 'schoolarship',
        component: SchoolarshipEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
