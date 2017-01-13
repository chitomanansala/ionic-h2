import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WikiSearch } from '../../providers/wiki-search';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Rx';

/*
  Generated class for the Wiki page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-wiki',
  templateUrl: 'wiki.html',
  providers: [WikiSearch]
})
export class WikiPage {
  items: Observable<Array<string>>;
  term = new FormControl();
  constructor(public WikiSearch: WikiSearch) {
      console.log('Hello Wiki Search')
  }

 ngOnInit() {
    this.items = this.term.valueChanges
                 .debounceTime(400)
                 .distinctUntilChanged()
                 .switchMap(term => this.WikiSearch.search(term));
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad Wiki Search');
  }

}
  