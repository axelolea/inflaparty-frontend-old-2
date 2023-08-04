import { NgModule } from '@angular/core'
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path: 'home', loadChildren: () => import('./modules').then(e => e.HomeModule) },
  { path: '**', redirectTo: 'home'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
