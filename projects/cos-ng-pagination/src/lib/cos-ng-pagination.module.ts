import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CosNgPaginationComponent } from './cos-ng-pagination.component';

@NgModule({
  declarations: [CosNgPaginationComponent],
  imports: [
    CommonModule
  ],
  exports: [CosNgPaginationComponent]
})
export class CosNgPaginationModule { }
