import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegisterComponent } from './user-register/user-register.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [UserRegisterComponent, UserListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild([
      {path:'userlist',component:UserListComponent},
    
  
  ]) 
  ],
  exports:[UserRegisterComponent,UserListComponent]
})
export class UserinfoModule { }
