import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTestComponent } from './add-test/add-test.component';
import { EditTestComponent } from './edit-test/edit-test.component';
import { ListTestComponent } from './list-test/list-test.component';



@NgModule({
  declarations: [AddTestComponent, EditTestComponent, ListTestComponent],
  imports: [
    CommonModule
  ]
})
export class TestModule { }
