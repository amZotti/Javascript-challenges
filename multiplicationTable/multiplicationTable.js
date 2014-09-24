multiplicationTable = function(size) {
  var rows = createBlankRows(size);
  rows.forEach(function(row) {
    for (var i = 1;i < size;i++) {
      if (row.length < size) {
        row.push(row[0] * rows[0][i]);
      }
    }
  });
  return rows;
}

function createBlankRows(size) {
  var rows = [];
  var firstRow = [];
  for (var i = 1;i <= size;i++) {
    firstRow.push(i);
    rows.push([i]);
  }
  rows.shift(0);
  rows.unshift(firstRow);
  return rows;
}
