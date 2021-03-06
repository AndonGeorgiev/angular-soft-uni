import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IPost } from './shared/interfaces/post';
import { Observable } from 'rxjs';
import { ITheme } from './shared/interfaces/theme';
@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private httpService: HttpClient) { }

  getThemes$(): Observable<ITheme[]>{
    return this.httpService.get<ITheme[]>('http://localhost:3000/api/themes');
  }

  getPosts$(): Observable<IPost[]> {
    return this.httpService.get<IPost[]>('http://localhost:3000/api/posts?limit=5');
  }
}
