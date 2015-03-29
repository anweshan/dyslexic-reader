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
        alert("You got selected text |" + selectedText+ "|");
    	}
    }
}

window.speechSynthesis.speak(
   new SpeechSynthesisUtterance("say something")
);