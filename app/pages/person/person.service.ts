import * as  _ from 'lodash';
import {Injectable} from 'angular2/core';
import {Person} from './person';

@Injectable()
export class PersonService {

  people: Array<Person>;

  constructor() {
    this.people = [
      {
        id: 1,
        name: 'David Cai',
        status: 'Waiting in queue'
      },
      {
        id: 2,
        name: 'Jon Snow',
        status: 'Winter is coming'
      }
    ];
  }

  all() {
    return this.people;
  }

  update(person: Person) {
    let target = _.find(this.people, p => { return p.id === person.id; });
    target.name = person.name;
    target.status = person.status;
  }
}
