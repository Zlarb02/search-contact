
import { ContactsService } from '../../services/contact-list.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { contact } from 'src/core/models/contact.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  selectedContact: contact | undefined;

  constructor(private route: ActivatedRoute, private serviceContact: ContactsService) { }

  ngOnInit(): void {
    const idString = this.route.snapshot.paramMap.get('id');
    const id = Number(idString);
    console.log(id);
    this.selectedContact = this.serviceContact.getContactById(id);
  }
}
