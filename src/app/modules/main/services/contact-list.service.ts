import { Injectable } from '@angular/core';
import { contact } from 'src/core/models/contact.model';

@Injectable({
  providedIn: 'root'
})


export class ContactsService {
  contactList:contact[] =[
    {
      id: 1,
      lastName: "Mario",
      firstName: "Super",
      isSupplier: true,
      imgUrl: "https://picsum.photos/300/400",
      telephone: "0123456789",
    },
    {
      id: 2,
      lastName: "Croft",
      firstName: "Lara",
      isSupplier: false,
      imgUrl: "https://picsum.photos/300/401",
      telephone: "0123456789",
    },
    {
      id: 3,
      lastName: "Zelda",
      firstName: "",
      isSupplier: false,
      imgUrl: "https://picsum.photos/300/402",
      telephone: "0123456789",
    },
    {
      id: 4,
      lastName: "Link",
      firstName: "",
      isSupplier: false,
      imgUrl: "https://picsum.photos/300/403",
      telephone: "0123456789",
    },
    {
      id: 5,
      lastName: "Kong",
      firstName: "Donkey",
      isSupplier: false,
      imgUrl: "https://picsum.photos/300/404",
      telephone: "0123456789",
    },
    {
      id: 6,
      lastName: "Shepard",
      firstName: "Commander",
      isSupplier: false,
      imgUrl: "https://picsum.photos/300/405",
      telephone: "0123456789",
    },
    {
      id: 7,
      lastName: "Snake",
      firstName: "Solid",
      isSupplier: true,
      imgUrl: "https://picsum.photos/300/406",
      telephone: "0123456789",
    },
    {
      id: 8,
      lastName: "Kazama",
      firstName: "Jin",
      isSupplier: false,
      imgUrl: "https://picsum.photos/300/407",
      telephone: "0123456789",
    },
    {
      id: 9,
      lastName: "Valentine",
      firstName: "Jill",
      isSupplier: false,
      imgUrl: "https://picsum.photos/300/408",
      telephone: "0123456789",
    },
    {
      id: 10,
      lastName: "Kombat",
      firstName: "Sub-Zero",
      isSupplier: false,
      imgUrl: "https://picsum.photos/300/409",
      telephone: "0123456789",
    },
    {
      id: 11,
      lastName: "McCloud",
      firstName: "Fox",
      isSupplier: true,
      imgUrl: "https://picsum.photos/300/410",
      telephone: "0123456789",
    },
    {
      id: 12,
      lastName: "Kong",
      firstName: "Diddy",
      isSupplier: false,
      imgUrl: "https://picsum.photos/300/411",
      telephone: "0123456789",
    },
    {
      id: 13,
      lastName: "Man",
      firstName: "Pac",
      isSupplier: false,
      imgUrl: "https://picsum.photos/300/412",
      telephone: "0123456789",
    },
    {
      id: 14,
      lastName: "",
      firstName: "Tidus",
      isSupplier: false,
      imgUrl: "https://picsum.photos/300/413",
      telephone: "0123456789",
    },
    {
      id: 15,
      lastName: "Pichon",
      firstName: "Mr",
      isSupplier: false,
      imgUrl: "https://picsum.photos/300/414",
      telephone: "0123456789",
    },
  ]
  public getContacts():contact[]{
    return this.contactList
  }
}
