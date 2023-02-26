import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent {
  username='alma';
  password='korte'
  @Output() betoltes = new EventEmitter();

  clicked(){
    console.log('clicked')
    this.login()
  }
  async login() {
    try {
      console.log(this.username, this.password)
      const currentUser = await Backendless.UserService.login(this.username, this.password, true)
      this.betoltes.emit(currentUser)
    } catch (error) {
      window.alert("A MANÓBA! Nem sikerült bejelentkezni.")
      console.log(error)
    }
  }

}
