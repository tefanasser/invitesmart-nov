import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { InvitationTypePage } from './invitation-type.page';

const routes: Routes = [
  {
    path: '',
    component: InvitationTypePage
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
  declarations: [InvitationTypePage]
})
export class InvitationTypePageModule {}
