import { Component, OnInit } from '@angular/core';
import {​​​​​​​​ FormBuilder, FormGroup, Validators }​​​​​​​​ from'@angular/forms';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {

  info: any;
  formProfile: FormGroup;
  formHobbies: FormGroup;
  formLanguages: FormGroup;

  message: string;
  showMessage: boolean;

  constructor(private formBuilder: FormBuilder) {
    this.info = JSON.parse(localStorage.getItem('info'));
    this.buildForms();
    this.showMessage = false;
    this.message= '';
  }

  ngOnInit(): void { }

  buildForms() {
    this.formProfile = this.formBuilder.group({
      name: [this.info.name, [Validators.required]],
      lastname: [this.info.lastname, [Validators.required]],
      description: [this.info.description, [Validators.required]]
    });

    this.formHobbies = this.formBuilder.group({
      hobbie:['', [Validators.required]]
    });

    this.formLanguages = this.formBuilder.group({
      language: ['', [Validators.required]],
      percentage: ['', [Validators.required, Validators.min(1), Validators.max(100)]]
    });
  }

  saveProfile(event: Event) {
    event.preventDefault();
    this.formProfile.markAllAsTouched();
    if(this.formProfile.valid) {
      this.info.name = this.formProfile.value.name;
      this.info.lastname = this.formProfile.value.lastname;
      this.info.description = this.formProfile.value.description;
      if (!this.info.edits) {
        this.info.edits = 1;
      } else {
        this.info.edits++;
      }
      localStorage.setItem('info', JSON.stringify(this.info));
      this.info = JSON.parse(localStorage.getItem('info'));
      this.message = 'Información de perfil actualizada';
      this.showMessage = true;
      setTimeout(() => window.location.reload(), 4000)
    }
  }

  saveHobbies(event: Event) {
    event.preventDefault();
    this.formHobbies.markAllAsTouched();
    if(this.formHobbies.valid) {
      this.info.hobbies.push(this.formHobbies.value.hobbie);
      if (!this.info.edits) {
        this.info.edits = 1;
      } else {
        this.info.edits++;
      }
      localStorage.setItem('info', JSON.stringify(this.info));
      this.info = JSON.parse(localStorage.getItem('info'));
      setTimeout(() => window.location.reload(), 1500)
    }
  }

  saveLanguages(event: Event) {
    event.preventDefault();
    this.formLanguages.markAllAsTouched();
    if(this.formLanguages.valid) {
      this.info.languages.push({
        language: this.formLanguages.value.language,
        percentage: this.formLanguages.value.percentage
      });
      if (!this.info.edits) {
        this.info.edits = 1;
      } else {
        this.info.edits++;
      }
      localStorage.setItem('info', JSON.stringify(this.info));
      this.info = JSON.parse(localStorage.getItem('info'));
      setTimeout(() => window.location.reload(), 1500)
    }
  }

  deleteHobbie(hobbie) {
    const index = this.info.hobbies.indexOf(hobbie);
    this.info.hobbies.splice(index, 1);
    if (!this.info.edits) {
      this.info.edits = 1;
    } else {
      this.info.edits++;
    }
    localStorage.setItem('info', JSON.stringify(this.info));
    this.info = JSON.parse(localStorage.getItem('info'));
    setTimeout(() => window.location.reload(), 1500);
  }

  deleteLanguage(language) {
    const index = this.info.languages.indexOf(language);
    this.info.languages.splice(index, 1);
    if (!this.info.edits) {
      this.info.edits = 1;
    } else {
      this.info.edits++;
    }
    localStorage.setItem('info', JSON.stringify(this.info));
    this.info = JSON.parse(localStorage.getItem('info'));
    setTimeout(() => window.location.reload(), 1500);
  }

}
