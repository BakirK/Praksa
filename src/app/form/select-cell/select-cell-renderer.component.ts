import { Component } from '@angular/core';
import { INoRowsOverlayAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-gender-renderer',
  template: `
    <span>
      {{ value }}
    </span>
  `,
})
export class SelectRendererComponent implements INoRowsOverlayAngularComp {
  public value: any;

  agInit(params): void {
    this.value = params.value;
  }
}
