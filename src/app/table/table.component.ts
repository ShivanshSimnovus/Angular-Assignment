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
   {firstname:'vikram', lastname:'pandey', email:'xyz@gmail.com'},
   {firstname:'vikram', lastname:'pandey', email:'xyz@gmail.com'},
   {firstname:'vikram', lastname:'pandey', email:'xyz@gmail.com'}
 ];
 @Component({
   selector: 'app-table',
   templateUrl: './table.component.html',
   styleUrls: ['./table.component.css']
 })
export class TableComponent implements OnInit {
  searchstr:string="";
  display:tabledata[]=new Array();
  searchpara:string="firstname";
   datasplit:tabledata[]=new Array();
   start=0;
   end=5;
  constructor() {
    var i=0;
    var track=0;
    for(i=this.start;i<this.end;i++)
    {
      this.datasplit[track]=data[i];
      track++;
    }
    this.display=this.datasplit;
  }

  ngOnInit(): void {
  }

 next()
 {
   // alert(this.end +"  "+this.start);
  if(this.end<data.length)
  {
  if(this.end+5<=data.length)
  {
   // alert(this.end +"  "+this.start);
    this.start=this.end;
    this.end=this.end+5;
    var i=0;
    this.datasplit=new Array();
    var track=0;
    for(i=this.start;i<this.end;i++)
    {
      this.datasplit[track]=data[i];
      track++;
    }
    this.display=this.datasplit;
  }
  else
  {
    this.datasplit=new Array();
    var track=0;
    this.start=this.end;
    this.end=data.length;
    for(i=this.start;i<this.end;i++)
    {
      this.datasplit[track]=data[i];
      track++;
    }
    this.display=this.datasplit;
  }
 }
 else
 {
   var i=0;
     //alert(this.end +"  "+this.start);
   this.datasplit=new Array();
   var track=0;
   for(i=this.start;i<this.end;i++)
   {
     this.datasplit[track]=data[i];
     track++;
   }
   this.display=this.datasplit;
 }
 }
 prev()
 {
   var i=0;
   var track=0;
   this.datasplit=new Array();
   if(this.end!=5)
   {
     this.end=this.start;
     this.start=this.start-5;
     for(i=this.start;i<this.end;i++)
     {
       this.datasplit[track]=data[i];
       track++;
     }
     this.display=this.datasplit;
   }
 }
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
  }
  if(ser.length!=0)
  {
    this.display=searchdata;
  }
  else{
    this.display=this.datasplit;
  }
 }
 sortby(cat)
 {
   var i=0;
   var j=0;
   for(i=0;i<data.length;i++)
   {
     for(j=0;j<data.length-i-1;j++)
     {
       if(cat==="firstname")
       {
       if(data[j].firstname.localeCompare( data[j+1].firstname )>0)
       {
        var temp=data[j+1];
         data[j+1]=data[j];
         data[j]=temp;
      }
      }
      if(cat==="lastname")
      {
      if(data[j].lastname.localeCompare( data[j+1].lastname )>0)
      {
       var temp=data[j+1];
        data[j+1]=data[j];
        data[j]=temp;
     }
     }
     if(cat==="email")
     {
     if(data[j].email.localeCompare( data[j+1].email )>0)
     {
      var temp=data[j+1];
       data[j+1]=data[j];
       data[j]=temp;
    }
    }
     }
   }
   var i=0;
     //alert(this.end +"  "+this.start);
   this.datasplit=new Array();
   var track=0;
   for(i=this.start;i<this.end;i++)
   {
     this.datasplit[track]=data[i];
     track++;
   }
   this.display=this.datasplit;
 }
}
