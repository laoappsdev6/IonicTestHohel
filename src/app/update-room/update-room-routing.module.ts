import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateRoomPage } from './update-room.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateRoomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateRoomPageRoutingModule {}
