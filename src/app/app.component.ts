import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  formGroup = new FormGroup({
    md: new FormControl(undefined, [Validators.required]),
    ios: new FormControl(undefined, [Validators.required])
  })
  constructor() {}

  onVerifyClicked() {
    this.formGroup.markAllAsTouched();
  }
}
