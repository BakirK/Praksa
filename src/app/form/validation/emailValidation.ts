export function EmailCellEditor() {}

EmailCellEditor.prototype.init = function (params) {
  this.eGui = document.createElement('div');
  this.eGui.innerHTML = `
    <input value=${params.value} class='ag-cell ag-cell-auto-height ag-cell-value ag-cell-not-inline-editing' style='width: 200px; padding-top:40px;'  />
  `;
  this.eInput = this.eGui.querySelector('input');
  this.eInput.addEventListener('input', this.inputChanged.bind(this));
};

EmailCellEditor.prototype.inputChanged = function (event) {
  const val = event.target.value;
  if (this.isValid(val)) {
    this.eInput.classList.remove('invalid-cell');
    this.eInput.classList.add('valid-cell');
  } else {
    this.eInput.classList.remove('valid-cell');
    this.eInput.classList.add('invalid-cell');
  }
};

EmailCellEditor.prototype.isValid = function (value) {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(value).toLowerCase());
};

EmailCellEditor.prototype.getValue = function () {
  return this.eInput.value;
};

EmailCellEditor.prototype.isCancelAfterEnd = function () {
  return !this.isValid(this.eInput.value);
};

EmailCellEditor.prototype.getGui = function () {
  return this.eGui;
};

EmailCellEditor.prototype.destroy = function () {
  this.eInput.removeEventListener('input', this.inputChanged);
};
