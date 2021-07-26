import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateRoomPageRoutingModule } from './update-room-routing.module';

import { UpdateRoomPage } from './update-room.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateRoomPageRoutingModule
  ],
  declarations: [UpdateRoomPage]
})
export class UpdateRoomPageModule {}
