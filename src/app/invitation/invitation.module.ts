import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { InvitationPage } from './invitation.page';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NgxQRCodeModule,
    TranslateModule,
    RouterModule.forChild([
      {
        path: '',
        component: InvitationPage
      }
    ])
  ],
  declarations: [InvitationPage]
})
export class InvitationPageModule {}
