//call window object speech recognition...

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

var recognition = new SpeechRecognition(); //creating a constructor and referencing it.
//creating new html element through javascript 
var p = document.createElement('p');
//appending it inside the div so the p will come when ever you speak we can write through javascript
var words = document.getElementById("words");
words.appendChild(p);
console.log(words);

//take recognition and add event listner
//addeventlistner is a dom method to listen to events(it can be any).
//call one event called results,results is coming from speech recognition object and then use one call back function
//e means event, e is holding all window speech recognition objects..
//results is transferring all data to parameter e.
recognition.addEventListener("result",e=>{
    // console.log(e.results); printing the bottom

//     SpeechRecognitionResultList {0: SpeechRecognitionResult, length: 1}
// 0: SpeechRecognitionResult
// 0: SpeechRecognitionAlternative
// confidence: 0.7388947606086731
// transcript: "please tell me a work a"
// __proto__: SpeechRecognitionAlternative
// isFinal: true
// length: 1
// __proto__: SpeechRecognitionResult
// length: 1
// __proto__: SpeechRecognitionResultList
    //looping multiple times to get into the object looping to get into the layer of speechrecognition

    var transcript = [...e.results]  
    .map(result => result[0])  
    .map(result => result.transcript)
    .join("");
    // p.innerHTML= transcript;
    if(e.results[0].isFinal){
        p=document.createElement('p');//whenever it stops it keeps on generating p's
        words.appendChild(p);
        p.innerHTML = transcript;
    }
});
recognition.addEventListener('end',recognition.start)
//starting speechRecognition...
recognition.start();


