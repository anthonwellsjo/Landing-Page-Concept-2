document.body.onload = loadApp;

function loadApp() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        const app = document.getElementById("app");
        app.innerHTML = page.renderOnlyDesktop();
        page.setBackgroundImage();
        
    } else {
        const app = document.getElementById("app");
        app.innerHTML = page.create();
        page.setBackgroundImage();
        page.addEventHandlers();
    }
}

interface Button {
    name: number,
    icon: string,
    header: string,
    content: string,
    open: boolean,
    backGroundColor: string
}
interface AppData {
    buttons: Record<number, Button>,
    currentPage: Button | undefined,
}

const page = {
    create: function () {
        return (
            `
            <img id="backgroundImg"></img>
            <div id="spinnerHolder"><img id="spinner" src="https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e471rg1w4iot45hb8537piyun4xtfq7tv4yv4qqrq3r&rid=giphy.gif"></img></div>
            <div id="pageHolder">
                
                    <div id="outerFrame">
                        <div id="header">
                            <div id="appBtns" src='./src/img/startBtn.png'>
                                <div class="button" id="magicButton1-3">
                                    <div id="magicButton1-2">
                                        <div id="magicButton1-1">
                                            <h2 class="btnHeader">
                                                ${appData.buttons[1].icon}
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <div class="button" id="magicButton2-3">
                                    <div id="magicButton2-2">
                                        <div id="magicButton2-1">
                                            <h2 class="btnHeader">
                                                ${appData.buttons[2].icon}
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <div class="button" id="magicButton3-3">
                                    <div id="magicButton3-2">
                                        <div id="magicButton3-1">
                                            <h2 class="btnHeader">
                                                ${appData.buttons[3].icon}
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <div class="button" id="magicButton4-3">
                                    <div id="magicButton4-2">
                                        <div id="magicButton4-1">
                                            <h2 class="btnHeader">
                                                ${appData.buttons[4].icon}
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br><br>
                        <div id="backGround" class="animate">
                            <div id="pageContent">
                                <header id="contentHeader">
                                </header>
                                <div id="content"></div>
                                <img id="contentImg></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                
            </div>
            `
        )
    },
    renderNewPage: (page: Button) => {
        setTimeout(() => {
            document.getElementById("contentHeader").innerHTML = `<h1>${(() => { if (appData.currentPage !== undefined) { return appData.currentPage.header } else { return "" } })()}</h1>`;
            document.getElementById("content").innerHTML = `<p>${(() => { if (appData.currentPage !== undefined) { return appData.currentPage.content } else { return "" } })()}</p>`;
            document.getElementById("contentImg").setAttribute("src", "https://picsum.photos/200/300");

        }, 1000);

    },
    closeAllOtherButtonsThan: (button: Button) => {
        let buttonsToTurnOff = [];
        Object.keys(appData.buttons).forEach(key => {
            console.log("checking", appData.buttons[key].name, button.name);
            if (appData.buttons[key].name !== button.name) {
                console.log("pushing", appData.buttons[key]);
                buttonsToTurnOff.push(appData.buttons[key]);
            }
        });
        console.log(buttonsToTurnOff);
        buttonsToTurnOff.forEach(button => {
            document.getElementById(`magicButton${button.name}-1`).removeAttribute("class");
            document.getElementById(`magicButton${button.name}-2`).removeAttribute("class");
            document.getElementById(`magicButton${button.name}-3`).classList.remove("open");
            document.getElementById(`magicButton${button.name}-3`).classList.remove("animate");
            button.open = false;
        })
    },
    setBackgroundImage: () => {
        const width = window.screen.width;
        const height = window.screen.height;
        let img = document.getElementById("backgroundImg");
        img.addEventListener("load", eventHandlers.onBackgroundLoaded);
        img.setAttribute("src", `https://picsum.photos/${width}/${height}`);
    },
    addEventHandlers: () => {
        const noOfButtons = document.getElementsByClassName("button").length;
        for (let i = 1; i <= noOfButtons; i++) {
            document.getElementById(`magicButton${i}-3`).addEventListener("click", (e: MouseEvent) => { eventHandlers.onButtonClickedEventHandler(e) });
            console.log("did one event handler", `magicButton${i}-3`);
        }

    },
    openButton: async (button: Button) => {
        console.log("open button func", page.aButtonIsOpen())
        if (!page.aButtonIsOpen()) {
            button.open = true;
        }
    },
    aButtonIsOpen: (): boolean => {
        let open = false;
        Object.keys(appData.buttons).forEach(key => {
            if (appData.buttons[key].open) { open = true }
        })
        return open;
    },
    animateButton: (button: Button) => {
        var bip = new Audio('./src/audio/bip.wav');
        var boop = new Audio('./src/audio/bop2.wav');
        page.hidePageContent();
        setTimeout(() => { bip.play(); }, 300)
        setTimeout(() => { bip.play(); }, 800)
        document.getElementById(`magicButton${button.name}-1`).setAttribute("class", "open");
        setTimeout(() => {
            document.getElementById(`magicButton${button.name}-2`).setAttribute("class", "open");
        }, 500)
        setTimeout(() => {
            boop.play();
            console.log(button.backGroundColor);
            document.getElementById("backGround").setAttribute("class", `${button.backGroundColor}`);
            document.getElementById("backGround").classList.add("show");
            page.showPageContent();
        }, 1300)
        setTimeout(() => {
            document.getElementById(`magicButton${button.name}-3`).classList.add("open");
            document.getElementById(`magicButton${button.name}-3`).classList.add("animate");
        }, 1500);
    },
    hidePageContent: () => {
        document.getElementById("pageContent").removeAttribute("class");
    },
    showPageContent: () => {
        document.getElementById("pageContent").setAttribute("class", "show");
    },
    renderOnlyDesktop: () => {
        return `
        <h1 id="onlyDesktop">Only Desktop</h1>
        `
    }
}

const appData: AppData = {
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
        },
    },
    currentPage: undefined,
}

const eventHandlers = {
    onBackgroundLoaded: () => {
        document.getElementById("spinner").setAttribute("class", "hide");
        // document.getElementById("backgroundImg").setAttribute("class", "show");
        document.getElementById("backGround").classList.add("show");
        setTimeout(() => { document.getElementById("appBtns").setAttribute("class", "show"); }, 600);
        document.getElementById("spinner").remove();
        document.getElementById("spinnerHolder").remove();
    },
    onButtonClickedEventHandler: (e: MouseEvent) => {
        let button: Button;
        Object.keys(appData.buttons).forEach(key => {
            if (appData.buttons[key].icon === e.target.innerText) {
                button = appData.buttons[key];
            }
        })
        page.closeAllOtherButtonsThan(button);
        console.log(button);
        appData.currentPage = button;
        page.openButton(button);
        page.animateButton(button);
        page.renderNewPage(button);

    }
}