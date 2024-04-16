import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, Platform } from '@ionic/angular';

import { HelloWorldPlugin } from '@awesome-cordova-plugins/hello-world/ngx';
import { HelloWorldKPlugin } from '@awesome-cordova-plugins/hello-world-k/ngx';
import { TensorFlowLitePlugin } from '@awesome-cordova-plugins/tensorflow-lite/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab1Page {

  public txt: string = '測試123';
  public classified_txt: string = '';

  public tf_loaded: boolean = false;

  constructor(
    private hw: HelloWorldPlugin,
    private hwk: HelloWorldKPlugin,
    private tf: TensorFlowLitePlugin
  ) {

  }

  async toast() {
    await this.hw.nativeToast( this.txt );
  }

  async toastK() {
    await this.hwk.nativeToast( this.txt );
  }

  async tf_load() {
    if (!this.tf_loaded) {
      await this.tf.load();
      this.tf_loaded = true;
    }
  }

  async tf_unload() {
    if (this.tf_loaded) {
      await this.tf.unLoad();
      this.tf_loaded = false;
    }

  }

  async tf_classify() {
    if (this.tf_loaded) {
      this.classified_txt = JSON.stringify( await this.tf.classify(this.txt) );
      console.log(this.classified_txt);
    }
  }


}
