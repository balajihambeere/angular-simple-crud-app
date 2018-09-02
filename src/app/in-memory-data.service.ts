import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const customers = [
      { id: 101, firstName: 'Steve', lastName: 'Jobs', phoneNumber: '123456789', emailAddress: 'steve@gmail.com' },
      { id: 102, firstName: 'Bill', lastName: 'gates', phoneNumber: '987654321', emailAddress: 'gates@gmail.com' }];
    return { customers };
  }
}
