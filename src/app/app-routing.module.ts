import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { InfoComponent } from './pages/info/info.component';


const routes: Routes = [
  {
    path: '',
    component: UserlistComponent,
  },
  {
    path:'',
    component:AppComponent
  },
  {
    path: 'pages/info/:id',
    component: InfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
