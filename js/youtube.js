window.addEventListener("PassToBackground", function (evt) {
    chrome.runtime.sendMessage({greeting: null, url: event.detail});
}, false);

function pause() {

}

function close() {

}

function main() {
    if(!document.getElementsByClassName("title")[0].innerHTML.includes("PassToBackground")){
    document.getElementsByClassName("title")[0].innerHTML = document.getElementsByClassName("title")[0].innerHTML + `<button style='  background-color: green;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;' onclick="
    var message = document.location.href; var event = new CustomEvent('PassToBackground', {detail: message}); window.dispatchEvent(event);">Start</button>` + `<button style='  background-color: black;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;' onclick="
    var message = 'pause'; var event = new CustomEvent('PassToBackground', {detail: message}); window.dispatchEvent(event);">Play/Pause</button>` + `<button style='  background-color: purple;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;' onclick="
    var message = 'full'; var event = new CustomEvent('PassToBackground', {detail: message}); window.dispatchEvent(event);">Fullscreen</button>` + `<button style='  background-color: red;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;' onclick="
    var message = 'clear'; var event = new CustomEvent('PassToBackground', {detail: message}); window.dispatchEvent(event);">Clear</button>` }
}
function playlist(){
    elms = document.getElementsByClassName("style-scope ytd-playlist-video-list-renderer") 
    for(i = 1; i < elms.length; i++){
        console.log(elms)
     

        elms[i].children[1].style = "width:200px"
        elms[i].children[1].innerHTML =  `<button style='  background-color: green;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;' onclick="
        var message = '`+elms[i].children[2].children[0].href.substr(0,43)+`'; var event = new CustomEvent('PassToBackground', {detail: message}); window.dispatchEvent(event);">Start</button>` + `<button style='  background-color: black;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;' onclick="
        var message = 'pause'; var event = new CustomEvent('PassToBackground', {detail: message}); window.dispatchEvent(event);">Play/Pause</button>` + `<button style='  background-color: purple;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;' onclick="
        var message = 'full'; var event = new CustomEvent('PassToBackground', {detail: message}); window.dispatchEvent(event);">Fullscreen</button>` + `<button style='  background-color: red;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;' onclick="
        var message = 'clear'; var event = new CustomEvent('PassToBackground', {detail: message}); window.dispatchEvent(event);">Clear</button>`
    }
}
function afterNavigate() {
    if ('/watch' === location.pathname) {
        main()
    }
    if ('/playlist' === location.pathname) {
        playlist()
        console("oi")
    }
    if(location.pathname.substring(0,location.pathname.length - 12)){
        document.documentElement.requestFullscreen();
    }
}
(document.body || document.documentElement).addEventListener('transitionend',
    function ( /*TransitionEvent*/ event) {
        if (event.propertyName === 'width' && event.target.id === 'progress') {
            afterNavigate();
        }
    }, true);
// After page load
setInterval(main, 1000);
playlist();

