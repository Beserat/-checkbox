var valueList = document.getElementsById('valueList');
var text = '<span> you have selected : </span>';
var listArray = [];

var checkboxes = document.querySelectorAll('.checkbox');

for(var checkbox of checkboxes){
  if(this.checked == true){
    listArray.push(this.value);
    valueList.innerHTML = text = text + listArray.join(' /');
  } else{
    listArray = listArray.filter(e => e !== this.value);
    valueList.innerHTML = text + listArray.join(' / ');
  }
}