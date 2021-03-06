import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ModalUploadService } from '../components/modal-upload/modal-upload.service';

import {
  LoginGuardGuard,
  AdminGuard,
  VerificaTokenGuard,
  SettingsService,
  SidebarService,
  SharedService,
  UsuarioService,
  SubirArchivoService,
  HospitalService,
  MedicoService
} from './service.index';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    LoginGuardGuard,
    AdminGuard,
    VerificaTokenGuard,
    SettingsService,
    SidebarService,
    SharedService,
    UsuarioService,
    SubirArchivoService,
    ModalUploadService,
    HospitalService,
    MedicoService
  ]
})
export class ServiceModule { }
