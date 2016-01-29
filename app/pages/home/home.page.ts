import {Page, NavController} from 'ionic-framework/ionic';
import {Person} from '../person/person';
import {PersonPage} from '../person/person.page';
import {PersonService} from '../person/person.service';


@Page({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {

  people: Array<Person>;


  constructor(private nav: NavController, PersonService: PersonService) {
    this.people = PersonService.all();
  }


  add() {
    this.nav.push(PersonPage, {
      person: null
    });
  }


  edit(person) {
    this.nav.push(PersonPage, {
      person: person
    });
  }
}