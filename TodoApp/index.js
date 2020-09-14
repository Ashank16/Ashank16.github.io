var ul = document.getElementById('list');
var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click',addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click',removeItem);

var removeAllButton = document.getElementById('removeAll');
removeAllButton.addEventListener('click',removeAllItem);

function addItem(){
    console.log('Add button clicked');
    var input = document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list');
    var textNode = document.createTextNode(item);
    if(item === ''){
        return false;
    }
    else{
        //create li
        li = document.createElement('li');
        
        //create checkbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check');
        
        //create label
        var label = document.createElement('label');
        label.setAttribute('for', 'item');                     //optional
        
        //add these elements on web pages
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textNode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);
        setTimeout(() => {
            li.className = 'visual';
        },2);        
        input.value = '';        
    }    
}

function removeItem(){
    console.log('Remove button clicked');
    li = ul.children;
    console.log(li);
    for(let i=0;i<li.length;i++){
        while(li[i] && li[i].children[0].checked){
            ul.removeChild(li[i]);
        }
    }
}

function removeAllItem(){
    console.log('Remove All button clicked');
    li = ul.children;
    console.log(li);
    for(let i=0;i<li.length;i++){
        ul.remove();
    }
}

