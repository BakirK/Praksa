import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { RichSelectModule } from '@ag-grid-enterprise/rich-select';
import { Component, OnInit, ViewChild } from '@angular/core';
import { faUserEdit, faUserPlus, faUserTimes } from '@fortawesome/free-solid-svg-icons';
import { AgGridAngular } from 'ag-grid-angular';

import { getDatePicker } from './datepicker';
import { SelectRendererComponent } from './select-cell/select-cell-renderer.component';
import { EmailCellEditor } from './validation/emailValidation';
import { PhoneCellEditor } from './validation/phoneValidation';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;

  icons = {
    faUserTimes: faUserTimes,
    faUserEdit: faUserEdit,
    faUserPlus: faUserPlus,
  };
  private gridApi;
  private gridColumnApi;
  public components;
  public modules = [
    ClientSideRowModelModule,
    RichSelectModule,
    MenuModule,
    ColumnsToolPanelModule,
  ];
  public frameworkComponents = {
    SelectRendererComponent: SelectRendererComponent,
  };
  defaultColDef = {
    width: 150,
    sortable: true,
    editable: true,
    filter: 'agTextColumnFilter',
    floatingFilter: true,
    resizable: true,
    // supress filter and menu icon
    suppressMenu: true,
    floatingFilterComponentParams: { suppressFilterButton: true },
    headerClass: 'grid-header',
  };

  columnDefs = [
    {
      headerName: 'First name',
      field: 'name',
      checkboxSelection: true,
      valueGetter: function (params) {
        if (params.data.name) {
          return params.data.name.toString();
        } else {
          return 'required';
        }
      },
      valueSetter: function (params) {
        const regex = /\d/;

        if (params.newValue && regex.test(params.newValue)) {
          params.data.name = params.newValue;
          // return true to tell grid that the value has changed, so it knows
          // to update the cell
          return true;
        } else {
          // return false, the grid doesn't need to update
          return false;
        }
      },
    },
    {
      headerName: 'Last name',
      field: 'l_name',
      valueGetter: function (params) {
        if (params.data.l_name) {
          return params.data.l_name.toString();
        } else {
          return 'required';
        }
      },
      valueSetter: function (params) {
        if (params.newValue) {
          params.data.l_name = params.newValue;
          // return true to tell grid that the value has changed, so it knows
          // to update the cell
          return true;
        } else {
          // return false, the grid doesn't need to update
          return false;
        }
      },
    },
    {
      headerName: 'Phone number',
      width: 175,
      cellEditor: PhoneCellEditor,
      filter: 'agTextColumnFilter',
      field: 'phone',
      floatingFilterComponentParams: { suppressFilterButton: false },
      valueGetter: function (params) {
        if (params.data.phone) {
          return params.data.phone.toString();
        } else {
          return '+387xxxxxxxxx';
        }
      },
    },
    {
      headerName: 'Email',
      field: 'email',
      width: 200,
      cellEditor: EmailCellEditor,
      valueGetter: function (params) {
        if (params.data.email) {
          return params.data.email.toString();
        } else {
          return 'required@example.com';
        }
      },
    },
    {
      headerName: 'Status',
      field: 'status',
      width: 165,
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
      },
      valueGetter: function (params) {
        if (params.data.status) {
          return params.data.status;
        } else {
          return 'At work';
        }
      },
    },
    {
      headerName: 'Birth date',
      field: 'bdate',
      filter: 'agDateColumnFilter',
      // add extra parameters for the date filter
      filterParams: {
        // provide comparator function
        comparator: this.dateFilterComparator,
      },
      comparator: dateSortComparator,
      width: 200,
      cellEditor: getDatePicker(),
      valueGetter: function (params) {
        if (params.data.bdate) {
          return params.data.bdate;
        } else {
          return todaysDateString();
        }
      },
    },
    {
      headerName: 'Gender',
      field: 'gender',
      cellRenderer: 'SelectRendererComponent',
      cellEditor: 'agRichSelectCellEditor',
      cellEditorParams: {
        values: ['Male', 'Female'],
      },
      valueGetter: function (params) {
        if (params.data.gender) {
          return params.data.gender;
        } else {
          return 'Female';
        }
      },
    },
    {
      headerName: 'Hire date',
      field: 'hdate',
      filter: 'agDateColumnFilter',
      filterParams: {
        // filter comparator
        comparator: this.dateFilterComparator,
      },
      // sort comparator
      comparator: dateSortComparator,
      width: 200,
      cellEditor: 'datePicker',
      valueGetter: function (params) {
        if (params.data.hdate) {
          return params.data.hdate;
        } else {
          return todaysDateString();
        }
      },
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
      },
      valueGetter: function (params) {
        if (params.data.title) {
          return params.data.title;
        } else {
          return 'Junior Developer';
        }
      },
    },
    {
      headerName: 'Id',
      type: 'numericColumn',
      field: 'id',
      filter: 'agNumberColumnFilter',
      editable: false,
    },
    {
      headerName: 'Created',
      field: 'created',
      editable: false,
      comparator: dateSortComparator,
      valueGetter: function (params) {
        if (params.data.created) {
          return params.data.created;
        } else {
          return todaysDateString();
        }
      },
    },
    {
      headerName: 'Created by',
      field: 'createdBy',
      editable: false,
      valueGetter: function (params) {
        return 'Bakir';
      },
    },
    {
      headerName: 'Modified',
      field: 'modified',
      editable: false,
      valueGetter: function (params) {
        return 'false';
      },
    },
    {
      headerName: 'Modified by',
      field: 'modifiedBy',
      editable: false,
    },
  ];
  // TODO - put in JSON
  rowData = [
    {
      name: 'Bakir',
      l_name: 'Karović',
      phone: '+38762409970',
      email: 'bkarovic1@etf.unsa.ba',
      status: 'At work',
      bdate: '23/09/1999',
      gender: 'Male',
      hdate: '01/08/2025',
      title: 'Junior Developer',
      id: 1,
      created: '23/09/1999',
      createdBy: 'Bakir',
      modified: false,
      modifiedBy: '',
    },
    {
      name: 'Kerim',
      l_name: 'Betkasević',
      phone: '+38762412226',
      email: 'mbektasev@etf.unsa.ba',
      status: 'Holiday absence',
      bdate: '25/09/1999',
      gender: 'Male',
      hdate: '24/01/2021',
      title: 'System Designer',
      id: 2,
      created: '21/05/2020',
      createdBy: 'Bakir',
      modified: false,
      modifiedBy: '',
    },
    {
      name: 'Semra',
      l_name: 'Šabić',
      phone: '+38761598203',
      email: 'ssabic1@etf.unsa.ba',
      status: 'Business Trip',
      bdate: '02/11/2016',
      gender: 'Female',
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
      l_name: 'Baždar',
      phone: '+38761598203',
      email: 'bmwfaris@hotmail.com',
      status: 'Sickness absence',
      bdate: '13/01/2001',
      gender: 'Male',
      hdate: '27/11/2023',
      title: 'Business Analyst',
      id: 4,
      created: '21/05/2020',
      createdBy: 'Bakir',
      modified: false,
      modifiedBy: '',
    },
    {
      name: 'Darko',
      l_name: 'Randić',
      phone: '+38761598203',
      email: 'darko@zira.com',
      status: 'Maternity absence',
      bdate: '01/05/1999',
      gender: 'Male',
      hdate: '27/11/2023',
      title: 'Sales',
      id: 5,
      created: '11/05/2020',
      createdBy: 'Bakir',
      modified: false,
      modifiedBy: '',
    },
    {
      name: 'Nadir',
      l_name: 'Muratović',
      phone: '+38761598203',
      email: 'nadir@live.com',
      status: 'At work',
      bdate: '21/07/1997',
      gender: 'Male',
      hdate: '27/11/2023',
      title: 'Administration',
      id: 6,
      created: '25/05/2020',
      createdBy: 'Bakir',
      modified: false,
      modifiedBy: '',
    },
    {
      name: 'Nađa',
      l_name: 'Fejzić',
      phone: '+387601234567',
      email: 'nadja@zira.ba',
      status: 'At work',
      bdate: '03/06/1999',
      gender: 'Female',
      hdate: '11/02/2018',
      title: 'Business Analyst',
      id: 7,
      created: '24/05/2020',
      createdBy: 'Bakir',
      modified: false,
      modifiedBy: '',
    },
    {
      name: 'Ilma',
      l_name: 'Zolota',
      phone: '+387601234567',
      email: 'nadja@ius.com',
      status: 'At work',
      bdate: '27/01/1997',
      gender: 'Female',
      hdate: '29/02/2020',
      title: 'Junior Developer',
      id: 8,
      created: '23/05/2020',
      createdBy: 'Bakir',
      modified: false,
      modifiedBy: '',
    },
    {
      name: 'Ajdin',
      l_name: 'Hasanefendić',
      phone: '+387601234567',
      email: 'ajdin@fit.com',
      status: 'At work',
      bdate: '24/10/1997',
      gender: 'Male',
      hdate: '23/08/2020',
      title: 'System Designer',
      id: 9,
      created: '21/05/2020',
      createdBy: 'Bakir',
      modified: false,
      modifiedBy: '',
    },
    {
      name: 'Alem',
      l_name: 'Dinarević',
      phone: '+387601234567',
      email: 'alem@ius.com',
      status: 'At work',
      bdate: '30/03/1997',
      gender: 'Male',
      hdate: '07/07/2020',
      title: 'Senior Developer',
      id: 10,
      created: '22/05/2020',
      createdBy: 'Bakir',
      modified: false,
      modifiedBy: '',
    },
    {
      name: 'Merim',
      l_name: 'Kulovac',
      phone: '+387601234567',
      email: 'mera@etf.com',
      status: 'At work',
      bdate: '06/05/1998',
      gender: 'Male',
      hdate: '01/05/2020',
      title: 'Junior Developer',
      id: 11,
      created: '19/05/2020',
      createdBy: 'Bakir',
      modified: false,
      modifiedBy: '',
    },
  ];
  constructor() {
    this.components = { datePicker: getDatePicker() };
  }

  ngOnInit(): void {}

  public deleteSelectedRows() {
    const selectedRows = this.agGrid.api.getSelectedRows();
    this.agGrid.api.updateRowData({ remove: selectedRows });
  }

  public addRow() {
    this.agGrid.api.updateRowData({
      add: [{}],
    });
    const last = this.gridApi.getDisplayedRowCount() - 1;
    this.gridApi.setFocusedCell(last, 'name');
    this.gridApi.startEditingCell({
      rowIndex: last,
      colKey: 'name',
    });
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  dateFilterComparator(filterDate, cellValue) {
    if (!cellValue) {
      return 0;
    }

    const dateParts = cellValue.split('/');
    const day = Number(dateParts[0]);
    const month = Number(dateParts[1]) - 1;
    const year = Number(dateParts[2]);
    const cellDate = new Date(year, month, day);

    // ignore time when comparing
    filterDate.setHours(0, 0, 0, 0);
    cellDate.setHours(0, 0, 0, 0);

    if (cellDate < filterDate) {
      return -1;
    } else if (cellDate > filterDate) {
      return 1;
    } else {
      return 0;
    }
  }
}

function todaysDateString() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  return dd + '/' + mm + '/' + yyyy;
}

function dateSortComparator(date1, date2) {
  const date1Number = monthToComparableNumber(date1);
  const date2Number = monthToComparableNumber(date2);
  if (date1Number === null && date2Number === null) {
    return 0;
  }
  if (date1Number === null) {
    return -1;
  }
  if (date2Number === null) {
    return 1;
  }
  return date1Number - date2Number;
}

function monthToComparableNumber(date) {
  if (date === undefined || date === null || date.length !== 10) {
    return null;
  }
  const yearNumber = date.substring(6, 10);
  const monthNumber = date.substring(3, 5);
  const dayNumber = date.substring(0, 2);
  const result = yearNumber * 10000 + monthNumber * 100 + dayNumber;
  return result;
}
