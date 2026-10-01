import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListExe2RoutingModule } from './list-exe2-routing-module';
import { Et1 } from './et1/et1';
import { Et2 } from './et2/et2';
import { Et3 } from './et3/et3';
import { Et4 } from './et4/et4';
import { Et5 } from './et5/et5';
import { Et6 } from './et6/et6';
import { Et7 } from './et7/et7';

@NgModule({
  declarations: [Et1, Et2, Et3, Et4, Et5, Et6, Et7],
  imports: [CommonModule, ListExe2RoutingModule],
})
export class ListExe2Module {}
