import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LoginGuardGuard, SettingsService, SidebarService, SharedService, UsuarioService, SubirArchivoService } from './service.index';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    LoginGuardGuard,
    SettingsService,
    SidebarService,
    SharedService,
    UsuarioService,
    SubirArchivoService,
    ModalUploadService
  ]
})
export class ServiceModule { }
