import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Menu } from 'src/app/models/model';
import * as menu from 'src/assets/menu/menu.json';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  menus: Menu[] = menu.menus;
  faCoffee = faCoffee;
}
