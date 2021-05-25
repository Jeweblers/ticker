import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VerticalComponent} from './patterns/vertical/vertical.component';
import {MenubarModule} from 'primeng/menubar';
import {MenuModule} from 'primeng/menu';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CenteredComponent } from './patterns/centered/centered.component';

@NgModule({
  declarations: [
    VerticalComponent,
    SidebarComponent,
    NavbarComponent,
    CenteredComponent
  ],
  exports: [
    VerticalComponent,
    CenteredComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    MenuModule,
  ]
})
export class LayoutsModule {
}
