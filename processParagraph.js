function determineTag(p){
  var tag_number = 0
    for (var i = 0; p[i] === "%";i++){
      tag_number += 1;
    }
  return tag_number
}

function replaceTags(p,tagNumber){
  var type  = "h" + tagNumber;
  var content = p.slice(tagNumber,p.length)
  return [content,type];
}


function processParagraph(p){
  if (p[0] === "%")
  {
    var tagNumber = determineTag(p);
    return(replaceTags(p,tagNumber))
  }

  else{
    var type = "p";
    var content = p;
    return ([content,type])
  }
}
//Only returns content not tags
//temporarily array for viewing in browser
console.log(processParagraph("%%%Oy mate welcome"));

