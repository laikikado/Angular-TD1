import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, FormControlName} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  telephone: FormGroup

  constructor(private formBuilder: FormBuilder) { 
  }

  ngOnInit() {
    this.telephone = this.formBuilder.group({
      libelle: ['', [
        Validators.required,
        Validators.minLength(4)
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      prix: ['', [
        Validators.required
      ]],
    })
  }

  get libelle() {
    return this.telephone.get('libelle')
  } 

  get email() {
    return this.telephone.get('email')
  }

  get prix() {
    return this.telephone.get('prix')
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.telephone.value);
  }
}
