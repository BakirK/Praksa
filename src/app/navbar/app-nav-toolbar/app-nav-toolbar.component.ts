import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ToolbarIcon } from 'src/app/models/model';
import { SidenavService } from 'src/app/services/Sidenav.service';
import * as toolbar from 'src/assets/toolbar-icons/toolbar-icons.json';

@Component({
  selector: 'app-nav-toolbar',
  templateUrl: './app-nav-toolbar.component.html',
  styleUrls: ['./app-nav-toolbar.component.scss'],
})
export class AppNavToolbarComponent implements OnInit {
  toolbarIcons: ToolbarIcon[] = toolbar.icons;

  @Input() icons: {};
  @Input() drawer: MatSidenav;
  constructor(private sidenav: SidenavService) {}
  toggleSidenav() {
    this.sidenav.toggle();
  }
  ngOnInit(): void {}
}
