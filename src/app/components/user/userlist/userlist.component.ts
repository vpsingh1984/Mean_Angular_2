import { Component, OnInit, EventEmitter } from '@angular/core';

import { User } from '../user';

@Component({
  	selector: 'userlist',
  	templateUrl: './userlist.component.html',
  	styleUrls: ['./userlist.component.css'],
  	inputs : ['users'],
  	outputs : ["selectUser"]
})
export class UserlistComponent implements OnInit {
	selectUser : EventEmitter<User> = new EventEmitter();
  	constructor() { }

  	ngOnInit() {
  	}

  	onSelect(user:User):void{
  		this.selectUser.emit(user);
  	}

}
