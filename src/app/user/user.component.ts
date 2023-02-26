import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input() user!: any;
  @Input() currentUser!: any;
  @Input() postEmbedded = false;

  isCurrentUser() {
    return this.user.objectId == this.currentUser.objectId;
  }

  styles() {
    return this.postEmbedded
      ? {
          width: 'fit-content',
        }
      : {};
  }

  async kepcsere() {
    const url = window.prompt('KÉP CSERÉJE');
    //document.getElementById(bejelentkezve.email).children[0].src =url
    if (url) {
      this.user.avatar = url;
      this.user = await Backendless.Data.of('Users').save(this.user);
    }
  }
}
