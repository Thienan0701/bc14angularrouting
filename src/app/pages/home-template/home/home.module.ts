import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ChildHomeComponent } from './child-home/child-home.component';
import { ShareModuleModule } from 'src/app/_core/shares/share-module/share-module.module';
import { HomeCarouselModule } from './home-carousel/home-carousel.module';



@NgModule({
  declarations: [
    HomeComponent,
    ChildHomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ShareModuleModule,
    HomeCarouselModule
  ]
})
export class HomeModule { }
