window.addEventListener("dblclick", function(event) {


    alertWithText()});



function getSelectedText() {
    var text = "";
    if (typeof window.getSelection != "undefined") {
        text = window.getSelection().toString();
    } else if (typeof document.selection != "undefined" && document.selection.type == "Text") {
      text = document.selection.createRange().text;
    }
    return text;
}

function alertWithText() {
    var selectedText = getSelectedText().trim();
    if (selectedText) {
        if (selectedText!=""){
            initHover(selectedText);
            //alert("You got selected text |" + selectedText+ "|");
            //window.speechSynthesis.speak(
        //new SpeechSynthesisUtterance(selectedText)
//);
        }
    }
}

function initHover(displaytext) {
$('body')
       .append('<div id="myLink"></div>');
    $('#myLink')
        .append(displaytext);
}

 $(document).ready(function(){
        $('#myLink').Slide_Label($("<div id='previewA' style='width: 150px; text-align: center'><img src='mingchoi.na.png' width='128' height='128' /><div id='myWords'> This is a Slide Label which made of div element, you can add any HTML5 element like text, photo, music and video inside.</div></div>"));
        $('#myLink2').Slide_Label($('<div>', {id: 'previewB', style: 'width: 150px'}).append($('<h4>(ノﾟ∀ﾟ)ノ⌒☆</h4>')));
      });

