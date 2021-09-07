import { UrlListComponent } from './Components/url-list/url-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUrlComponent } from './Components/add-url/add-url.component';

const routes: Routes = [
  { path: '',  redirectTo: 'UrlList',  pathMatch: 'full'},
  {path: 'UrlList', component: UrlListComponent},
  {path: 'addUrl', component: AddUrlComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
