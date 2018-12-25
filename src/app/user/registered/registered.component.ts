import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.scss']
})
export class RegisteredComponent implements OnInit {

  private name: string
  private password: string
  private repeat_password: string

  constructor() { }

  ngOnInit() {
  }

  private onSubmit() {
    console.log(this.name,this.password,this.repeat_password)
  }

}
