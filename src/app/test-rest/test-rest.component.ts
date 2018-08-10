import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse,   HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-test-rest',
  templateUrl: './test-rest.component.html',
  styleUrls: ['./test-rest.component.css']
})
export class TestRESTComponent implements OnInit {
  jsonPH:string  = "https://jsonplaceholder.typicode.com";
  result;
  command;
  errorMessage;
  toPost;
  toPut;
  constructor( private http:HttpClient) { }

  ngOnInit() {
  }

  getTest(uri) {
    this.errorMessage=''
    this.command = uri;
    this.result='' 
    this.http.get<any>(this.jsonPH + uri)
      .subscribe( data=> {
          this.result = data;
      },
    (err: HttpErrorResponse) => {
        if( err.error instanceof Error ){
          this.errorMessage = 'Client side Error occured';
        } else {
          this.errorMessage = 'Server side Error occured';
        }
    }); 
  }

  postTest(uri) {
    this.errorMessage=''
    this.result=''
    this.toPost = { title:'foo', body:'bar', userId: 1};
    this.command = '/post   ' + JSON.stringify( this.toPost)
    this.http.post<any>(this.jsonPH + uri, this.toPost)
        .subscribe(
          res => { console.log( res ); this.result = res },
          (err:HttpErrorResponse) => { console.log( err ); this.errorMessage = err.message}
        )
  }

  putTest(uri) {
    this.errorMessage=''
    this.result=''
    this.toPut = { id:1, title:'foo', body: 'bar', userId: 1};
    this.command = uri + '  ' + JSON.stringify( this.toPut)
    this.http.put<any>(this.jsonPH + uri, this.toPut)
        .subscribe(
          (res:any) => { console.log( res ); this.result = res },
          (err:HttpErrorResponse) => { console.log( err ); this.errorMessage = err.message}
        )
  }
}
