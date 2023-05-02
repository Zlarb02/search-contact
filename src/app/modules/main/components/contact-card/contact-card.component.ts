import { Component, Input, OnDestroy } from '@angular/core';
import { contact } from 'src/core/models/contact.model';
import { SharedDataService } from '../../services/shared-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})

export class ContactCardComponent implements OnDestroy {
  @Input() instanceDeContact!:contact;
  public searchInput: string = '';
  private searchInputSubscription!: Subscription;

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.searchInputSubscription = this.sharedDataService.getSearchInputObservable().subscribe(
      (value: string) => {
        this.searchInput = value;
      }
    );
  }

  ngOnDestroy() {
    this.searchInputSubscription.unsubscribe();
  }
}