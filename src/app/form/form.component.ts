import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { RichSelectModule } from '@ag-grid-enterprise/rich-select';
import { Component, OnInit, ViewChild } from '@angular/core';
import { faUserEdit, faUserPlus, faUserTimes } from '@fortawesome/free-solid-svg-icons';
import { AgGridAngular } from 'ag-grid-angular';

import { SelectRendererComponent } from './select-cell/select-cell-renderer.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;
  icons = [faUserTimes, faUserEdit, faUserPlus];
  private gridApi;
  private gridColumnApi;

  public modules = [
    ClientSideRowModelModule,
    RichSelectModule,
    MenuModule,
    ColumnsToolPanelModule,
  ];
  public frameworkComponents = {
    SelectRendererComponent: SelectRendererComponent,
  };

  columnTypes: {
    textColumn: {
      filter: 'agTextColumnFilter';
    };

    dateColumn: {
      filter: 'agDateColumnFilter';
    };
  };

  defaultColDef = {
    width: 150,
    sortable: true,
    editable: true,
    filter: 'agTextColumnFilter',
    floatingFilter: true,
    resizable: true,
    // suppressMenu: true,
    // supress filter icon
    floatingFilterComponentParams: { suppressFilterButton: true },
  };

  columnDefs = [
    {
      headerName: 'First name',
      field: 'name',
      checkboxSelection: true,
    },
    {
      headerName: 'Last name',
      field: 'l_name',
    },
    {
      headerName: 'Phone number',
      filter: 'agTextColumnFilter',
      field: 'phone',
      floatingFilterComponentParams: { suppressFilterButton: false },
    },
    {
      headerName: 'Email',
      field: 'email',
      width: 200,
    },
    {
      headerName: 'Status',
      field: 'status',
      cellRenderer: 'SelectRendererComponent',
      cellEditor: 'agRichSelectCellEditor',
      cellEditorParams: {
        values: [
          'At work',
          'Holiday absence',
          'Business Trip',
          'Sickness absence',
          'Maternity absence',
        ],
        cellRenderer: 'SelectRendererComponent',
      },
    },
    {
      headerName: 'Birth date',
      field: 'bdate',
    },
    {
      headerName: 'Gender',
      field: 'gender',
      cellRenderer: 'SelectRendererComponent',
      cellEditor: 'agRichSelectCellEditor',
      cellEditorParams: {
        values: ['Male', 'Female'],
        cellRenderer: 'SelectRendererComponent',
      },
    },
    {
      headerName: 'Hire date',
      field: 'hdate',
    },
    {
      headerName: 'Job title',
      field: 'title',
      cellRenderer: 'SelectRendererComponent',
      cellEditor: 'agRichSelectCellEditor',
      cellEditorParams: {
        values: [
          'Junior Developer',
          'Senior Developer',
          'System Designer',
          'System Architect',
          'Business Analyst',
          'Administration',
          'Marketing',
          'Sales',
        ],
        cellRenderer: 'SelectRendererComponent',
      },
    },
    {
      headerName: 'Id',
      field: 'id',
      filter: 'agNumberColumnFilter',
    },
    {
      headerName: 'Created',
      field: 'created',
    },
    {
      headerName: 'Created by',
      field: 'createdBy',
    },
    {
      headerName: 'Modified',
      field: 'modified',
    },
    {
      headerName: 'Modified by',
      field: 'modifiedBy',
    },
  ];

  rowData = [
    {
      name: 'Bakir',
      l_name: 'Karovic',
      phone: '+38762409970',
      email: 'bkarovic1@etf.unsa.ba',
      status: 'At work',
      bdate: '23/09/1999',
      gender: 'Male',
      hdate: '01/08/2025',
      title: 'Intern',
      id: 1,
      created: '21/05/2020',
      createdBy: 'Bakir',
      modified: false,
      modifiedBy: '',
    },
    {
      name: 'Kerim',
      l_name: 'Betkasevic',
      phone: '+38762412226',
      email: 'bakir.karovic@gmail.com',
      status: 'Holiday absence',
      bdate: '13/01/1999',
      gender: 'Male',
      hdate: '24/01/2021',
      title: 'System designer',
      id: 2,
      created: '21/05/2020',
      createdBy: 'Bakir',
      modified: false,
      modifiedBy: '',
    },
    {
      name: 'Semra',
      l_name: 'Sabic',
      phone: '+38761598203',
      email: 'bakir.karovic@live.com',
      status: 'Business Trip',
      bdate: '29/02/2000',
      gender: 'Male',
      hdate: '27/11/2023',
      title: 'Senior Developer',
      id: 3,
      created: '21/05/2020',
      createdBy: 'Bakir',
      modified: false,
      modifiedBy: '',
    },
    {
      name: 'Faris',
      l_name: 'Bazdar',
      phone: '+38761598203',
      email: 'bakir.karovic@live.com',
      status: 'Sickness absence',
      bdate: '29/02/2000',
      gender: 'Male',
      hdate: '27/11/2023',
      title: 'Business analyst',
      id: 4,
      created: '21/05/2020',
      createdBy: 'Bakir',
      modified: false,
      modifiedBy: '',
    },
    {
      name: 'Darko',
      l_name: 'Randic',
      phone: '+38761598203',
      email: 'bakir.karovic@live.com',
      status: 'Maternity absence',
      bdate: '29/02/2000',
      gender: 'Male',
      hdate: '27/11/2023',
      title: 'Sales',
      id: 5,
      created: '21/05/2020',
      createdBy: 'Bakir',
      modified: false,
      modifiedBy: '',
    },
    {
      name: 'Nadir',
      l_name: 'Muratovic',
      phone: '+38761598203',
      email: 'nadir@live.com',
      status: 'At work',
      bdate: '29/02/2000',
      gender: 'Male',
      hdate: '27/11/2023',
      title: 'Administration',
      id: 6,
      created: '21/05/2020',
      createdBy: 'Bakir',
      modified: false,
      modifiedBy: '',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    const selectedDataStringPresentation = selectedData
      .map((node) => node.make + ' ' + node.model)
      .join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
}
