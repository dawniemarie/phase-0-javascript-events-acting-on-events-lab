const dodger = document.getElementById("dodger"); //grab the dodger
dodger.style.backgroundColor="#FF69B4"; //changed color of dodger to pink

//function to move dodger to the left but not exceed left edge of game field
function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px","");
    const left = parseInt(leftNumbers,10);

    if (left>0){
        dodger.style.left = `${left - 1}px`;
    }
}
//event listener for dodger and left arrow key
document.addEventListener("keydown",function(e){
    if (e.key === "ArrowLeft"){
        moveDodgerLeft();
    }
});

//function to move dodger to the right but not exceed right edge of game field
function moveDodgerRight(){
    const newPosition = dodger.style.left.replace("px","");
    const left = parseInt(newPosition,0);

    if (left<360){
        dodger.style.left = `${left+1}px`;
    }
}
//event listener for dodger and right arrow key
document.addEventListener("keydown",function(e){
    if (e.key === "ArrowRight"){
        moveDodgerRight();
    }
});
