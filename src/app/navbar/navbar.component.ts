import { Component } from '@angular/core';
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
import { Menu } from 'src/app/models/model';
import * as menu from 'src/assets/menu/menu.json';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  menus: Menu[] = menu.menus;
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
}
