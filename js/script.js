


const btnInput = document.getElementById('btn-input');
btnInput.addEventListener('click', function(){
  const name = document.getElementById('input').value;
  //alert('Nell\'input c\'è scritto: ' + name);
  document.getElementById('output-name').innerHTML = name;

  //resetto i lvalue dell'input
  document.getElementById('input').value = '';
});