var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
document.body.onload = loadApp;
function loadApp() {
    var app = document.getElementById("app");
    app.innerHTML = page.create();
    page.setBackgroundImage();
    page.addEventHandlers();
}
var page = {
    create: function () {
        return ("\n            <img id=\"backgroundImg\"></img>\n            <div id=\"spinnerHolder\"><img id=\"spinner\" src=\"https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e471rg1w4iot45hb8537piyun4xtfq7tv4yv4qqrq3r&rid=giphy.gif\"></img></div>\n            <div id=\"pageHolder\">\n                \n                    <div id=\"outerFrame\">\n                        <div id=\"header\">\n                            <div id=\"appBtns\" src='./src/img/startBtn.png'>\n                                <div class=\"button\" id=\"magicButton1-3\">\n                                    <div id=\"magicButton1-2\">\n                                        <div id=\"magicButton1-1\">\n                                            <h2 class=\"btnHeader\">\n                                                " + appData.buttons[1].icon + "\n                                            </h2>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"button\" id=\"magicButton2-3\">\n                                    <div id=\"magicButton2-2\">\n                                        <div id=\"magicButton2-1\">\n                                            <h2 class=\"btnHeader\">\n                                                " + appData.buttons[2].icon + "\n                                            </h2>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"button\" id=\"magicButton3-3\">\n                                    <div id=\"magicButton3-2\">\n                                        <div id=\"magicButton3-1\">\n                                            <h2 class=\"btnHeader\">\n                                                " + appData.buttons[3].icon + "\n                                            </h2>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"button\" id=\"magicButton4-3\">\n                                    <div id=\"magicButton4-2\">\n                                        <div id=\"magicButton4-1\">\n                                            <h2 class=\"btnHeader\">\n                                                " + appData.buttons[4].icon + "\n                                            </h2>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <br><br>\n                        <div id=\"backGround\" class=\"animate\">\n                            <div id=\"pageContent\">\n                                <header id=\"contentHeader\">\n                                </header>\n                                <div id=\"content\"></div>\n                                <img id=\"contentImg></div>\n                            </div>\n                        </div>\n                        </div>\n                    </div>\n                    </div>\n                \n            </div>\n            ");
    },
    renderNewPage: function (page) {
        setTimeout(function () {
            document.getElementById("contentHeader").innerHTML = "<h1>" + (function () { if (appData.currentPage !== undefined) {
                return appData.currentPage.header;
            }
            else {
                return "";
            } })() + "</h1>";
            document.getElementById("content").innerHTML = "<p>" + (function () { if (appData.currentPage !== undefined) {
                return appData.currentPage.content;
            }
            else {
                return "";
            } })() + "</p>";
            document.getElementById("contentImg").setAttribute("src", "https://picsum.photos/200/300");
        }, 1000);
    },
    closeAllOtherButtonsThan: function (button) {
        var buttonsToTurnOff = [];
        Object.keys(appData.buttons).forEach(function (key) {
            console.log("checking", appData.buttons[key].name, button.name);
            if (appData.buttons[key].name !== button.name) {
                console.log("pushing", appData.buttons[key]);
                buttonsToTurnOff.push(appData.buttons[key]);
            }
        });
        console.log(buttonsToTurnOff);
        buttonsToTurnOff.forEach(function (button) {
            document.getElementById("magicButton" + button.name + "-1").removeAttribute("class");
            document.getElementById("magicButton" + button.name + "-2").removeAttribute("class");
            document.getElementById("magicButton" + button.name + "-3").classList.remove("open");
            document.getElementById("magicButton" + button.name + "-3").classList.remove("animate");
            button.open = false;
        });
    },
    setBackgroundImage: function () {
        var width = window.screen.width;
        var height = window.screen.height;
        var img = document.getElementById("backgroundImg");
        img.addEventListener("load", eventHandlers.onBackgroundLoaded);
        img.setAttribute("src", "https://picsum.photos/" + width + "/" + height);
    },
    addEventHandlers: function () {
        var noOfButtons = document.getElementsByClassName("button").length;
        for (var i = 1; i <= noOfButtons; i++) {
            document.getElementById("magicButton" + i + "-3").addEventListener("click", function (e) { eventHandlers.onButtonClickedEventHandler(e); });
            console.log("did one event handler", "magicButton" + i + "-3");
        }
    },
    openButton: function (button) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log("open button func", page.aButtonIsOpen());
            if (!page.aButtonIsOpen()) {
                button.open = true;
            }
            return [2 /*return*/];
        });
    }); },
    aButtonIsOpen: function () {
        var open = false;
        Object.keys(appData.buttons).forEach(function (key) {
            if (appData.buttons[key].open) {
                open = true;
            }
        });
        return open;
    },
    animateButton: function (button) {
        var bip = new Audio('./src/audio/bip.wav');
        var boop = new Audio('./src/audio/bop2.wav');
        page.hidePageContent();
        setTimeout(function () { bip.play(); }, 300);
        setTimeout(function () { bip.play(); }, 800);
        document.getElementById("magicButton" + button.name + "-1").setAttribute("class", "open");
        setTimeout(function () {
            document.getElementById("magicButton" + button.name + "-2").setAttribute("class", "open");
        }, 500);
        setTimeout(function () {
            boop.play();
            console.log(button.backGroundColor);
            document.getElementById("backGround").setAttribute("class", "" + button.backGroundColor);
            document.getElementById("backGround").classList.add("show");
            page.showPageContent();
        }, 1300);
        setTimeout(function () {
            document.getElementById("magicButton" + button.name + "-3").classList.add("open");
            document.getElementById("magicButton" + button.name + "-3").classList.add("animate");
        }, 1500);
    },
    hidePageContent: function () {
        document.getElementById("pageContent").removeAttribute("class");
    },
    showPageContent: function () {
        document.getElementById("pageContent").setAttribute("class", "show");
    }
};
var appData = {
    buttons: {
        1: {
            name: 1,
            icon: "Y",
            header: "Yellow Page",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus recusandae atque non ipsum repudiandae excepturi, praesentium libero perspiciatis cumque magnam rerum ratione molestias laborum voluptas repellendus eum, optio laudantium itaque quasi eos, commodi sit ad iure magni. Distinctio itaque, consequuntur culpa dicta fugiat fugit vitae.",
            open: false,
            backGroundColor: "yellow"
        },
        2: {
            name: 2,
            icon: "B",
            header: "Blue Page",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus recusandae atque non ipsum repudiandae excepturi, praesentium libero perspiciatis cumque magnam rerum ratione molestias laborum voluptas repellendus eum, optio laudantium itaque quasi eos, commodi sit ad iure magni. Distinctio itaque, consequuntur culpa dicta fugiat fugit vitae.",
            open: false,
            backGroundColor: "blue"
        },
        3: {
            name: 3,
            icon: "G",
            header: "Green Page",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus recusandae atque non ipsum repudiandae excepturi, praesentium libero perspiciatis cumque magnam rerum ratione molestias laborum voluptas repellendus eum, optio laudantium itaque quasi eos, commodi sit ad iure magni. Distinctio itaque, consequuntur culpa dicta fugiat fugit vitae.",
            open: false,
            backGroundColor: "green"
        },
        4: {
            name: 4,
            icon: "R",
            header: "Red Page",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus recusandae atque non ipsum repudiandae excepturi, praesentium libero perspiciatis cumque magnam rerum ratione molestias laborum voluptas repellendus eum, optio laudantium itaque quasi eos, commodi sit ad iure magni. Distinctio itaque, consequuntur culpa dicta fugiat fugit vitae.",
            open: false,
            backGroundColor: "red"
        }
    },
    currentPage: undefined
};
var eventHandlers = {
    onBackgroundLoaded: function () {
        document.getElementById("spinner").setAttribute("class", "hide");
        // document.getElementById("backgroundImg").setAttribute("class", "show");
        document.getElementById("backGround").classList.add("show");
        setTimeout(function () { document.getElementById("appBtns").setAttribute("class", "show"); }, 600);
        document.getElementById("spinner").remove();
        document.getElementById("spinnerHolder").remove();
    },
    onButtonClickedEventHandler: function (e) {
        var button;
        Object.keys(appData.buttons).forEach(function (key) {
            if (appData.buttons[key].icon === e.target.innerText) {
                button = appData.buttons[key];
            }
        });
        page.closeAllOtherButtonsThan(button);
        console.log(button);
        appData.currentPage = button;
        page.openButton(button);
        page.animateButton(button);
        page.renderNewPage(button);
    }
};
