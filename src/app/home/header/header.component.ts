import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { WindowScrollService } from 'src/app/shared/util/window-scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  scrollY$: Observable<number>;
  enableSticky: boolean = false;

  @Output() navigate: EventEmitter<string> = new EventEmitter();

  @HostListener('window:scroll') onScroll(): void {
    let scrollPosition = this.getYPosition();
    this.enableSticky = scrollPosition > window.innerHeight * 0.92;
    this.windowScrollService.updateScrollPosition(scrollPosition);
  }

  constructor(private windowScrollService: WindowScrollService) {
    this.scrollY$ = this.windowScrollService.scrollY;
  }

  ngOnInit(): void {
  }

  getYPosition(): number {
    return window.scrollY;
  }

  handleScroll($event: Event, section: string) {
    $event.preventDefault();
    this.navigate.emit(section);
  }
  
}
