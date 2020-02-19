import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() allUsers: User[];
  @Input() selectedUser: User;
  @Output() userSelected = new EventEmitter<User>();


  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  selectUser(user: User) {
    this.userSelected.emit(user);
  }

}
