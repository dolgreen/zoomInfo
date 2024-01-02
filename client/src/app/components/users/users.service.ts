import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment.development';
import { environmentNest } from '../../../environment/environment-nest.development';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl = environment.apiUrl + '/users/getUsers';
  // private apiUrl = environmentNest.apiUrl + '/users';

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation') {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error);
      const message = `server returned code ${error.status} with body ${error.error}`;

      throw new Error(`${operation} failed: ${message}`);
    };
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      tap(() => {
        console.log('data fetched'),
          catchError(this.handleError('failed to fetch data'));
      })
    );
  }
}
