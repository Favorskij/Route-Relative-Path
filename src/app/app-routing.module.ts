import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageOneComponent} from "./page-one/page-one.component";
import {PageTwoComponent} from "./page-two/page-two.component";

const routes: Routes = [

  {path:'', children: [


      // Страница /one
      {path: 'one', component: PageOneComponent},

      // Страница /two
      {path: 'two', component: PageTwoComponent},


    ]},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
