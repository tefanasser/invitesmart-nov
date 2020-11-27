import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { ShareModalPage } from './share-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ShareModalPage
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
  declarations: [ShareModalPage]
})
export class ShareModalPageModule {}
