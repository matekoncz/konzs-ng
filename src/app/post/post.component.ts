import { Component, Input } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  @Input() post: any;

  constructor(private userService: UserService) {}

  user() {
    return this.userService.usersById[this.post.ownerId];
  }

  currentUser() {
    return this.userService.currentUser;
  }
}
