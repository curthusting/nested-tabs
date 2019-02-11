import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  { path: '', redirectTo: 'one', pathMatch: 'full' },
  {
    path: '',
    component: TabsPage,
    children: [
      { path: 'one', loadChildren: './one/one.module#OnePageModule' },
      { path: 'two', loadChildren: './two/two.module#TwoPageModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPagePageRoutingModule {}
