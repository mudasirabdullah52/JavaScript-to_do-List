var form = document.getElementById('addForm');
var itemList = document.getElementById('items');


// form submit event
form.addEventListener('submit', addItem);


function addItem(e) {
    e.preventDefault();

    const todoName = document.getElementById('item').value;
    const description = document.getElementById('item2').value;

    // Create new li element

    var li = document.createElement('li');

    // add class to the list
    li.className = 'list-group-item'

    // apppend the text node with input value
    li.appendChild(document.createTextNode(todoName + ' '));
    li.appendChild(document.createTextNode(description));

    // Creatie the Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'))
    li.appendChild(deleteBtn)

    // CREATE THE EDIT BUTTON
    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-primary btn-sm float-right edit';

    editBtn.appendChild(document.createTextNode('check'));
    li.appendChild(editBtn);

    // append li element to itemList

    itemList.appendChild(li);

    deleteBtn.onclick = () => {

        li.remove()
    }
    editBtn.onclick = () => {
        var itemList2 = document.getElementById("secondlist")
        const newli = li;
        li.remove();
        console.log(newli)
        itemList2.appendChild(newli);

    }
    console.log(li);
}