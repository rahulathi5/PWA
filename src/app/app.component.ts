import { Component,OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker'
import { GetdataService } from './getdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-app';
  currentTechnology;
  index;
  list;
  constructor(update : SwUpdate, private getdataService : GetdataService){
    console.log(this.getdataService);
  	update.available.subscribe(event =>{
  		console.log('update is here');
  		update.activateUpdate().then(() => document.location.reload());
  	} )
  }

ngOnInit(){
  this.index =0;
  console.log('OnInit');
  this.getTech();
}

  getNext(){      
    this.index = this.index + 1;
    this.getTech();
  }

  getTech(){

     this.getdataService.getTechnology(this.index).subscribe(response => {
      console.log(response);
      this.list = response;
      if(this.index<this.list.length){
        this.currentTechnology = response[this.index];
      }else{
        alert('No More available');
        document.location.reload()
      }
    })
  }
}
