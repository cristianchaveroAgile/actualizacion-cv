import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {​​​​​​​​ FormBuilder, FormGroup, Validators }​​​​​​​​ from'@angular/forms';

@Component({
  selector: 'app-schoolarship-edit',
  templateUrl: './schoolarship-edit.component.html',
  styleUrls: ['./schoolarship-edit.component.scss']
})
export class SchoolarshipEditComponent implements OnInit {

  info: any;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private datePipe: DatePipe) {
    this.info = JSON.parse(localStorage.getItem('info'));
    this.buildForm();
  }

  ngOnInit(): void {
    console.log(this.info);
  }

  buildForm() {
    this.form = this.formBuilder.group({
      school: ['', [Validators.required]],
      specialty: [''],
      initialDate: ['', [Validators.required]],
      endDate: ['']
    });
  }

  save(event: Event) {
    event.preventDefault();
    this.form.markAllAsTouched();
    if(this.form.valid) {
      this.info.scholarship.push({
        school: this.form.value.school,
        specialty: this.form.value.specialty,
        initialDate: this.datePipe.transform(this.form.value.initialDate, 'MM-yyyy'),
        endDate: (!this.form.value.endDate) ? '' : this.datePipe.transform(this.form.value.endDate, 'MM-yyyy')
      })
      this.sortSchoolarship();
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

  sortSchoolarship() {
    this.info.scholarship.sort((a, b) => {
      const aParts = a.initialDate.split('-');
      const bParts = b.initialDate.split('-');
      const c = new Date(aParts[1], aParts[0]-1);
      const d = new Date(bParts[1], bParts[0]-1);
      return c.getTime() - d.getTime();
    })
  }

  deleteSchool(school) {
    const index = this.info.scholarship.indexOf(school);
    this.info.scholarship.splice(index, 1);
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
