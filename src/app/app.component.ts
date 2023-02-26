import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'konzs-ngaaaa';
  posts = [];
  users = [];
  currentUser: any;
  lap = 0;
  newPost = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.main();
  }

  async main() {
    const currentUser = await Backendless.UserService.getCurrentUser();
    this.betoltes(currentUser);
  }

  async betoltes(currentUser: any) {
    if (!currentUser) {
      return;
    }
    this.currentUser = currentUser;
    this.users = await Backendless.Data.of('Users').find();
    console.log('users', this.users);

    this.userService.setCurrentUser(currentUser);
    this.userService.setUsers(this.users);

    this.szbetoltes(this.lap);

    const postsRT = Backendless.Data.of('POSTS').rt();
    postsRT.addCreateListener(
      (obj) => {
        if (this.lap == 0) {
          this.szbetoltes(this.lap);
        }
      },
      (err) => {
        console.error(err);
      }
    );
  }

  async szbetoltes(n: number) {
    var queryBuilder = Backendless.DataQueryBuilder.create();
    queryBuilder.setSortBy(['created DESC']);
    queryBuilder.setOffset(n);
    this.posts = await Backendless.Data.of('POSTS').find(queryBuilder);
  }

  lapozas() {
    this.lap = this.lap + 10;
    this.szbetoltes(this.lap);
  }
  vissza() {
    if (this.lap != 0) {
      this.lap = this.lap - 10;
      if (this.lap < 0) {
        this.lap = 0;
      }
      this.szbetoltes(this.lap);
    }
  }

  async szovegeles() {
    await Backendless.Data.of('POSTS').save({
      content: this.newPost,
    });
    this.newPost = '';
    this.szbetoltes(this.lap);
  }
}
