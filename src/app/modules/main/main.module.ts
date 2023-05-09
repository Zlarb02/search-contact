import { NgModule, createComponent } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { DetailComponent } from './components/detail/detail.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CreateComponent } from './components/create/create.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ContactCardComponent,
    DetailComponent,
    CreateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainComponent
  ]
})
export class MainModule { }
