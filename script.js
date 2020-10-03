document.body.onload = loadApp;
function loadApp() {
    var app = document.getElementById("app");
    app.innerHTML = page.create();
    page.setBackgroundImage();
    page.addEventHandlers();
}
var page = {
    create: function () {
        return ("\n            <img id=\"backgroundImg\"></img>\n            <div id=\"spinnerHolder\"><img id=\"spinner\" src=\"https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e471rg1w4iot45hb8537piyun4xtfq7tv4yv4qqrq3r&rid=giphy.gif\"></img></div>\n            <div id=\"pageHolder\">\n                <div id=\"outerFrame\">\n                    <div id=\"magicButton3\">\n                        <div id=\"magicButton2\">\n                            <div id=\"magicButton1\">\n                                " + appData.buttons[1].icon + "\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <img id=\"appBtn\" src='./src/img/startBtn.png'></img>\n                </div>\n            </div>\n            ");
    },
    setBackgroundImage: function () {
        var width = window.screen.width;
        var height = window.screen.height;
        var img = document.getElementById("backgroundImg");
        img.addEventListener("load", eventHandlers.onBackgroundLoaded);
        img.setAttribute("src", "https://picsum.photos/" + width + "/" + height);
    },
    addEventHandlers: function () {
        document.getElementById("magicButton3").addEventListener("click", function (e) { eventHandlers.onButtonClickedEventHandler(e); });
    }
};
var appData = {
    buttons: {
        1: {
            icon: "Y",
            header: "Yellow Button",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus recusandae atque non ipsum repudiandae excepturi, praesentium libero perspiciatis cumque magnam rerum ratione molestias laborum voluptas repellendus eum, optio laudantium itaque quasi eos, commodi sit ad iure magni. Distinctio itaque, consequuntur culpa dicta fugiat fugit vitae.",
            open: false
        },
        2: {
            icon: "B",
            header: "Blue Button",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus recusandae atque non ipsum repudiandae excepturi, praesentium libero perspiciatis cumque magnam rerum ratione molestias laborum voluptas repellendus eum, optio laudantium itaque quasi eos, commodi sit ad iure magni. Distinctio itaque, consequuntur culpa dicta fugiat fugit vitae.",
            open: false
        }
    }
};
var eventHandlers = {
    onBackgroundLoaded: function () {
        document.getElementById("spinner").setAttribute("class", "hide");
        document.getElementById("backgroundImg").setAttribute("class", "show");
        setTimeout(function () { document.getElementById("appBtn").setAttribute("class", "show"); }, 600);
        document.getElementById("spinner").remove();
        document.getElementById("spinnerHolder").remove();
    },
    onButtonClickedEventHandler: function (e) {
        var button = {};
        Object.keys(appData.buttons).forEach(function (key) {
            if (appData.buttons[key].icon === e.target.innerText) {
                button = appData.buttons[key];
            }
        });
        page.openButton(button);
        button["open"] = true;
        alert(e.target.innerText);
        alert(button.icon);
    }
};
