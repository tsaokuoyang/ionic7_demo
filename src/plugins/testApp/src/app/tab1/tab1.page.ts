import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';

import { HelloWorldPlugin } from '@awesome-cordova-plugins/hello-world/ngx';
import { HelloWorldKPlugin } from '@awesome-cordova-plugins/hello-world-k/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  //  imports: [IonCol, IonRow, IonGrid, IonButton, IonHeader, IonToolbar, IonTitle, IonContent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab1Page {

  constructor(private hw: HelloWorldPlugin, private hwk: HelloWorldKPlugin) { }

  async toast() {
    await this.hw.nativeToast('測試');
  }

  async toastK() {
    await this.hwk.nativeToast('測試');
  }

}
