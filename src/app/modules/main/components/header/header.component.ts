import { Component } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {  
  public searchInput: string = 'search';

  constructor(private sharedDataService: SharedDataService) {}

  public searchContact(){
    console.log(this.searchInput);
    this.sharedDataService.setSearchInput(this.searchInput);
  }
}
