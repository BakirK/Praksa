import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  faCalendarCheck,
  faCoffee,
  faCompressAlt,
  faCopy,
  faFile,
  faHandshake,
  faIdCard,
  faServer,
  faShareSquare,
  faUserCog,
} from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Menu } from 'src/app/models/model';
import * as menu from 'src/assets/menu/menu.json';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  menus: Menu[] = menu.menus;
  mode = new FormControl('over');
  icons = {
    faCoffee: faCoffee,
    faCopy: faCopy,
    faFile: faFile,
    faHandshake: faHandshake,
    faIdCard: faIdCard,
    faUserCog: faUserCog,
    faServer: faServer,
    faShareSquare: faShareSquare,
    faCalendarCheck: faCalendarCheck,
    faCompressAlt: faCompressAlt,
  };
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
