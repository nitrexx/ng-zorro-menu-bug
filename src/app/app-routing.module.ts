import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from './components/general/general.component';
import { Page2Component } from './components/page2/page2.component';
import { PendingChangesGuard } from './common/pending-changes-guard';

const routes: Routes = [
  { path: 'general', component: GeneralComponent , canDeactivate: [PendingChangesGuard] },
  { path: 'page2', component: Page2Component, canDeactivate: [PendingChangesGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
