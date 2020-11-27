import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Platform, Events, LoadingController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SessionProvider } from './services/session/session';
import { UserService } from './services/user.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    public alertController: AlertController,
    public userService: UserService,
    private router: Router,
    // public session: SessionProvider,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.show();
      setTimeout(() => {
        this.splashScreen.hide();
      }, 1000);
      this.refresh_token();
    });
    // this.platform.backButton.subscribe(() => {
    //   this.checkLogin();
    // })
  }

  async alertMessage(message) {
    const alert = await this.alertController.create({
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
  // ************************ Guest List ***************************//
  async refresh_token() {
    await this.userService.refreshToken()
      .subscribe(res => {
        let data = res['data'];
        if (data && data.token) {
          this.router.navigate(['/invitation']);
        } else {
          // this.router.navigate(['/sign-up']) 
        }
      }, err => {
        console.log(err, 'err')
        // this.router.navigate(['/sign-up']) 
      });
  }

}
