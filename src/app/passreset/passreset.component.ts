import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passreset',
  templateUrl: './passreset.component.html',
  styleUrls: ['./passreset.component.css']
})
export class PassresetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(pass, conpass){
    var message:string="";
    if (pass.length < 10 || pass.length > 16 || pass.indexOf(" ") != -1||conpass.length < 10 || conpass.length > 16 || conpass.indexOf(" ") != -1) {
      message = message+" Password length should be between 10 to 16 characters with no space.";
    }
    if(message.length!=0)
    {
      alert(message);
    }
    if(pass===conpass)
    {
      alert("Password change successful");
    }
    else{
      alert("Both password not same");
    }
  }
}
