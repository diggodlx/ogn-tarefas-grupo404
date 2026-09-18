import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListExe2RoutingModule } from './list-exe2-routing-module';
import { Et1 } from './et1/et1';
import { Et2 } from './et2/et2';

@NgModule({
  declarations: [Et1, Et2],
  imports: [CommonModule, ListExe2RoutingModule],
})
export class ListExe2Module {}
