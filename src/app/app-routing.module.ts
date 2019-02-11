import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  // { path: 'one', loadChildren: './tabs/one/one.module#OnePageModule' },
  // { path: 'two', loadChildren: './tabs/two/two.module#TwoPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
