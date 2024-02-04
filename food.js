let btn=document.getElementById('btn');
btn.addEventListener('click',food);
function food(e){
    let currentBtn= e.currentTarget;
    console.log(currentBtn);
    let currentInput=currentBtn.previousElementSibling;
    console.log(currentInput.value);
    let food=currentInput.value;
    let newLi= document.createElement('Li');
    newLi.className= 'list-group-item   d-flex my-1';
    newLi.innerHTML=`<h3 class="flex-grow-1">${food}</h3>
    <button class="btn btn-success"> Read</button>
    <button class="btn btn-danger  mx-1" onclick="remove(this)">Clear </button>
    `
    let parent=document.getElementById('parent');
    parent.appendChild(newLi);


}

btn.addEventListener('click',empty);
function empty(){
    document.getElementById('input').value="";

}
function remove(currelement){
    currelement.parentElement.remove()
}