import { Component } from '@angular/core';
import { INoRowsOverlayAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-gender-renderer',
  template: `
    <span>
      {{ value }}
      <mat-divider style="border-color: 1px solid black"></mat-divider>
    </span>
  `,
})
export class SelectRendererComponent implements INoRowsOverlayAngularComp {
  public value: any;

  agInit(params): void {
    this.value = params.value;
  }
}
