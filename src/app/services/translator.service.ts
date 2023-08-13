import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TranslateData } from '../models/translate.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {
  
  url = 'https://nlp-translation.p.rapidapi.com/v1/translate' // API url
  key = 'INSERT YOUR KEY' // RapidAPI auth key
  endpoint = 'nlp-translation.p.rapidapi.com' // NLP API endpoint at RapidAPI

  constructor(private http: HttpClient) { }

  // Connect frontend with backend
  translateLang(input: string, sourceLang: string, targetLang: string): Observable<TranslateData> {
    // Send text, source language, and target language to API; Return the translated data
    return this.http.get<TranslateData>(this.url, {
      headers: new HttpHeaders()
      .set('x-rapidapi-host', this.endpoint)
      .set('x-rapidapi-key', this.key),
      params: new HttpParams()
      .set('text', input)
      .set('from', sourceLang)
      .set('to', targetLang)
    })
  }
}
