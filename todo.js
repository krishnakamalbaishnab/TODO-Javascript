var addButton = document.getElementById('add');
addButton.addEventListener('click',addItem)

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click',removeItem)



function addItem(){
    console.log('Add button clicked');
}

function removeItem(){
    console.log('Delete button clicked');
}
