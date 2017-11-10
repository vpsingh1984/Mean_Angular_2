import { Component, OnInit } from '@angular/core';
 
import { User } from './user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
	selectedUser : User;
	users : Array<User>;

    constructor(private _userService : UserService) { }

    ngOnInit() {
    	let res = this._userService.getUsers().subscribe(responseData => {this.users = responseData});
    }

    onSelectVideo(user : User) : void{
    	//console.log(' Selectd user ', user);
    	this.selectedUser = user;
    }

}
