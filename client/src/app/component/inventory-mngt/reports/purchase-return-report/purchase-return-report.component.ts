import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { object } from 'twilio/lib/base/serialize';
import { ColorsListModel, PurchaseReturnReportModel } from './purchase-return-report.models';

@Component({
  selector: 'app-purchase-return-report',
  templateUrl: './purchase-return-report.component.html',
  styleUrls: ['./purchase-return-report.component.scss']
})
export class PurchaseReturnReportComponent implements OnInit {

  myForm: FormGroup
  hopiesList: any = [
    { id: 1, name: 'cricket' },
    { id: 2, name: 'baskat' },
    { id: 3, name: 'running' },
  ]
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.creatForm()
  }

  creatForm() {
    const purchaseReturnReportModel = new PurchaseReturnReportModel()
    this.myForm = this._fb.group({
      hoppies: this._fb.array([], [Validators.required]),
      colors: this._fb.array([])
    })
    Object.keys(purchaseReturnReportModel).forEach(key => {
      this.myForm.addControl(key, new FormControl(purchaseReturnReportModel[key], Validators.required));
    })
    this.colorsArrayList.push(this.createArrayListModel())

  }

  get colorsArrayList(): FormArray {
    return this.myForm.get('colors') as FormArray
  }

  get hoppiesArrayList(): FormArray {
    return this.myForm.get('hoppies') as FormArray
  }

  createArrayListModel(colorsListModel?: ColorsListModel): FormGroup {
    let collersListFormControlModel = new ColorsListModel(colorsListModel);
    let formControls = {};
    Object.keys(collersListFormControlModel).forEach((key) => {
      formControls[key] = [{ value: collersListFormControlModel[key], disabled: false }, [Validators.required]]
    });
    return this._fb.group(formControls);
  }

  createArray1ListModel(data): FormGroup {
    let formControls = {};
    Object.keys(data).forEach((key) => {
      formControls[key] = [{ value: data[key], disabled: false }, [Validators.required]]
    });
    return this._fb.group(formControls);
  }

  addArray() {
    this.colorsArrayList.insert(0, this.createArrayListModel());
  }

  removeArray(i) {
    this.colorsArrayList.removeAt(i);
  }

  onChange(data: object, isChecked: boolean) {
    if (isChecked) {
      this.hoppiesArrayList.push(this.createArray1ListModel(data));
      // this.hoppiesArrayList.push(new FormControl(data));
    } else {
      let index = this.hoppiesArrayList.controls.findIndex(x => x == data)
      this.hoppiesArrayList.removeAt(index);
    }
  }

  add() {
    this.myForm
    if (this.myForm.invalid) {
      Object.keys(this.myForm.controls).forEach((key) => {
        this.myForm.controls[key].markAsDirty();
      });
      return
    }
  }


}
