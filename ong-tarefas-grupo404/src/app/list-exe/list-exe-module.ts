import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListExeRoutingModule } from './list-exe-routing-module';
import { Exe1 } from './exe1/exe1';
import { Exe2 } from './exe2/exe2';
import { Exe3 } from './exe3/exe3';
import { Exe4 } from './exe4/exe4';

@NgModule({
  declarations: [Exe1, Exe2, Exe3, Exe4],
  imports: [CommonModule, ListExeRoutingModule],
})
export class ListExeModule {}
