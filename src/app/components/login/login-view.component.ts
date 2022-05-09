import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {map} from "rxjs/operators";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
import {User} from "../../users/user";

@Component({
  selector: 'sosu-login-view',
  templateUrl: 'login-view.component.html',
  styleUrls: ['login-view.component.scss']
})
export class LoginViewComponent implements OnInit {
  loginForm: FormGroup;
  @Input()
  user: any;

  @Input()
  signInError: string;

  @Output('login')
  tryLoginEmitter = new EventEmitter();

  tryLogin(){
    this.tryLoginEmitter.emit(this.user);
  }

  constructor(
      private authService: AuthenticationService,
      private formBuilder: FormBuilder,
      private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email, Validators.minLength(6)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(3)])
    })
  }
  onSubmit() {
    if(this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.loginForm.value).pipe(
        map(token => this.router.navigate(['admin']))
    ).subscribe()

  }

}
