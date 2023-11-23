import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from "@home/interfaces";
import { RouterLink } from "@angular/router";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [CommonModule, RouterLink, MatCardModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent {
  @Input() menuItem: MenuItem;
}
