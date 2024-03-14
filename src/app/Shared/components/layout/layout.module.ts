import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, FormsModule],

  exports: [LayoutComponent],
})
export class LayoutModule {}
