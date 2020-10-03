document.body.onload = loadApp;

function loadApp() {
    const app = document.getElementById("app");
    app.innerHTML = page.create();
    page.setBackgroundImage();
    page.addEventHandlers();
}

interface Button {
    icon: string,
    header: string,
    content: string,
    open: boolean,
}

const page = {
    create: function () {
        return (
            `
            <img id="backgroundImg"></img>
            <div id="spinnerHolder"><img id="spinner" src="https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e471rg1w4iot45hb8537piyun4xtfq7tv4yv4qqrq3r&rid=giphy.gif"></img></div>
            <div id="pageHolder">
                <div id="outerFrame">
                    <div id="magicButton3">
                        <div id="magicButton2">
                            <div id="magicButton1">
                                ${appData.buttons[1].icon}
                            </div>
                        </div>
                    </div>
                </div>
                <img id="appBtn" src='./src/img/startBtn.png'></img>
                </div>
            </div>
            `
        )
    },
    setBackgroundImage: () => {
        const width = window.screen.width;
        const height = window.screen.height;
        let img = document.getElementById("backgroundImg");
        img.addEventListener("load", eventHandlers.onBackgroundLoaded);
        img.setAttribute("src", `https://picsum.photos/${width}/${height}`);
    },
    addEventHandlers: () => {
        document.getElementById("magicButton3").addEventListener("click", (e: MouseEvent) => { eventHandlers.onButtonClickedEventHandler(e) });
    },

}

const appData = {
    buttons: {
        1: {
            icon: "Y",
            header: "Yellow Button",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus recusandae atque non ipsum repudiandae excepturi, praesentium libero perspiciatis cumque magnam rerum ratione molestias laborum voluptas repellendus eum, optio laudantium itaque quasi eos, commodi sit ad iure magni. Distinctio itaque, consequuntur culpa dicta fugiat fugit vitae.",
            open: false,
        },
        2: {
            icon: "B",
            header: "Blue Button",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus recusandae atque non ipsum repudiandae excepturi, praesentium libero perspiciatis cumque magnam rerum ratione molestias laborum voluptas repellendus eum, optio laudantium itaque quasi eos, commodi sit ad iure magni. Distinctio itaque, consequuntur culpa dicta fugiat fugit vitae.",
            open: false,
        },
    }
}

const eventHandlers = {
    onBackgroundLoaded: () => {
        document.getElementById("spinner").setAttribute("class", "hide");
        document.getElementById("backgroundImg").setAttribute("class", "show");
        setTimeout(() => { document.getElementById("appBtn").setAttribute("class", "show"); }, 600);
        document.getElementById("spinner").remove();
        document.getElementById("spinnerHolder").remove();
    },
    onButtonClickedEventHandler: (e: MouseEvent) => {
        let button = {};        
        Object.keys(appData.buttons).forEach(key => {
            if (appData.buttons[key].icon === e.target.innerText)
            { 
                button = appData.buttons[key];
             }
        })
        page.openButton(button);
        button["open"] = true;

        alert(e.target.innerText);
        alert(button.icon);
    }
}