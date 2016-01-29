import {Page, NavController} from 'ionic-framework/ionic';
import {PersonPage} from '../person/person';
import {PersonService} from '../person/person.service';

@Page({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {

  people: Array<{ name: string, status: string }>;

  constructor(private nav: NavController, PersonService: PersonService) {
				this.people = PersonService.getPeople();
  }

  add() {
    this.nav.push(PersonPage, {
      person: null
    });
  }
}
