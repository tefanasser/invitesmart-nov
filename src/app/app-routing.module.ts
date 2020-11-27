import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'sign-up', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'thumbnails', loadChildren: './thumbnails/thumbnails.module#ThumbnailsPageModule' },
  { path: 'detail', loadChildren: './detail/detail.module#DetailPageModule' },
  { path: 'share-modal', loadChildren: './modal/share-modal/share-modal.module#ShareModalPageModule' },
  { path: 'sign-up', loadChildren: './sign-up/sign-up.module#SignUpPageModule' },
  { path: 'sign-in', loadChildren: './sign-in/sign-in.module#SignInPageModule' },
  { path: 'invitation', loadChildren: './invitation/invitation.module#InvitationPageModule' },
  { path: 'invitation-type', loadChildren: './invitation-type/invitation-type.module#InvitationTypePageModule' },
  { path: 'create-invitation', loadChildren: './create-invitation/create-invitation.module#CreateInvitationPageModule' },
  { path: 'update-invitation', loadChildren: './update-invitation/update-invitation.module#UpdateInvitationPageModule' },
  { path: 'choose-package', loadChildren: './choose-package/choose-package.module#ChoosePackagePageModule' },
  { path: 'add-names', loadChildren: './add-names/add-names.module#AddNamesPageModule' },
  { path: 'add-guests', loadChildren: './modal/add-guests/add-guests.module#AddGuestsPageModule' },
  { path: 'scan-guest', loadChildren: './scan-guest/scan-guest.module#ScanGuestPageModule' },
  { path: 'scan-list', loadChildren: './scan-list/scan-list.module#ScanListPageModule' },
  { path: 'setting', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'buy-guest-plan', loadChildren: './buy-guest-plan/buy-guest-plan.module#BuyGuestPlanPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
