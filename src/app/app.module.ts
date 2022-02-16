import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';


import { ReactiveFormsModule } from '@angular/forms';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { HeaderComponent } from './shared/header/header.component';
import { FormComponent } from './components/form/form.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ResponseModalComponent } from './components/form/response-modal/response-modal.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';





registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent,
    ResponseModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzNotificationModule,
    NzMenuModule,
    NzPageHeaderModule,
    NzGridModule,
    NzCardModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzAvatarModule,
    NzButtonModule,
    NzSpaceModule,
    NzModalModule,
    NzSpinModule,
    NzTypographyModule,
    NzTableModule,
    NzDividerModule,
    NzResultModule,
    NzDescriptionsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
