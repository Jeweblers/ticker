import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {finalize} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public form: FormGroup = new FormGroup({})
  public loading: boolean = false

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  public submit(): void {
    this.form.markAsDirty({onlySelf: false});

    Object.keys(this.form.controls).forEach((key: string) => {
      this.form.get(key)?.markAsDirty()
    })

    if (this.form.valid) {
      this.loading = true

      this.auth
        .register({
          name: this.form.controls.name.value,
          email: this.form.controls.email.value,
          password: this.form.controls.password.value,
        })
        .pipe(finalize(() => this.loading = false))
        .subscribe(async () => {
          await this.router.navigate(['/auth/login'])
        }, error => {
          // TODO: Handle validation errors from server
          console.log(error)
        })
    }
  }

  public hasError(control: string) {
    return this.form.get(control)?.dirty && this.form.get(control)?.invalid;
  }

  public getErrors(control: string): ValidationErrors | null | undefined {
    return this.form.get(control)?.errors;
  }

  private buildForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }
}
