function VowelCount(str) { 
  return str.match(/[aioueAIOUE]+/g).join('').length;      
}
VowelCount(readline());           
