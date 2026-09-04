import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListExeRoutingModule } from './list-exe-routing-module';
import { Exe1 } from './exe1/exe1';

@NgModule({
  declarations: [Exe1],
  imports: [CommonModule, ListExeRoutingModule],
})
export class ListExeModule {}
