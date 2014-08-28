var Ghost = function() {
  var colors = ['white', 'yellow', 'purple', 'red'];
  this.color = shuffle((colors))[0];
};

function shuffle(o) {
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

