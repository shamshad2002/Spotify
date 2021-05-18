import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloadComponent } from './download/download.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MycontainerComponent } from './mycontainer/mycontainer.component';
import { SignupComponent } from './signup/signup.component';
import { SongComponent } from './song/song.component';

const routes: Routes = [
  {path:'', component: MycontainerComponent},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
   {path:'download', component: DownloadComponent},
   {path: 'home', component: HomeComponent},
   {path:'song', component: SongComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

