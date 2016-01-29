import * as _ from 'lodash';
import {Page, NavController, NavParams} from 'ionic-framework/ionic';
import {PersonService} from './person.service';


export interface Person {
  id: number;
  name: string;
  status?: string;
}


@Page({
  templateUrl: 'build/pages/person/person.html'
})
export class PersonPage {
  person: Person;

  constructor(
    private nav: NavController,
    navParams: NavParams,
    private PersonService: PersonService) {

    const person = navParams.get('person') || {};
    this.person = _.cloneDeep(person);
  }

  delete() {
    this.nav.pop();
  }

  save() {
    this.PersonService.update(this.person);
    this.nav.pop();
  }
}
