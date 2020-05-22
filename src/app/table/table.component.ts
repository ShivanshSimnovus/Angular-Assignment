import { Component, OnInit } from '@angular/core';
 export interface tabledata{
   firstname:string;
   lastname:string;
   email:string;
 }
 const data:tabledata[]=[
   {firstname:'John', lastname:'Doe', email:'john@example.com'},
   {firstname:'Mary', lastname:'pandey', email:'mary@example.com'},
   {firstname:'July', lastname:'Dooley', email:'july@example.com'},
   {firstname:'shivansh', lastname:'pandey', email:'xyz@gmail.com'},
   {firstname:'raman', lastname:'pandey', email:'xyz@gmail.com'},
   {firstname:'rohan', lastname:'pandey', email:'xyz@gmail.com'},
   {firstname:'rahul', lastname:'pandey', email:'xyz@gmail.com'},
   {firstname:'sunil', lastname:'pandey', email:'xyz@gmail.com'},
   {firstname:'vikram', lastname:'pandey', email:'xyz@gmail.com'},
   {firstname:'vikram', lastname:'pandey', email:'xyz@gmail.com'}
 ];
 @Component({
   selector: 'app-table',
   templateUrl: './table.component.html',
   styleUrls: ['./table.component.css']
 })
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 display=data;
 searchstr:string="";
 searchpara:string="firstname";
 onsearch(ser,para)
 {
  var i=0;
  var searchdata:tabledata[]=new Array();
  for(i=0;i<data.length;i++)
  {
    var add:tabledata;
    if(para==='firstname')
    {
    if(data[i].firstname.includes(ser))
    {
      add={ firstname:data[i].firstname, lastname:data[i].lastname, email:data[i].email};
      searchdata.push(add);
      //console.log(searchdata);
    }
  }
  if(para==='lastname')
  {
  if(data[i].lastname.includes(ser))
  {
    add={ firstname:data[i].firstname, lastname:data[i].lastname, email:data[i].email};
    searchdata.push(add);
    //console.log(searchdata);
  }
}
if(para==='email')
{
if(data[i].email.includes(ser))
{
  add={ firstname:data[i].firstname, lastname:data[i].lastname, email:data[i].email};
  searchdata.push(add);
  //console.log(searchdata);
}
}
    this.display=searchdata;
  }
 }
}
