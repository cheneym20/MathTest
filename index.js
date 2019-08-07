//Javascript First Trial//

/* =============================
This script generates sample text for the body content. 
You can remove this script and any reference to it. 
 ============================= */

 //This button will show or unshow the addition list when the user clicks on the button.
 function showAddList(){
    whichList("add");
    
 }

 //This button will show or unshow the subtraction list when the user clicks on the button.
 function showSubList(){
    whichList("sub");
 }

//Base showlist function to show or unshow list.
 function whichList(opr){
    let testType = "";
    if(opr == "add"){
        testType = "additionList";
        showList(testType);
    }
    else if(opr == "sub"){
        testType = "subtractionList";
        showList(testType)
    }
 }


 function showList(type){
    let listShowing = document.getElementById(type).style.display;
    if(listShowing == "none"){
        document.getElementById(type).style.display="block";
    }
    else if(listShowing == "block"){
        document.getElementById(type).style.display="none";
    }
 }

 //This function will activate the test on the main screen with the proper test level.
 function addTest(level,opr){
     document.getElementById("testLevelMain").style.display="block";

    let answer = addProblem(level,opr);
    addInput();
    addDoneBtn();
    addErrorMessage();
 }

 function subTest(level,opr){
    document.getElementById("testLevelMain").style.display="block";

    let answer = addProblem(level,opr);
    addInput();
    addDoneBtn();
    addErrorMessage();
 }

function addProblem(level,opr){
    let operator = opr;
    if(opr > 0) operator = "add";
    if(opr < 0) operator = "sub";
    let twoNumbers = randomMathQuestionGenerator(level, operator);
    let arr = twoNumbers.split(":");
    let problem = document.createTextNode(arr[0]+" + "+arr[1]+" = ");
    let answer = parseInt(arr[0]) + parseInt(arr[1]);
    let tag = document.createElement("span");
    tag.appendChild(problem);
    tag.setAttribute("id","testQuestion");
    tag.setAttribute("class","math_question");
    let mainDivProb = document.getElementById("testLevelMain");
    mainDivProb.appendChild(tag);
    return answer;
}

function addInput(){
    let ansInput = document.createElement("input");
    ansInput.setAttribute("id","answerInput");
    let mainDivAnsInput = document.getElementById("testLevelMain");
    mainDivAnsInput.appendChild(ansInput);
}

function addDoneBtn(){
    let btnDone = document.createElement("button");
    let btnTxt = document.createTextNode("Done");
    btnDone.appendChild(btnTxt);
    btnDone.setAttribute("class","done_button");
    btnDone.setAttribute("id","answer");
    let mainDivBtnDone = document.getElementById("testLevelMain");
    mainDivBtnDone.appendChild(btnDone);
    document.getElementById("answer").addEventListener("click",submitAnswer());
}

function addErrorMessage(){
    let errorPara = document.createElement("p");
    errorPara.setAttribute("id","errorMessage");
    let mainDivErrorPara = document.getElementById("testLevelMain");
    mainDivErrorPara.appendChild(errorPara);
}

function submitAnswer(){

}

function trackTestResults(){

}
 
//This function will load all the proper information on the page when page loads.
 function onload(){
    document.getElementById("additionList").style.display = "none";
    document.getElementById("subtractionList").style.display = "none";

    let arrColors = ["#ffffff","#4cf03a","#e8e53a","#e8a83a","#e83a3a","#8a2424"];

    for(i=1; i<=5; i++){
        document.getElementById("addTest"+[i]).style.backgroundColor = "none";
        document.getElementById("subTest"+[i]).style.backgroundColor = "none";
        document.getElementById("addTest"+[i]).style.backgroundColor = arrColors[i];
        document.getElementById("addTest"+[i]).style.backgroundColor = arrColors[i];
    }
 }

//This function returns both the Math question String and the answer.
function randomMathQuestionGenerator(level, operator){
    console.log("operator: "+operator);
    let number1 = Math.floor(Math.random() * (level * 10));
    let number2;
    console.log("number2: "+number2);
    if(operator == "add"){
        number2 = Math.floor(Math.random() * (level * 10));
    }
    else if(operator == "sub"){
        number2 = Math.floor(Math.random() * (level * 10));
        for(i=number2; i<number1; i--){
            if(i >= number1){
                number2 = i;
            }
            else{
                i--;
            }
        }
    }

    let opr = " + ";
    if(operator == "sub") opr = " - "; 
    return number1+":"+number2;
}

function randomMathQuestionGeneratorAnswer(){

}

onload();