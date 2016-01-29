import * as _ from 'lodash';
import {Page, NavController, NavParams} from 'ionic-framework/ionic';
import {Person} from './person';
import {PersonService} from './person.service';


@Page({
  templateUrl: 'build/pages/person/person.html'
})
export class PersonPage {

  person: Person;


  constructor(
    private nav: NavController,
    navParams: NavParams,
    private PersonService: PersonService
  ) {

    const person = navParams.get('person') || {};
    this.person = _.cloneDeep(person);
  }


  delete() {
    this.PersonService.remove(this.person);
    this.nav.pop();
  }


  save() {
    if (this.person.id) {
      this.PersonService.update(this.person);
    } else {
      this.PersonService.create(this.person);
    }
    
    this.nav.pop();
  }
}
