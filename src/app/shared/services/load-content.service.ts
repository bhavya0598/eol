import { Injectable, SecurityContext } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadContentService {
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  getContent(path: string, content: string): Observable<Blob> {
    return this.http.get(path + content, {
      responseType: 'blob',
    });
  }
}
