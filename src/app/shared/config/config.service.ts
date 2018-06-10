import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  hello: string;

  constructor(private http: HttpClient) {
  }


  /**
   * Load config variable from config.json file.
   */
  load(): Promise<any> {
    return new Promise((r, e) => {
      this.http.get('./assets/config.json')
        .subscribe(
          (content: ConfigService) => {
            Object.assign(this, content);
            r(this);
          },
          reason => e(reason));
    });
  }
}
