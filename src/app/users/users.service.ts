import { Injectable } from '@angular/core';

import { DUMMY_USERS } from '../../dummy-users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  get users() {
    console.log(DUMMY_USERS);
    
    return DUMMY_USERS;
  }

  //  getUserObject (userId:string) {
  //   const userObject = this.users.filter(user => user.id === userId);
  //   return null;

  // }
}
