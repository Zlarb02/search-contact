import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { contact } from 'src/core/models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contactList!: contact[];

  constructor(private http: HttpClient) { }

  public getContacts(): Promise<contact[]> {
    return new Promise<contact[]>((resolve, reject) => {
      this.http.get<contact[]>('http://localhost:65086/assets/contacts.JSON').subscribe(
        (contacts: contact[]) => {
          this.contactList = contacts;
          resolve(this.contactList);
        },
        (error: any) => {
          reject(error);
        }
      );
    });
  }



  getContactById(id: number): contact | undefined {
    return this.contactList.find(contact => contact.id === id);
  }

  generateNewId(): number {
    const maxId = Math.max(...this.contactList.map(contact => contact.id));
    return maxId + 1;
  }

  public addContact(newContact: contact) {
    return this.http.post('http://localhost:65086/assets/contacts.JSON', newContact);
  }
}