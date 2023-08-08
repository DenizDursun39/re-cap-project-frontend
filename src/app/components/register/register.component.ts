import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService
  ) {}
  ngOnInit(): void {
    this.createRegisterForm();
  }
  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }
  register() {
    if (this.registerForm.valid) {
      console.log(this.registerForm);
      let registerModel = Object.assign({}, this.registerForm.value);
      this.authService.register(registerModel).subscribe({
        next: (response) => {
          this.toastrService.info(response.message, 'Bilgi');
          localStorage.setItem('token', response.data.token);
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error);
        },
      });
    }
  }
}
