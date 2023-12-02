import { Routes } from '@angular/router';
import { HomeComponent } from "@home/components/home/home.component";
import { PlannerComponent } from "@planner/components/planner/planner.component";
import { AuthComponent } from "@auth/auth.component";

export const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'home', component: HomeComponent },
  { path: 'planner', component: PlannerComponent },
  { path: '', pathMatch: 'full', redirectTo: 'auth' }
];
