import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { SafePipe } from '../app/pipeService';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { AddGuestsPage } from './modal/add-guests/add-guests.page';
import { ShareModalPage } from './modal/share-modal/share-modal.page';
import { ScanPage } from './modal/scan/scan.page';
import { CreateInvitationPage } from './create-invitation/create-invitation.page';
import { UserService } from './services/user.service';
import { FilterPipe } from './services/filterPipe';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { InAppPurchase } from '@ionic-native/in-app-purchase/ngx';
import { Screenshot } from '@ionic-native/screenshot/ngx';
// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [AppComponent, SafePipe, ShareModalPage, AddGuestsPage, ScanPage, FilterPipe],
  entryComponents: [ShareModalPage, AddGuestsPage, ScanPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, NgxQRCodeModule, FormsModule, ReactiveFormsModule,HttpClientModule, NgQrScannerModule,   HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
   ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, SocialSharing, UserService,Camera, QRScanner, InAppPurchase, Screenshot, InAppBrowser
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
