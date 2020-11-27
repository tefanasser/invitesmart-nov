import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { AddNamesPage } from './add-names.page';

const routes: Routes = [
  {
    path: '',
    component: AddNamesPage
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
  declarations: [AddNamesPage]
})
export class AddNamesPageModule {}
