var removeIMG = document.createElement("img");
removeIMG.src = 'Images/ex1.png';
var completeIMG = document.createElement("img");
completeIMG.src = 'Images/checkk.png';

//user clicked on add button
//if there is any text in item field, add text to todo list
document.getElementById('add').addEventListener('click', function() {
  var value = document.getElementById('item').value;
  if (value) {
    addItemTodo(value);
    document.getElementById('item').value = "";
}

});

function removeItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;

  parent.removeChild(item);

}

function completeItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  var id = parent.id;

  var target = (id ==='todo') ? document.getElementById('completed'):document.getElementById('todo');

  parent.removeChild(item);
  target.insertBefore(item, target.childNodes[0]);
}

function addItemTodo(text) {

  var removeIMG = document.createElement("img");
  removeIMG.src = 'Images/ex1.png';
  var completeIMG = document.createElement("img");
  completeIMG.src = 'Images/checkk.png';

  var list = document.getElementById('todo');

  var item = document.createElement('li');
  item.innerText = text;

  var buttons = document.createElement('div');
  buttons.classList.add('buttons');

  var remove = document.createElement('button');
  remove.classList.add('remove');
  remove.appendChild(removeIMG);

  remove.addEventListener('click', removeItem);

  var complete = document.createElement('button');
  complete.classList.add('complete');
  complete.appendChild(completeIMG);

  complete.addEventListener('click', completeItem);


  buttons.appendChild(remove);
  buttons.appendChild(complete);
  item.appendChild(buttons);

  list.insertBefore(item, list.childNodes[0])
  ;
}
