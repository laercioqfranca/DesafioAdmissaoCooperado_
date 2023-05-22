import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { InfoCooperadoApiRest } from '../models/infoCooperado-api-rest';

@Injectable({
  providedIn: 'root'
})
export class InfoCooperadoApiRestService {
  url = 'http://localhost:3000/infoCooperadoApiRest';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getInfoCooperadoApiRest(): Observable<InfoCooperadoApiRest> {
    return this.httpClient.get<InfoCooperadoApiRest>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `mensagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
