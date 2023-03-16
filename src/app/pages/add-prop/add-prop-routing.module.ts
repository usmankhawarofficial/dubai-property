import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPropPage } from './add-prop.page';

const routes: Routes = [
  {
    path: '',
    component: AddPropPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPropPageRoutingModule {}
