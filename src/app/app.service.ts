import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { HandleErrorService } from "./handle-error.service";
@Injectable({
	providedIn: "root"
})

export class AppService {

	//url:string = 'http://quotes.rest/qod.json?category=inspire';
	url:string = 'https://favqs.com/api/qotd';
	
	constructor(
		private httpClient: HttpClient,
		private handleErrorService: HandleErrorService,
	) {
		// code...
	}

	getQuoteofDay():Observable<any>{
		return this.httpClient.get<any>(this.url)
		.pipe(
			tap(_=> console.log("quotes fetched")),
			catchError(this.handleErrorService.handle("Quotes List",[]))
			)
	}
}