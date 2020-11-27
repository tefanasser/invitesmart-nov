import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { CreateInvitationPage } from './create-invitation.page';
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
        component: CreateInvitationPage
      }
    ])
  ],
  declarations: [CreateInvitationPage]
})
export class CreateInvitationPageModule {}
