import { CanActivateFn, Router, Routes, UrlTree } from '@angular/router';
import { HomeComponent } from "@home/components/home/home.component";
import { PlannerComponent } from "@planner/components/planner/planner.component";
import { AuthComponent } from "@auth/auth.component";
import { inject } from "@angular/core";
import { UserService } from "@auth/services/user.service";

const authGuardFn: CanActivateFn = (): boolean | UrlTree => {
    return !!inject(UserService).accessToken || inject(Router).createUrlTree(['auth']);
};

export const routes: Routes = [
    { path: 'auth', component: AuthComponent },
    { path: 'home', component: HomeComponent, canActivate: [authGuardFn] },
    { path: 'planner', component: PlannerComponent, canActivate: [authGuardFn] },
    { path: '', pathMatch: 'full', redirectTo: 'auth' }
];
