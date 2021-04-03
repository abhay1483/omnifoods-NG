import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  @ViewChild("pricing") pricingSection: ElementRef;
  @ViewChild("features") featuresSection: ElementRef;
  @ViewChild("cities") citiesSection: ElementRef;
  @ViewChild("signup") signUpSection: ElementRef;
  @ViewChild("how") howSection: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  scroll(event: any) {
    if (typeof event == 'string' && event == 'PRICING') {
      this.pricingSection.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    else if(typeof event == 'string' && event == 'FEATURES') {
      this.featuresSection.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    else if(typeof event == 'string' && event == 'CITIES') {
      this.citiesSection.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    else if(typeof event == 'string' && event == 'SIGNUP') {
      this.signUpSection.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    else if(typeof event == 'string' && event == 'HOW') {
      this.howSection.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

}
