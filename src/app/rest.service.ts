import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable()
export class RestService {

   constructor(private http: HttpClient) { }

   private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getProjects(): Observable<any> {
    return this.http.get(endpoint + 'Project').pipe(
      map(this.extractData));
  }
  
  getProject(id): Observable<any> {
    return this.http.get(endpoint + 'Project/' + id).pipe(
      map(this.extractData));
  }
  
  addProject (Project): Observable<any> {
    console.log(Project);
    return this.http.post<any>(endpoint + 'Project', JSON.stringify(Project), httpOptions).pipe(
      tap((Project) => console.log(`added Project w/ id=${Project.projectId}`)),
      catchError(this.handleError<any>('addProject'))
    );
  }
  
  updateProject (id, Project): Observable<any> {
    return this.http.put(endpoint + 'Project/' + id, JSON.stringify(Project), httpOptions).pipe(
      tap(_ => console.log(`updated Project id=${id}`)),
      catchError(this.handleError<any>('updateProject'))
    );
  }
  
  deleteProject (id): Observable<any> {
    return this.http.delete<any>(endpoint + 'Project/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted Project id=${id}`)),
      catchError(this.handleError<any>('deleteProject'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return null;
    };
  }
}

const endpoint = 'http://localhost:8081/projmgmtapi/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};