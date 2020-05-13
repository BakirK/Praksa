import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { faBell, faCalendarCheck, faUserCircle } from '@fortawesome/free-regular-svg-icons';
import {
  faCoffee,
  faCompressAlt,
  faCopy,
  faFile,
  faHandshake,
  faIdCard,
  faPowerOff,
  faServer,
  faShareSquare,
  faUserCog,
} from '@fortawesome/free-solid-svg-icons';
import { Menu } from 'src/app/models/model';
import { SidenavService } from 'src/app/services/Sidenav.service';
import * as menu from 'src/assets/menu/menu.json';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements AfterViewInit {
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
    faUserCircle: faUserCircle,
    faBell: faBell,
    faPowerOff: faPowerOff,
  };
  @ViewChild('drawer') drawer: MatSidenav;

  constructor(private sidenavService: SidenavService) {}

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.drawer);
  }
}
