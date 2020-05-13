import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from 'src/app/services/Sidenav.service';

@Component({
  selector: 'app-nav-toolbar',
  templateUrl: './app-nav-toolbar.component.html',
  styleUrls: ['./app-nav-toolbar.component.scss'],
})
export class AppNavToolbarComponent implements OnInit {
  @Input() icons: {};
  @Input() drawer: MatSidenav;
  constructor(private sidenav: SidenavService) {}
  toggleSidenav() {
    this.sidenav.toggle();
  }
  ngOnInit(): void {}
}
