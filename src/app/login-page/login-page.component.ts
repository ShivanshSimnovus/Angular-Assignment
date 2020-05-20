import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  onSubmit(email: string, password: string) {
    var message: string = "";
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
      message = "e-mail is not valid.";
    }
    if (password.length < 10 || password.length > 16 || password.indexOf(" ") != -1) {
      message = message+" Password length should be between 10 to 16 characters with no space.";
    }
    if(message.length!=0)
    {
      alert(message);
    }
    else {
      alert("Everything Looks good");
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
