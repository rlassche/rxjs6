# Angular, rxjs and REST calls.
RXJS changed with version 6, and I had to change my older code.

Here are some coding examples the Angular HttpClient and REST calls with GET, POST and PUT.

JSON placeholder is used for the backend.

# Versions

```
Package                           Version
-----------------------------------------------------------
@angular-devkit/architect         0.803.19
@angular-devkit/build-angular     0.803.19
@angular-devkit/build-optimizer   0.803.19
@angular-devkit/build-webpack     0.803.19
@angular-devkit/core              8.3.19
@angular-devkit/schematics        8.3.19
@angular/cli                      8.3.19
@angular/http                     7.2.15
@ngtools/webpack                  8.3.19
@schematics/angular               8.3.19
@schematics/update                0.803.19
rxjs                              6.5.3
typescript                        3.5.3
webpack                           4.39.2
```

# GET

```
this.jsonPH = "https://jsonplaceholder.typicode.com";

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