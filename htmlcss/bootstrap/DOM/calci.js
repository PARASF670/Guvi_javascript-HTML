console.log('start');
var container = document.createElement('div');
container.className = "container";
var card = document.createElement('div');
card.className = "card ";
card.style.marginLeft = 'auto';
card.style.marginRight = 'auto';
card.style.marginTop = '80px';
card.style.boxShadow = "0px 1px 8px 0px";
card.style.maxWidth = '232px';
card.style.maxHeight = '500px';
var card_header = document.createElement('div');
card_header.className = "card-header text-center";
card_header.style.backgroundColor = 'rgb(221,220,220)';
var output_label = document.createElement('label');
output_label.id = "output";
output_label.style.maxWidth = "205px";
output_label.innerText = "";
var input = document.createElement('input');
input.setAttribute("type", "text");
input.id = 'input1';
card_header.append(output_label, input);
var cardbody = document.createElement('div');
cardbody.className = "card-body";
cardbody.style.backgroundColor = 'rgb(221,220,220)';
Button('7','#343A40','white');
Button('8','#343A40','white');
Button('9','#343A40','white');
Button('+', 'orange', '#343A40');
Button('4','#343A40','white');
Button('5','#343A40','white');
Button('6','#343A40','white');
Button('-', 'orange', '#343A40');
Button('1','#343A40','white');
Button('2','#343A40','white');
Button('3','#343A40','white');
Button('*', 'orange', '#343A40');
Button('C','#DC3545','white');
Button('0','#343A40','white');
Button('=','#28A745','white');
Button('/','orange','#343A40');

function Button(data,bcolor,btext) {
var b = document.createElement("button");
    b.innerText = data;
    b.style.borderRadius = '50%';
    b.style.border = "none";
    b.style.backgroundColor = bcolor;
    b.style.color = btext;
    b.style.width = '35px';
    b.style.height = '35px';
    b.style.marginRight = "12px";
    b.style.marginBottom = "10px";
    b.id = data;
    b.onmouseover = function () {
        b.style.opacity = "0.5";
    }
    b.onmouseleave = function () {
        b.style.opacity = "1";
    }
    
    if (data !== '=' && data !=='C') {
        b.addEventListener('click', function () {
            document.getElementById('output').innerText  = document.getElementById('output').innerText + data;
        })
    }
    if (data == 'C') {
        b.addEventListener('click', function () {
            document.getElementById('output').innerText = " ";
            document.getElementById('input1').value = " ";
        })
    }
    if (data == '=') {
        b.addEventListener('click', function () {
            fvalue = document.getElementById('output').innerText;
            document.getElementById('input1').value = eval(fvalue);    
        })
    }
  
    cardbody.append(b);
}




card.append(card_header, cardbody);
container.append(card);
document.body.append(container);