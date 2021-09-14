import { Component, OnInit } from '@angular/core';
import {​​​​​​​​ FormBuilder, FormGroup, Validators }​​​​​​​​ from'@angular/forms';

@Component({
  selector: 'app-abilities-edit',
  templateUrl: './abilities-edit.component.html',
  styleUrls: ['./abilities-edit.component.scss']
})
export class AbilitiesEditComponent implements OnInit {

  info: any;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.info = JSON.parse(localStorage.getItem('info'));
    this.buildForm();
  }

  ngOnInit(): void { }

  buildForm() {
    this.form = this.formBuilder.group({
      ability: ['', [Validators.required]],
      percentage: ['', [Validators.required, Validators.min(1), Validators.max(100)]]
    });
  }

  save(event: Event) {
    event.preventDefault();
    this.form.markAllAsTouched();
    if(this.form.valid) {
      this.info.abilities.push({
        ability: this.form.value.ability,
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

  deleteAbility(ability) {
    const index = this.info.abilities.indexOf(ability);
    this.info.abilities.splice(index, 1);
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
