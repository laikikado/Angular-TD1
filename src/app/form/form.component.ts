import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  telephoneForm = new FormGroup({
    libelle: new FormControl(''),
    marque: new FormControl(''),
    prix: new FormControl('')
  });

  constructor(private formBuilder: FormBuilder) { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.telephoneForm.value);
  }
  ngOnInit() {
    /* this.telephoneForm = this.formBuilder.group({
      prix: ['', [
        Validators.required
      ]],
      phones: this.formBuilder.array([])
    }); */
  }
  get prix() {
    return this.telephoneForm.get('prix');
  }
}
