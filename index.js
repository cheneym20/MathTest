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

function keepTrackList(addRemove, testNbr){
    if(addRemove == "addNumber"){
        if(problemList.length == 0){
            problemList.push(1);
            return 1;
        } 
        else if(problemList.length > 0){
            let newNumber = Math.max(...problemList) + 1;
            problemList.push(newNumber);
            return newNumber;
        }
        
    } else
    if(addRemove == "subtractNumber"){
        problemList.splice[problemList.indexOf(testNbr)];
        return;
    }
}

 //This function will activate the test on the main screen with the proper test level.
 function addTest(level,opr){
    let testNbr = keepTrackList("addNumber");
    addMainDiv(testNbr);
    let newDiv = document.getElementById("testLevelMain"+testNbr);
    newDiv.style.display="block";
    newDiv.style.height="55px";

    let answer = addProblem(level,opr,testNbr);
    addInput(testNbr);
    addDoneBtn(answer,testNbr);
    addErrorMessage(testNbr);
 }

 function subTest(level,opr){
    let testNbr = keepTrackList("addNumber");
    addMainDiv(testNbr);
    let newDiv = document.getElementById("testLevelMain"+testNbr);
    newDiv.style.display="block";
    newDiv.style.height="55px";

    let answer = addProblem(level,opr,testNbr);
    addInput(testNbr);
    addDoneBtn(answer,testNbr);
    addErrorMessage(testNbr);
 }

 function addMainDiv(testNbr){
     let mainDivTag = document.getElementById("testLevelMain");
     let childDivTag = document.createElement("div");
     setTimeout(function(){
        childDivTag.className += '  add_transition';
    }, 500);
     childDivTag.setAttribute("class","main_body");
     childDivTag.setAttribute("id","testLevelMain"+testNbr)
     mainDivTag.parentNode.insertBefore(childDivTag, mainDivTag.nextSibling);
 }

function addProblem(level,opr,testNbr){
    let operator = opr;
    if(opr > 0) operator = "add";
    if(opr < 0) operator = "sub";
    let twoNumbers = randomMathQuestionGenerator(level, operator);
    let arr = twoNumbers.split(":");
    let problem = document.createTextNode(arr[0]+" + "+arr[1]+" = ");
    let answer = parseInt(arr[0]) + parseInt(arr[1]);
    let tag = document.createElement("span");
    tag.appendChild(problem);
    tag.setAttribute("id","testQuestion"+testNbr);
    tag.setAttribute("class","math_question");
    tag.style.display="inline-block";
    let mainDivProb = document.getElementById("testLevelMain"+testNbr);
    mainDivProb.appendChild(tag);
    
    return answer;
}

function addInput(testNbr){
    let ansInput = document.createElement("input");
    ansInput.setAttribute("id","answerInput"+testNbr);
    let mainDivAnsInput = document.getElementById("testLevelMain"+testNbr);
    mainDivAnsInput.appendChild(ansInput);
}

function addDoneBtn(answer,testNbr){
    let btnDone = document.createElement("button");
    let btnTxt = document.createTextNode("Done");
    btnDone.appendChild(btnTxt);
    btnDone.setAttribute("type","button");
    btnDone.setAttribute("class","done_button");
    btnDone.setAttribute("id","answer"+testNbr);
    btnDone.addEventListener("click",submitAnswer);

    let mainDivBtnDone = document.getElementById("testLevelMain"+testNbr);
    mainDivBtnDone.appendChild(btnDone);
}

function addErrorMessage(testNbr){
    let errorPara = document.createElement("p");
    errorPara.setAttribute("id","errorMessage"+testNbr);
    let mainDivErrorPara = document.getElementById("testLevelMain"+testNbr);
    mainDivErrorPara.appendChild(errorPara);
}

function submitAnswer(answer, userInput){
    if(userInput != -1) userInput = parseInt(document.getElementById("answerInput").nodeValue);
    if(answer == null || answer == "" || answer == "undefined"){
        break;
    }
    if(isNaN(userInput)){
        alert("Add a Number");
    } else
    if(answer == userInput){
        hideBoxWithCorrect();
        keepTrackList("addNumber");
    }

    //let userInput = document.getElementById("answerInput").nodeValue;
}
 
function hideBoxWithCorrect(){
    document.getElementById("testLevelMain").style.height = "0px";
}

//This function will load all the proper information on the page when page loads.
 function onload(){
    document.getElementById("additionList").style.display = "none";
    document.getElementById("subtractionList").style.display = "none";

    let arrColors = ["#ffffff","#4cf03a","#e8e53a","#e8a83a","#e83a3a","#c953ed"];

    for(i=1; i<=5; i++){
        document.getElementById("addTest"+[i]).style.backgroundColor = "none";
        document.getElementById("subTest"+[i]).style.backgroundColor = "none";
        document.getElementById("addTest"+[i]).style.backgroundColor = arrColors[i];
        document.getElementById("subTest"+[i]).style.backgroundColor = arrColors[i];
    }
 }

//This function returns both the Math question String and the answer.
function randomMathQuestionGenerator(level, operator){
    let number1 = Math.floor(Math.random() * (level * 10));
    let number2;
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

let problemList = [];
onload();