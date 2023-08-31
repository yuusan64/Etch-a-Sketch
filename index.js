function grid(num){
var container=document.getElementById('container');
var grid = document.createElement('div');
grid.className = 'grid';
grid.id='gridId';

let index=0;

for(let i=0;i<num;i++){
  let columnElement=document.createElement('div');
  columnElement.className="column";
  columnElement.id="columnId";
  for(let j=0;j<num;j++){
    let rowElement=document.createElement('div');
    rowElement.className="row";
    rowElement.id=index;
    columnElement.appendChild(rowElement)
    index++;
 }
 grid.appendChild(columnElement);
}
document.body.appendChild(grid);
container.appendChild(grid);
document.body.appendChild(container);
}

function changeColor() {
const element = Array.from(document.getElementsByClassName("row"));
element.forEach(colorButton => colorButton.addEventListener('mouseover', buttonHover));
element.forEach(colorButton => colorButton.addEventListener('mouseout', buttonStandard));
}

function buttonStandard() {
  this.style.backgroundColor = 'salmon';
}

function buttonHover() {
  this.style.backgroundColor = 'violet';
}


function gridSize(){
var a=prompt("Enter grid dimension from 1-100");
grid(a);
changeColor();
}


const btn=document.getElementById('btn');

btn.addEventListener('click', ()=>{

btn.style.display='none';
});

