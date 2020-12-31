import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiPath: string = 'api/categories';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Category[]> {
    return this.http
      .get(this.apiPath)
      .pipe(catchError(this.handleError), map(this.jsonDataToCategories));
  }

  getById(id: number): Observable<Category> {
    const url = `${this.apiPath}/${id}`;

    return this.http
      .get(url)
      .pipe(catchError(this.handleError), map(this.jsonDataToGategory));
  }

  create(category: Category): Observable<Category> {
    return this.http
      .post(this.apiPath, category)
      .pipe(catchError(this.handleError), map(this.jsonDataToGategory));
  }

  update(category: Category): Observable<Category> {
    const url = `${this.apiPath}/${category.id}`;

    return this.http.put(url, category).pipe(
      catchError(this.handleError),
      map(() => category)
      // map caso especifico: força o retorno devolvendo o mesmo category do parametro porem atualizado
      // somente no caso do in-memory, num servidor real teria que retornar o objeto novo
    );
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiPath}/${id}`;

    return this.http.delete(url).pipe(
      catchError(this.handleError),
      map(() => null)
    );
  }

  // PRIVATE METHODS

  // pega o elemento do array de json  e adiciona no array de categoria
  private jsonDataToCategories(jsonData: any[]): Category[] {
    const categories: Category[] = [];
    jsonData.forEach((element) => categories.push(element as Category));
    return categories;
  }

  private jsonDataToGategory(jsonData: any): Category {
    return jsonData as Category;
  }

  private handleError(error: any): Observable<any> {
    console.log('Erro na requisição => ', error);
    return throwError(error);
  }
}
