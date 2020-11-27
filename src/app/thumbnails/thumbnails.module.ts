import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { ThumbnailsPage } from './thumbnails.page';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
const routes: Routes = [
  {
    path: '',
    component: ThumbnailsPage
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
  declarations: [ThumbnailsPage]
})
export class ThumbnailsPageModule {}
