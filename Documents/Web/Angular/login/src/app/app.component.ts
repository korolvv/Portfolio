import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  value_log = '';
  value_pass = '';
  btn: any = document.querySelector('button');
  input: any = document.querySelectorAll('input');
  title = 'login';

  btn_click(event: any) {
    event.preventDefault();
    document.location.assign('./home');
  }

  access_log(event: any) {
    this.value_log += event.target.value;
    console.log(this.value_log);
    return this.value_log;
  }
  access_pass(event: any) {
    this.value_pass += event.target.value;
    console.log(this.value_pass);
    return this.value_log;
  }

  access_btn() {
    if (this.value_log === 'test' && this.value_pass === 'test') {
      this.btn_click(event);
    } else {
      alert('Login or password invalid');
    }
  }
}
