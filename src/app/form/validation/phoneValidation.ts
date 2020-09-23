export function PhoneCellEditor() {}

PhoneCellEditor.prototype.init = function (params) {
  this.eGui = document.createElement('div');
  this.eGui.innerHTML = `
    <input value=${params.value} class='ag-cell ag-cell-auto-height ag-cell-value ag-cell-not-inline-editing' style='width: 150px; padding-top:40px;'  />
  `;
  this.eInput = this.eGui.querySelector('input');
  this.eInput.addEventListener('input', this.inputChanged.bind(this));
};

PhoneCellEditor.prototype.inputChanged = function (event) {
  const val = event.target.value;
  if (this.isValid(val)) {
    this.eInput.classList.remove('invalid-cell');
    this.eInput.classList.add('valid-cell');
  } else {
    this.eInput.classList.remove('valid-cell');
    this.eInput.classList.add('invalid-cell');
  }
};

PhoneCellEditor.prototype.isValid = function (value) {
  const regex = /^(\+387\d{8}(?:\d{1})?)$/;
  return regex.test(String(value).toLowerCase());
};

PhoneCellEditor.prototype.getValue = function () {
  return this.eInput.value;
};

PhoneCellEditor.prototype.isCancelAfterEnd = function () {
  return !this.isValid(this.eInput.value);
};

PhoneCellEditor.prototype.getGui = function () {
  return this.eGui;
};

PhoneCellEditor.prototype.destroy = function () {
  this.eInput.removeEventListener('input', this.inputChanged);
};
