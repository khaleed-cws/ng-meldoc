import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { GenericmodalComponent } from '../../../genericmodal/genericmodal.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule
    ],
  declarations: [
    GenericmodalComponent,
     EditComponent,
     CreateComponent
  ],
  providers: [NgbActiveModal],
  entryComponents: [
    GenericmodalComponent,
    CreateComponent,
    EditComponent
  ]
})
export class ProfileModule { }
