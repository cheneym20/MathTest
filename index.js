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
    addDoneBtn(testNbr);
    addErrorMessage(testNbr);
    addOnClickEventListener(testNbr);
    addAnswerClass(testNbr,answer);
 }

 function subTest(level,opr){
    let testNbr = keepTrackList("addNumber");
    addMainDiv(testNbr);
    let newDiv = document.getElementById("testLevelMain"+testNbr);
    newDiv.style.display="block";
    newDiv.style.height="55px";

    let answer = addProblem(level,opr,testNbr);
    addInput(testNbr);
    addDoneBtn(testNbr);
    addErrorMessage(testNbr);
    addOnClickEventListener(testNbr);
    addAnswerClass(testNbr,answer);
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
    let operator = "";
    let operatorLiteral = "";
    let answer = 0;
    if(opr > 0) operator = "add", operatorLiteral = " + ";
    if(opr < 0) operator = "sub", operatorLiteral = " - ";
    let twoNumbers = randomMathQuestionGenerator(level, operator);
    let arr = twoNumbers.split(":");
    let problem = document.createTextNode(arr[0]+operatorLiteral+arr[1]+" = ");
    if(opr > 0) answer = parseInt(arr[0]) + parseInt(arr[1]);
    if(opr < 0) answer = parseInt(arr[0]) - parseInt(arr[1]);
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

function addDoneBtn(testNbr){
    let btnDone = document.createElement("button");
    let btnTxt = document.createTextNode("Done");
    btnDone.appendChild(btnTxt);
    btnDone.setAttribute("type","button");
    btnDone.setAttribute("class","done_button");
    btnDone.setAttribute("id","answer"+testNbr);
    //btnDone.addEventListener("click",submitAnswer);

    let mainDivBtnDone = document.getElementById("testLevelMain"+testNbr);
    mainDivBtnDone.appendChild(btnDone);
}

function addErrorMessage(testNbr){
    let errorPara = document.createElement("p");
    errorPara.setAttribute("id","errorMessage"+testNbr);
    let mainDivErrorPara = document.getElementById("testLevelMain"+testNbr);
    mainDivErrorPara.appendChild(errorPara);
}

function addOnClickEventListener(testNbr){
    document.getElementById("article").addEventListener("click", function(e){
        if(e.target && e.target.id == 'answer'+testNbr){
            let answerString = e.target.className; //Get the answer from the answer# class.
            console.log("class: "+answerString);
            let answerNumber = answerString.substring(18,20);
            console.log("answer: "+answerNumber);
            let userInput = e.target.value; //get the userinput value.
            console.log("value: "+userInput);
            submitAnswer(answerNumber,testNbr);
        }
    })
}

function addAnswerClass(testNbr,answer){
    let buttonTag = document.getElementById("answer"+testNbr);
    buttonTag.setAttribute("class","done_button answer"+answer);
}

function submitAnswer(answer, testNbr){
    let userInput = parseInt(document.getElementById("answerInput"+testNbr).value);
    if(answer == null || answer == "" || answer == "undefined"){
        alert("Use a Number");
    }
    if(isNaN(userInput)){
        alert("Add a Number");
    } else
        hideBoxWithCorrect(testNbr);
        keepTrackList("subtractNumber",testNbr);
        let result = "";
        if(answer == userInput) result = "Correct!";
        if(answer != userInput) result = "Incorrect!";
        console.log("Result: "+ result);
        resultFunc(result,testNbr);
}
 
function hideBoxWithCorrect(testNbr){
    let box = document.getElementById("testLevelMain"+testNbr);
    box.style.height = "23px";
    let children = box.children;
    for(i=0; i<children.length; i++){
        children[i].style.display = "none";
    }
}

function resultFunc(result,testNbr){
    let box = document.getElementById("testLevelMain"+testNbr);
    let newDiv = document.createElement("div");
    let newContent = document.createTextNode(result);
    newDiv.setAttribute("class","question_result");
    newDiv.appendChild(newContent);
    box.appendChild(newDiv);
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
    let number1;
    let number2;
    if(operator == "add"){
        number1 = Math.floor(Math.random() * (level * 10));
        number2 = Math.floor(Math.random() * (level * 10));
    }
    else if(operator == "sub"){
        number2 = Math.floor(Math.random() * (level * 10));
        number1 = Math.floor(Math.random() * ((level * 10) - number2) + number2);
    }

    return number1+":"+number2;
}

let problemList = [];
onload();


// function truncateString(str, num) {
//     return str.slice(num); 
//     //1.Take the incoming string "str". 
//     //2. Use the splice method use only return a certain part of the string.
//     //3. Use the incoming "num" to signify where in the splice to start splicing.  0 starts from the beginning.
//     //For example, "The dog ran".  If you splice the string with number 7, then it returns only "The dog"
//     //4.Have the function return the value by adding "return" to the line before.  Like "return..."(value)
//   }
  
//   truncateString("A-tisket a-tasket A green and yellow basket", 8);

//Slice is the same as subString!!!!!!!!!!!!!!!!!!!!!!!!!!!