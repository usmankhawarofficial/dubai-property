import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPropPageRoutingModule } from './add-prop-routing.module';

import { AddPropPage } from './add-prop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPropPageRoutingModule
  ],
  declarations: [AddPropPage]
})
export class AddPropPageModule {}
