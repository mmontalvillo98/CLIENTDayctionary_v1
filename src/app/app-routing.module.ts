import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicGuard } from './guards/public.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import("./modules/auth.module").then(m => m.AuthModule),
    canActivate: [PublicGuard], canMatch: [PublicGuard]},
  {
    path: 'word', loadChildren:()=>import('./modules/word.module').then(m=>m.WordModule),
    canActivate: [AuthGuard], canMatch: [AuthGuard]
  },
  {path:'**', redirectTo:"word"}
  // { path: '404', component: ErrorPageComponent },
  // { path: '**', redirectTo: "404" }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }