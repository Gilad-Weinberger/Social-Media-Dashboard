var whatMode = 1

function changeMode(){
    whatMode += 1;
    if (whatMode % 2 == 0){
        document.querySelector("link[href='style-light.css']").href = "style-dark.css";
    }
    else{
        document.querySelector("link[href='style-dark.css']").href = "style-light.css";
    }
}