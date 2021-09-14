import { Component, OnInit } from '@angular/core';
import {​​​​​​​​ FormBuilder, FormGroup, Validators }​​​​​​​​ from'@angular/forms';

@Component({
  selector: 'app-software-edit',
  templateUrl: './software-edit.component.html',
  styleUrls: ['./software-edit.component.scss']
})
export class SoftwareEditComponent implements OnInit {

  info: any;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.info = JSON.parse(localStorage.getItem('info'));
    // Es para parsear o convertir algo a un objeto JSON usable por JavaScript
    this.buildForm();
  }

  ngOnInit(): void {
    console.log(this.info)
  }

  buildForm() {
    this.form = this.formBuilder.group({
      // función que escribes para checar que tu formulario cheque alguna función en específico
      software: ['', [Validators.required]],
      percentage: ['', [Validators.required, Validators.min(1), Validators.max(100)]]
    });
  }

  save(event: Event) {
    event.preventDefault();
    this.form.markAllAsTouched();
    if(this.form.valid) {
      this.info.software.push({
        software: this.form.value.software,
        percentage: this.form.value.percentage
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

  deleteSoftware(sw) {
    const index = this.info.software.indexOf(sw);
    this.info.software.splice(index, 1);
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
