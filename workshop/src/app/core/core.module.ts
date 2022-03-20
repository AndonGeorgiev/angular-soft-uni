import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './app-header/app-header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AsideComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AsideComponent,
  ]
})
export class CoreModule { }
