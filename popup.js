// Add bubble to the top of the page.
var bubbleDOM = document.createElement('div');
bubbleDOM.setAttribute('class', 'selection_bubble');
document.body.appendChild(bubbleDOM);

// Lets listen to mouseup DOM events.
document.addEventListener('dblclick', function (e) {
  var selection = window.getSelection().toString().trim();
  if (selection.length > 0) {

    renderBubble(e.pageX, e.pageY, selection);
  }
}, false);


// Close the bubble when we click on the screen.
document.addEventListener('mousedown', function (e) {
  bubbleDOM.style.visibility = 'hidden';
}, false);

// Move that bubble to the appropriate location.
function renderBubble(mouseX, mouseY, selection) {
  bubbleDOM.innerHTML = selection + '<img id="sound" src="http://png-5.findicons.com/files/icons/770/token_dark/256/sound.png " style="width:30px;height:30px">'+
  '<img id="test" src="http://upload.wikimedia.org/wikipedia/en/6/6f/KennyMcCormick.png" style="width:120px;height:120px">' ;

      document.getElementById("sound").onmouseover = function() {
        window.speechSynthesis.speak(new SpeechSynthesisUtterance(selection));
      };
   
	/*		document.getElementById("sound").onclick = function() {
			    
			        window.speechSynthesis.speak(new SpeechSynthesisUtterance(selection));
			     
			};
*/

  bubbleDOM.style.top = mouseY + 'px';
  bubbleDOM.style.left = mouseX + 'px';
  bubbleDOM.style.visibility = 'visible';
}


