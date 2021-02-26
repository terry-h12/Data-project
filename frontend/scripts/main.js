var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})


let save_btn = document.getElementsByClassName('save');


function table_append(){
  let table_ref = document.getElementById('entTable');
  let new_row = table_ref.insertRow(table_ref.rows.length);
  new_row.innerHTML = document.getElementById('name');
}
