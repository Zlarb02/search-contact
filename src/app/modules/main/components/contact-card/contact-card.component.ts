import { Component, Input, OnDestroy } from '@angular/core';
import { contact } from 'src/core/models/contact.model';
import { SharedDataService } from '../../services/shared-data.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})

export class ContactCardComponent implements OnDestroy {
  @Input() instanceDeContact!: contact;
  public searchInput: string = '';
  private searchInputSubscription!: Subscription;

  constructor(
    private sharedDataService: SharedDataService,
    private router: Router
  ) { }

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

  onCardClick() {
    this.router.navigate([`/detail/${this.instanceDeContact.id}`]);
  }
}