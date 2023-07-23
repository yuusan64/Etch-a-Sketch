
function grid(num1,num2){
var grid = document.createElement('div');
grid.className = 'grid';
grid.id='gridId';
let index=0;
for(let i=0;i<num1;i++){
  let columnElement=document.createElement('div');
  columnElement.className="column";
  columnElement.id="columnId";
  for(let j=0;j<num2;j++){
    let rowElement=document.createElement('div');
    rowElement.className="row";
    rowElement.id=index;
    columnElement.appendChild(rowElement)
    index++;
 }
 grid.appendChild(columnElement);
}
document.body.appendChild(grid);
}

function changeColor() {
    const element = Array.from(document.getElementsByClassName("row"));
    console.log(element.length);
    let j=0;
    element.forEach(colorButton => colorButton.addEventListener('mouseover', buttonHover));
element.forEach(colorButton => colorButton.addEventListener('mouseout', buttonStandard));
  }

    /*for(let i=0;i<element.length;i++){
      element[i].addEventListener('mouseover', buttonHover);
      element[i].addEventListener('mouseout', buttonStandard);

    element[i].addEventListener("mouseover", function onClick(event) {
      event.target.style.backgroundColor = 'salmon';
    });
    element[j].addEventListener("mouseout", function onClick(event) {
      event.target.style.backgroundColor = 'violet';
    });
    j++;
  }*/

function buttonStandard() {
  this.style.backgroundColor = 'salmon';
}

function buttonHover() {
  this.style.backgroundColor = 'violet';
}


grid(8,8)
changeColor()
