function processParagraphs(p){
  var header = 0;
  while (p[0] == "%"){
    header += 1;
    p = p.slice(1);
  }
  return {type: (header == 0? "p" : "h" + header), content: p};
}
