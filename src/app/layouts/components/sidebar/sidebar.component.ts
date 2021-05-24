import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public items: MenuItem[] = [
    {
      label: 'Dashboard',
      items: [
        {
          label: 'Monitor',
          routerLink: '/'
        }
      ]
    },
    {
      label: 'Users',
      items: [
        {label: 'List'},
        {label: 'Profile'}
      ]
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
