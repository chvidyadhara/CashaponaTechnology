import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,NgForm } from '@angular/forms';
import { UserregsreService } from 'src/app/userregsre.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  userform: FormGroup;
  submitted: boolean = false;
  cons;

  constructor(private fb: FormBuilder, private regservice: UserregsreService) { }

  reactiveuser() {
    this.userform = this.fb.group({
      id: ['', Validators.compose([Validators.required])],
      username: ['', Validators.compose([Validators.required])],
      phone: ['', Validators.compose([Validators.required])],
     

    }, {

    })
  }
submit() {
    this.submitted = true;
    if (this.userform.valid) {
      this.regservice.userreturn(this.userform.value).subscribe((data) => {
        this.cons = data;
        console.log(this.cons)
        alert("Sucessfully Register")      
      })
    }
    else {
      alert("Feil the required fields")
    }

  }
  ngOnInit() {
    this.reactiveuser()
    //console.log(this.userform)
   
  }
}