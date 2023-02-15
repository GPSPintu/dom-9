var filter=document.getElementById('filter');
filter.addEventListener('keyup', addfilter);
function addfilter(e){
    e.preventDefault();
    var text=e.target.value.toLowerCase();
    
    var itemList=document.getElementById('items');
    var items=(itemList.getElementsByTagName('li'));
   
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
       
        if(itemName.toLowerCase().indexOf(text)!=-1)
        {
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    })
}

var form=document.getElementById('addForm');
var itemlist=document.getElementById('items');

form.addEventListener('submit', addtext)
function addtext(e){
    e.preventDefault();
     
    var item=document.getElementById('item').value;
    var disc=document.getElementById('description').value;

   var addli=document.createElement('li');
   addli.className='list-group-item';
   addli.appendChild(document.createTextNode(item+" "+disc));
   //addli.appendChild(document.createTextNode(item));
   //addli.appendChild(document.createTextNode(' '+disc));
    itemlist.appendChild(addli);
}