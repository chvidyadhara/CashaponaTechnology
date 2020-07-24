import { Component, OnInit } from '@angular/core';
import { UserregsreService } from 'src/app/userregsre.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userlistdis;
  constructor(private userserv:UserregsreService) { }
   userget(){
      this.userserv.userlist().subscribe(result=>{
            this.userlistdis = result;
            console.log(this.userlistdis)
      })
   }
  ngOnInit() {
    this.userget()
  }

}
