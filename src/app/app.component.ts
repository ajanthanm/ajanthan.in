import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service'
import { Quote } from './shared/quote'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ajanthan';
  quote: Quote;
  loaded: boolean;

  constructor(
  	private appService: AppService
  	){}

  ngOnInit(){
  	console.log("its working");
  	this.getQuote();
  	this.loaded = false;
  }

  getQuote():void{
  	console.log("loading started");
  	this.appService.getQuoteofDay().subscribe(data =>{
  		console.log("loading ended")
  		console.log(data);
  		this.quote = data.quote;
  		this.loaded = true;

  	})
  }
}
