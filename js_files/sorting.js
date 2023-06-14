function swap(el1,el2){ 
    // swap function for sorting algorithm
    console.log('In swap');
    let temp = el1.style.height;
    el1.style.height= el2.style.height;
    el2.style.height = temp;
}
//disable sorting function
function disableSortingBtn(){
    document.querySelector(".bubbleSort").disabled=true;
    // document.querySelector(".selectionSort").disabled=true;
    // document.querySelector(".insertionSort").disabled=true;
    // document.querySelector(".quickSort").disabled=true;
    // document.querySelector(".mergeSort").disabled=true;
}
//enable sorting function
function enableSortingBtn(){
    document.querySelector(".bubbleSort").disabled=false;
    // document.querySelector(".selectionSort").disabled=false;
    // document.querySelector(".insertionSort").disabled=false;
    // document.querySelector(".quickSort").disabled=false;
    // document.querySelector(".mergeSort").disabled=false;

}
// disable sizeslider
function disableSizeSlider(){  
    // dynamic radio button 
    document.querySelector("#arr_sz").disable=true; 
}
// enable sizeslider
function enableSizeSlider(){
    document.querySelector("#arr_sz").disable=false; 
}
//disable newarray
function disableNewArrayBtn(){
    document.querySelector(".newArray").disable=true; 
}

//enable newarray
function enableNewArrayBtn(){
    document.querySelector("#arr_sz").disable=false; 
}

//use of animation for sorting
function waitforme(milisec){
    return new Promise(resolve=>{
        setTimeout(() =>{ resolve('')} , milisec);

    })
}

// selecting sizeslider from dom
let arraySize =document.querySelector('#arr_sz');

//event listener to update the bars
arraySize.addEventListener('input', function(){
    console.log(arraySize.value, typeof(arraySize.val));
    createNewArray(parseInt(arraySize.value));
});

//default input for wait forme function(260ms)
let delay = 260;

// selecting speed slider frome dom
let delayElement = document.querySelector('#speed_input');

// event space listener to update delay time
delayElement.addEventListener('input',function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay= 320 - parseInt(delayElement.value);
});

// creating array to store randomly generated numbers
let array=[];

// call to display bars when you visited the site
createNewArray();

// to create new array input size of array
function createNewArray(numberOfBars=60){
    // calling helper function to delete old bars from dom
    deleteChild();
    // creating an array of randon numbers
    array=[];
    for(let i=0; i<numberOfBars;i++){
        array.push(Math.floor(Math.random() * 250)+1);
    }
    console.log(array);
// select the div #bars element
const bars= document.querySelector("#bars");
// create multiple element div using loop and adding class 'bars space col'
for(let i=0;i<numberOfBars;i++){
    const bar = document.createElement("div");
    bar.style.height = `${array[i]*2}px`;
    bar.classList.add('bar');
    bar.classList.add('flex-item');
    bar.classList.add(`barNo${i}`);
    bars.appendChild(bar);
}
}
// helper function to delete all the previous bar so that new can be created added
function deleteChild(){
    const bar=document.querySelector("#bars");
    bar.innerHTML='';
}

// selecting new array button from dom and adding even listener
const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function(){
    console.log("From newArray" + arraySize.val);
    console.log("From newArray" + delay);
    enableSortingBtn;
    enableSizeSlider;
    createNewArray(arraySize.val);
});