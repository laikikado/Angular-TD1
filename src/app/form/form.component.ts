import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { prixRangeValidator } from './prix.validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  telephone: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    // Validators
    this.telephone = this.formBuilder.group({
      libelle: ['', [
        Validators.required,
        Validators.minLength(5)
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      prix: ['', [
        Validators.pattern('^[0-9]*$'),
        prixRangeValidator(10, 1000)
      ]],
    });
  }

  get libelle() {
    return this.telephone.get('libelle');
  }

  get email() {
    return this.telephone.get('email');
  }

  get prix() {
    return this.telephone.get('prix');
  }

  // Retourne l'objet téléphone dans la console
  onSubmit() {
    console.warn(this.telephone.value);
  }
}
