import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css'],
  inputs: ['user']
})
export class UserdetailComponent implements OnInit {

	private editName : Boolean = false;

 	constructor() { }

 	ngOnInit() {
 	}

 	ngOnChanges(){
 		this.editName = false;
 	}

 	onEditName(){
 		//console.log("onEditName")
 		this.editName = true;
 	}

}
