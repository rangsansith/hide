import { Injectable } from '@angular/core';
declare var firebase: any;

@Injectable()
export class DataService {

  constructor() { }

  fetchData() {
    return firebase.database().ref('/').once('value');
  }

}
