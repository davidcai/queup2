import * as _ from 'lodash';
import {Page, NavController, NavParams} from 'ionic-framework/ionic';
import {PersonService} from './person.service';


export interface Person {
  name: string;
  status: string;
}


@Page({
  templateUrl: 'build/pages/person/person.html'
})
export class PersonPage {
  person: Person;

  constructor(private nav: NavController, navParams: NavParams) {
    const person = navParams.get('person') || {};
    this.person = _.cloneDeep(person);
  }
}
