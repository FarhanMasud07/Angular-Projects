import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public message = ''; // Component interaction(from child to parent property initialization)

  public propertyBinding = 'Example';
  //public currentlyDisableOrNot = false
  public isDisable = true
  public state = {
    title :'PracticeAngular9',
    showMsg : true,
    colorName : 'green',
    value : 0,
    users:[]
  }

  //
  public redClass = "text-success"

  //class binding
  public hasError = false

  public isSpecial = true

  public messageClasses = {
    "text-danger":this.hasError,
    "text-success":!this.hasError,
    "text-info":this.isSpecial,
  }
  //class binding end



  // two way data binding
  public Name = ""

  readMe(){
   if(this.state.showMsg){
    this.isDisable = false
    this.state.showMsg=false
    this.state.value=3
    this.hasError = false
    this.state.users =[ {
      name:'Farhan',
      age:25,
      skills:[
        'Java',
        'JavaScript',
        'Python'
      ]
    },{
      name:'Mahin',
      age:20
    },{
      name:'Masud',
      age:38
    }]
   }else{
    this.isDisable = true
    this.state.showMsg=true
    this.state.value=1
    this.hasError = true
    this.state.users = []
   }
  }
}
