import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxGltfViewerModule } from 'projects/ngx-gltf-viewer/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgxGltfViewerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
