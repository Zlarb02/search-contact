import { TestBed } from '@angular/core/testing';

import { ContactsService } from './contact-list.service';

describe('ContactListService', () => {
  let service: ContactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
