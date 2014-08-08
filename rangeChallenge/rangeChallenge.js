function range(start, end, step) {
  var settings = generateSettings(start, end, step, arguments);
  return generateRange(settings);
}

function generateRange(settings) {
  rangeValues = [];
  if (settings.step == 0)
    return duplicativeArray(rangeValues, settings);
  else
    return nonDuplicativeArray(rangeValues, settings);
}

function nonDuplicativeArray(rangeValues, settings) {
  for (var i = settings.start; i < settings.end; i += settings.step) {
    rangeValues.push(i);
  }
  return rangeValues;
}

function duplicativeArray(rangeValues, settings) {
  for (var i = settings.start; i < settings.end; i++) {
    rangeValues.push(settings.start);
  }
  return rangeValues;
}

function generateSettings(start, end, step, arguments) {
    var settings = initializeSettings(start, end, step);

    if (arguments.length == 1) {
    settings.end = start;
    settings.start = 0;
    settings.step = 1;
  }
  else if (arguments.length == 2) {
    settings.step = 1;
  }
  return settings;
}

function initializeSettings(start, end, step) {
  settings = {};
  settings.start = start;
  settings.end = end;
  settings.step = step;
  return settings;
}

