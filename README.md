# Angular 6.2, rxjs 6.2 and REST calls.
RXJS changed with version 6, and I had to change my older code.

Here are some coding examples the Angular HttpClient and REST calls with GET, POST and PUT.

JSON placeholder is used for the backend.

# GET

```
this.http.get<any>(this.jsonPH + uri)
      .subscribe(data => {
        this.result = data;
      },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            this.errorMessage = 'Client side Error occured';
          } else {
            this.errorMessage = 'Server side Error occured';
          }
        });
  }
```

# POST

```
 this.toPost = { title: 'foo', body: 'bar', userId: 1 };
 his.http.post<any>(this.jsonPH + uri, this.toPost)
      .subscribe(
        res => { console.log(res); this.result = res },
        (err: HttpErrorResponse) => { console.log(err); this.errorMessage = err.message }
      )
```

# PUT
```
this.toPut = { id: 1, title: 'foo', body: 'bar', userId: 1 };
this.http.put<any>(this.jsonPH + uri, this.toPut)
      .subscribe(
        (res: any) => { console.log(res); this.result = res },
        (err: HttpErrorResponse) => { console.log(err); this.errorMessage = err.message }
      )
```