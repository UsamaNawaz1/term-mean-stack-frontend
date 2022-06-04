import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import {  FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css'],
})
export class UsersCreateComponent implements OnInit {
  submitted = false;
  userForm: FormGroup;
  userProfile: any = ['Maker', 'Receiver'];
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
  }
  ngOnInit() {}
  mainForm() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      password: ['', [Validators.required]],
      user_type: ['', [Validators.required]],
      
    });
  }
  // Choose designation with select dropdown
  updateProfile(e) {
    this.userForm.get('designation').setValue(e, {
      onlySelf: true,
    });
  }
  // Getter to access form control
  get myForm() {
    return this.userForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.userForm.valid) {
      return false;
    } else {
      return this.apiService.createUser(this.userForm.value).subscribe({
        complete: () => {
          console.log('User successfully created!'),
            this.ngZone.run(() => this.router.navigateByUrl('/users-list'));
        },
        error: (e) => {
          console.log(e);
        },
      });
    }
  }
}