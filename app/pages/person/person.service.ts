import {Injectable} from 'angular2/core';

@Injectable()
export class PersonService {

  people: Array<{ name: string, status: string }>;

  constructor() {
    this.people = [
      {
        name: 'David Cai',
        status: 'Waiting in queue'
      },
      {
        name: 'Jon Snow',
        status: 'Winter is coming'
      }
    ];
  }

  getPeople() {
    return this.people;
  }
}
