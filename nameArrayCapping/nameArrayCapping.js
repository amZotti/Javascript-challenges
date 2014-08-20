function capMe(names) {
  return names.map(function(name) {
    return name[0].toUpperCase() + name.substr(1).toLowerCase();
  });
}
