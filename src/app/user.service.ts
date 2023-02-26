import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersById: any={}
  currentUser: any

  constructor() { }

  setUsers(users: Backendless.User[]) {
    users.forEach((user) => {
      this.usersById[user.objectId!] = user;
    });
  }

  setCurrentUser(currentUser: any) {
    this.currentUser = currentUser;
  }

}
