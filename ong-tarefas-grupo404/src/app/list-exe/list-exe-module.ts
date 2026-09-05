import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

import { ListExeRoutingModule } from './list-exe-routing-module';
import { Exe1 } from './exe1/exe1';
import { Exe2 } from './exe2/exe2';
import { Exe3 } from './exe3/exe3';
import { Exe4 } from './exe4/exe4';
import { Exe5 } from './exe5/exe5';
import { Exe6 } from './exe6/exe6';
import { Exe7 } from './exe7/exe7';

@NgModule({
  declarations: [Exe1, Exe2, Exe3, Exe4, Exe5, Exe6, Exe7],
  imports: [CommonModule, ListExeRoutingModule, FormsModule],
})
export class ListExeModule {}
