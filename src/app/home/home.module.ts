import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './header/header.component';
import { FeaturesComponent } from './features/features.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { HomePageComponent } from './home-page/home-page.component';



@NgModule({
  declarations: [HeaderComponent, FeaturesComponent, FavouritesComponent, HomePageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
