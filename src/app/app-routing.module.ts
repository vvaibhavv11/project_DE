import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ScantextifyComponent } from './scantextify/scantextify.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{ path: 'scantextify', component: ScantextifyComponent },
                        { path: 'login', component: LoginComponent},
                        {path: '', redirectTo: '/scantextify', pathMatch: 'full'} ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
})
export class AppRoutingModule { }