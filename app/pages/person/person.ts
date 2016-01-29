import {Page, NavController, NavParams} from 'ionic-framework/ionic';

import {PersonService} from './person.service';

@Page({
  templateUrl: 'build/pages/person/person.html'
})
export class PersonPage {
  person: any;

  constructor(private nav: NavController, navParams: NavParams) {
    this.person = navParams.get('person');
  }
}
