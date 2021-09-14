import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {​​​​​​​​ FormBuilder, FormGroup, Validators }​​​​​​​​ from'@angular/forms';

@Component({
  selector: 'app-experience-edit',
  templateUrl: './experience-edit.component.html',
  styleUrls: ['./experience-edit.component.scss']
})
export class ExperienceEditComponent implements OnInit {

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
      job: ['', [Validators.required]],
      company: [''],
      description: ['', [Validators.required]],
      initialDate: ['', [Validators.required]],
      endDate: ['']
    });
  }

  save(event: Event) {
    event.preventDefault();
    this.form.markAllAsTouched();
    if(this.form.valid) {
      this.info.experience.push({
        job: this.form.value.job,
        company: this.form.value.company,
        description: this.form.value.description,
        initialDate: this.datePipe.transform(this.form.value.initialDate, 'MM-yyyy'),
        endDate: (!this.form.value.endDate) ? '' : this.datePipe.transform(this.form.value.endDate, 'MM-yyyy')
      })
      this.sortExperience();
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

  sortExperience() {
    this.info.experience.sort((a, b) => {
      const aParts = a.initialDate.split('-');
      const bParts = b.initialDate.split('-');
      const c = new Date(aParts[1], aParts[0]-1);
      const d = new Date(bParts[1], bParts[0]-1);
      return c.getTime() - d.getTime();
    })
  }

  deleteJob(job) {
    const index = this.info.experience.indexOf(job);
    this.info.experience.splice(index, 1);
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
