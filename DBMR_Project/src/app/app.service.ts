// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// interface Lead {
//   name: string;
//   email: string;
//   number: number;
// }
// interface FollowUpLead {
//   status: string;
//   comment: string;
//   amt: number;
// }
// @Injectable({
//   providedIn: 'root'
// })
// export class AppService {
//   private apiUrl ='https://localhost:44316/lead/GetLeadData';
//   constructor(private http: HttpClient) { }
//   getData(): Observable<any> {
//     return this.http.get<any>(this.apiUrl);
//   }
//   postLeadData(name: string, email: string, num: number) {
//     const postLeadDataApi = 'https://localhost:44316/lead/create';
//     return this.http.post(postLeadDataApi, { name, num, email });
//   }

//   postFollowUPData(status:string , comment:string , amt:number ) {
//     const postFollowUPDataApi = 'https://localhost:44316/lead/createfollowTable';
//     return this.http.post(postFollowUPDataApi, { status, comment, amt });
//   }

//    private getApi = 'https://localhost:44316/lead/GetLeadData';
//   getLeadData(): Observable<Lead[]> {
//     return this.http.get<Lead[]>(this.getApi);
//   }
//   getFollowUpLeadData(): Observable<FollowUpLead[]> {
//     return this.http.get<FollowUpLead[]>(this.getApi);
//   }


// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface Lead {
  name: string;
  email: string;
  number: number;
}
interface FollowUpLead {
  status: string;
  comment: string;
  amt: number;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private baseApiUrl = 'https://localhost:44316/lead';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(`${this.baseApiUrl}/GetLeadData`)
      .pipe(catchError(this.handleError));
  }

  postLeadData(name: string, email: string, num: number): Observable<any> {
    const postLeadDataApi = `${this.baseApiUrl}/create`;
    return this.http.post(postLeadDataApi, { name, num, email })
      .pipe(catchError(this.handleError));
  }

  postFollowUpData(status: string, comment: string, amt: number): Observable<any> {
    const postFollowUpDataApi = `${this.baseApiUrl}/createfollowTable`;
    return this.http.post(postFollowUpDataApi, { status, comment, amt })
      .pipe(catchError(this.handleError));
  }

  getLeadData(): Observable<Lead[]> {
    return this.http.get<Lead[]>(`${this.baseApiUrl}/GetLeadData`)
      .pipe(catchError(this.handleError));
  }

  getFollowUpLeadData(): Observable<FollowUpLead[]> {
    return this.http.get<FollowUpLead[]>(`${this.baseApiUrl}/GetFollowUpData`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError('Something bad happened; please try again later.');
  }
}
