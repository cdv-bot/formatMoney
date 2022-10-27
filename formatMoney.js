const handleChange = e=> {
    const value =  String(e);
    const regex = /[0-9|.]/g;
    const arrString = value.split('').filter(Boolean);
    const indexFist = arrString.findIndex(item => item === '.');
    if (indexFist === 0) arrString.splice(indexFist, 1);

    const beforePoint = arrString.splice(0, indexFist + 1).join('');
    const afterPoint = arrString.filter(item => item !== '.').join('');

    const valueValidatePoint = beforePoint + afterPoint;
    const valueRegex = valueValidatePoint.match(regex);

    const valueValidateNumber = valueRegex ? valueRegex.join('') : '';
    const decimal = valueValidateNumber.match(/\.\d*/g) || '';

    const stringDecimal = decimal ? decimal.join('').slice(0, 15) : '';

    const valueFormat =
      valueValidateNumber
        .replace(/\.\d*/g, '')
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$&,') + stringDecimal;

    const valueInputFormat = valueRegex && valueFormat;
  return valueInputFormat;
  };
  handleChange("1212.12")
