var inputText = document.querySelector("#input-text")
var translateBtn = document.querySelector("#translate-btn")
var outputText = document.querySelector("#output-text")
var errorMsg = document.querySelector(".error-msg")

// var serverurl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverurl ="https://api.funtranslations.com/translate/minion.json"

function  urlAdd(inputText){
    return serverurl +"?"+"text="+ inputText
}



translateBtn.addEventListener("click",function(){
   
    if( inputText.value === "" ){
        outputText.innerText = ""
        errorMsg.style.display = "block"
        outputText.style.border = "none"
        errorMsg.innerText = "please type text what you want to translate"
       
    }else{
        errorMsg.style.display = "none"
        inputText.style.color  = "rgb(100, 100, 100)"
        outputText.style.border = "2px solid rgba(34, 34, 194, 0.815)"
        textdisplaying()
    }

})



function textdisplaying(){
    var translatingMessage = inputText.value;
 
    fetch(urlAdd(translatingMessage))
    .then(response => response.json())
    .then(json => {
        var translateText = json.contents.translated;
        outputText.innerText = translateText;
        outputText.scrollIntoView()
    })
    .catch(() => outputText.innerText = "Some error Occured (limit exceeded for fetch requests)")
}

// console.log(urlAdd)
