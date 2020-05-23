import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgotp',
  templateUrl: './forgotp.component.html',
  styleUrls: ['./forgotp.component.css']
})
export class ForgotpComponent implements OnInit {

  constructor(private router: Router) {}


  ngOnInit(): void {
  }
  onSubmit(email: string) {
    var message: string = "";
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
      message = "e-mail is not valid.";
    }
    if(message.length!=0)
    {
      alert(message);
    }
    else
    {
      this.router.navigate(['/passreset']);
    }
  }
}
