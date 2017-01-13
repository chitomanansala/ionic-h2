import { Injectable } from '@angular/core';
import { URLSearchParams, Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the WikiSearch provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WikiSearch {

  constructor(public jsonp: Jsonp) {
    console.log('Hello WikiSearch Provider');
  }
  
  search(term: string) {
    var search = new URLSearchParams()
    search.set('action', 'opensearch');
    search.set('search', term);
    search.set('format', 'json');
    return this.jsonp
                .get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search })
                .map((request) => request.json()[1]);
  }

}
