//Javascript First Trial//

/* =============================
This script generates sample text for the body content. 
You can remove this script and any reference to it. 
 ============================= */

 //This button will show or unshow the addition list when the user clicks on the button.
 function showAddList(){
    console.log("showListSub");
    whichList("add");
    
 }

 //This button will show or unshow the subtraction list when the user clicks on the button.
 function showSubList(){
    whichList("sub");
 }

//Base showlist function to show or unshow list.
 function whichList(opr){
    console.log("opr: "+opr);
    let testType = "";
    if(opr == "add"){
        testType = "additionList";
        console.log("addition: "+testType);
        showList(testType);
    }
    else if(opr == "sub"){
        testType = "subtractionList";
        console.log("subtraction: "+testType);
        showList(testType)
    }
 }

 function showList(type){
    console.log("type: "+type);
    let listShowing = document.getElementById(type).style.display;
    console.log("listShowing: "+listShowing);
    if(listShowing == "none"){
        document.getElementById(type).style.display="block";
    }
    else if(listShowing == "block"){
        document.getElementById(type).style.display="none";
    }
    
 }

 //This function will activate the test on the main screen with the proper test level.
 function addTest(level){
     console.log("level: "+level);
    document.getElementById(testLevelMain).style.display="block";
 }

//This function will load all the proper information on the page when page loads.
 function onload(){

 }

//This function returns both the Math question String and the answer.
function randomMathQuestionGenerator(){

}