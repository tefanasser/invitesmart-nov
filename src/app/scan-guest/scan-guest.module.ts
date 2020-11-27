import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { ScanGuestPage } from './scan-guest.page';

const routes: Routes = [
  {
    path: '',
    component: ScanGuestPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ScanGuestPage]
})
export class ScanGuestPageModule {}
