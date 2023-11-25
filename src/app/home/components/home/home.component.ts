import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from "@home/components/menu-item/menu-item.component";
import { MenuItem } from "@home/interfaces";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MenuItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  menuItems: MenuItem[] = [
    { description: 'Manage your Calendar, Events, Tasks and Goals', icon: 'calendar_today', label: 'Planner', route: 'planner' }
  ];
}
