// ==UserScript==
// @name		Florr.io Theme Customizer by Zeus
// @author		Zeus
// @version		1.0
// @description	Press Tab to open the theme customizer panel
// @match		*://florr.io/*
// @grant		unsafeWindow
// @run-at      document-load
// @grant		GM_addStyle
// @namespace https://greasyfork.org/en/scripts?filter_locale=0&q=Florr.io+Theme+Customizer+by+Zeus
// ==/UserScript==

localStorage.fillStyleProxies = localStorage.fillStyleProxies || "{}"
var fillStyleProxies = JSON.parse(localStorage.fillStyleProxies);

localStorage.strokeStyleProxies = localStorage.strokeStyleProxies || "{}"
var strokeStyleProxies = JSON.parse(localStorage.strokeStyleProxies);

localStorage.fillOn = localStorage.fillOn || "true";
var fillOn = localStorage.fillOn;

localStorage.strokeOn = localStorage.strokeOn || "true";
var strokeOn = localStorage.strokeOn;

const canvasProxy = new Proxy(unsafeWindow.HTMLCanvasElement.prototype.getContext, {
    apply(target, thisArg, args) {
        const ctx = Reflect.apply(...arguments);

        const prototype = Object.getPrototypeOf(ctx);
        const descriptors = Object.getOwnPropertyDescriptors(prototype);

        Object.defineProperties(prototype, {
            set: (target, key, value) => {
                return true;
            },
            get: (target, key) => {
                if (key !== "__isProxy") {
                    return target[key];
                }

                return true;
            },

            apply(target, thisArg, args) {
                if (args[0] === 'noProxy') {
                    if (target.__isProxy) {
                        return Reflect.apply(target, thisArg, args);
                    } else {
                        return Reflect.apply(target, thisArg, args.slice(1));
                    }
                }
                return Reflect.apply(...arguments);
            },
            fillStyle: {
                get() {
                    return descriptors.fillStyle.get.call(this);
                },

                set(value) {
                    if (fillOn == "true") {
                        const lowerValue = value.toLowerCase();
                        if (!fillStyleProxies.hasOwnProperty(lowerValue)) {
                            fillStyleProxies[lowerValue] = lowerValue;
                            localStorage.fillStyleProxies = JSON.stringify(fillStyleProxies);
                            if (!!document.getElementById("fillSelect") && !document.getElementById('fillCancel'+lowerValue)) {
                                var option = document.createElement("button");
                                option.value = option.style.background = lowerValue;
                                option.style.width = "70px";
                                option.style.height = "20px";
                                option.addEventListener("click", function () {
                                    document.getElementById("fillOriginal").value = this.value;
                                    document.getElementById("fillModified").value = fillStyleProxies[this.value];
                                })
                                document.getElementById("fillSelect").appendChild(option);
                                option = document.createElement("button");
                                option.id = 'fillCancel'+lowerValue;
                                option.value = lowerValue;
                                option.style.background = fillStyleProxies[lowerValue];
                                option.style.display = lowerValue != fillStyleProxies[lowerValue] ? "inline" : "none";
                                option.style.width = "70px";
                                option.style.height = "20px";
                                option.innerText = "Cancel";
                                option.addEventListener("click", function () {
                                    fillStyleProxies[this.value] = this.value;
                                    localStorage.fillStyleProxies = JSON.stringify(fillStyleProxies);
                                    this.style.background = this.value;
                                    this.style.display = "none";
                                })
                                document.getElementById("fillSelect").appendChild(option);
                                option = document.createElement("br");
                                document.getElementById("fillSelect").appendChild(option);
                            }
                        } else {
                            value = fillStyleProxies[lowerValue];
                        }
                    }
                    descriptors.fillStyle.set.call(this, value);
                }
            },
            strokeStyle: {
                get() {
                    return descriptors.strokeStyle.get.call(this);
                },

                set(value) {
                    if (strokeOn == "true") {
                        const lowerValue = value.toLowerCase();
                        if (!strokeStyleProxies.hasOwnProperty(lowerValue)) {
                            strokeStyleProxies[lowerValue] = lowerValue;
                            localStorage.strokeStyleProxies = JSON.stringify(strokeStyleProxies);
                            if (!!document.getElementById("strokeSelect") && !document.getElementById('strokeCancel'+lowerValue)) {
                                var option = document.createElement("button");
                                option.value = option.style.background = lowerValue;
                                option.style.width = "70px";
                                option.style.height = "20px";
                                option.addEventListener("click", function () {
                                    document.getElementById("strokeOriginal").value = this.value;
                                    document.getElementById("strokeModified").value = strokeStyleProxies[this.value];
                                })
                                document.getElementById("strokeSelect").appendChild(option);
                                option = document.createElement("button");
                                option.id = 'strokeCancel'+lowerValue;
                                option.value = lowerValue;
                                option.style.background = strokeStyleProxies[lowerValue];
                                option.style.display = lowerValue != strokeStyleProxies[lowerValue] ? "inline" : "none";
                                option.style.width = "70px";
                                option.style.height = "20px";
                                option.innerText = "Cancel";
                                option.addEventListener("click", function () {
                                    strokeStyleProxies[this.value] = this.value;
                                    localStorage.strokeStyleProxies = JSON.stringify(strokeStyleProxies);
                                    this.style.background = this.value;
                                    this.style.display = "none";
                                })
                                document.getElementById("strokeSelect").appendChild(option);
                                option = document.createElement("br");
                                document.getElementById("strokeSelect").appendChild(option);
                            }
                        } else {
                            value = strokeStyleProxies[lowerValue];
                        }
                    }
                    descriptors.strokeStyle.set.call(this, value);
                }
            }
        });

        return ctx;
    }
});

unsafeWindow.HTMLCanvasElement.prototype.getContext = canvasProxy;

GM_addStyle(`body {
  font-family: "Ubuntu", sans-serif;
  padding: 0;
  margin: 0;
  font-size: 20px;
}

.modal {
  -webkit-text-fill-color: white;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: black;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.5s linear, visibility 0.5s;
}

.modal-content {
  width: 500px;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-left: auto;
  margin-right: auto;
  margin-top: -200px;
  transition: margin-top 0.5s linear;
}

.visible {
  opacity: 1;
  visibility: visible;
}

.visible .modal-content {
  margin-top: 5%;
}

.close {
  align-self: flex-end;
  cursor: pointer;
}

.author {
  align-self: flex-end;
  color: grey;
  font-size: 0.5em;
}

.select {
  display: flex;
}`);

function launch() {
    if (Object.keys(fillStyleProxies).length > 0) {

        const Config = {
            hotkey: {
                connectUI: 'Tab'
            },
            script: {
                m28nOverride: false,
                socket: null,
                currentId: '',
                ids: []
            }
        };

        const modal = document.createElement("div");
        modal.classList.add("modal");
        modal.innerHTML = `
        <div class='modal-content' id="themeModal">
            <span class='close'>&times;</span>
            <div class='select'>
                <label for="fillSelect">Scroll to select a fill color:&nbsp;</label>
                <div style="background-color: rgba(255, 255, 255, 0.3);width: 150px;height: 65px;overflow: scroll;" id="fillSelect"></div>
            </div>
            <div>
                <label for="fillOriginal">From: </label>
            <input type="color" id="fillOriginal" value="${Object.keys(fillStyleProxies)[0]}" disabled>
                <label for="fillModified">To: </label>
            <input type="color" id="fillModified" value="${Object.values(fillStyleProxies)[0]}">&nbsp;&nbsp;&nbsp;
            <button id="fillApply" >Apply</button>&nbsp;&nbsp;&nbsp;
            <button id="fillResetAll" style="background-color:red;">Reset All</button>&nbsp;&nbsp;&nbsp;
            <button id="fillOn" value="${fillOn}" style="background-color:${fillOn == "true" ? "white" : "grey"}">${fillOn == "true" ? "On" : "Off"}</button>
            </div>
            <div class='select'>
                <label for="strokeSelect">Scroll to select a stroke color:&nbsp;</label>
                <div style="background-color: rgba(255, 255, 255, 0.3);width: 150px;height: 65px;overflow: scroll;" id="strokeSelect"></div>
            </div>
            <div>
                <label for="strokeOriginal">From: </label>
            <input type="color" id="strokeOriginal" value="${Object.keys(strokeStyleProxies)[0]}" disabled>
                <label for="strokeModified">To: </label>
            <input type="color" id="strokeModified" value="${Object.values(strokeStyleProxies)[0]}">&nbsp;&nbsp;&nbsp;
            <button id="strokeApply" >Apply</button>&nbsp;&nbsp;&nbsp;
            <button id="strokeResetAll" style="background-color:red;">Reset All</button>&nbsp;&nbsp;&nbsp;
            <button id="strokeOn" value="${strokeOn}" style="background-color:${strokeOn == "true" ? "white" : "grey"}">${strokeOn == "true" ? "On" : "Off"}</button>
            </div><br>
            <span class='author' style="color:white; -webkit-text-stroke-width: 0px;">Florr.io Theme Customizer by Zeus on <a href="https://greasyfork.org/en/scripts?filter_locale=0&q=Florr.io+Theme+Customizer+by+Zeus">greasyfork.org</a></span>
        </div>
    `;
        document.body.appendChild(modal);
        function isMouseInside(event,obj) {
            if (!!obj && event.clientX > obj.getBoundingClientRect().x && event.clientX < obj.getBoundingClientRect().x+obj.getBoundingClientRect().width && event.clientY > obj.getBoundingClientRect().y && event.clientY < obj.getBoundingClientRect().y+obj.getBoundingClientRect().height) {
                return true
            } else {
                return false
            }
        }
        document.addEventListener("mousemove", function(e){
            if (isMouseInside(e,document.getElementById("themeModal")) && modal.style.pointerEvents == "none" && modal.classList.contains("visible")) {
                modal.style.pointerEvents = "";
            } else if (!isMouseInside(e,document.getElementById("themeModal")) && modal.style.pointerEvents != "none") {
                modal.style.pointerEvents = "none";
            }
        })
        document.getElementById("fillApply").addEventListener("click",function(){
            fillStyleProxies[document.getElementById("fillOriginal").value] = document.getElementById("fillModified").value;
            localStorage.fillStyleProxies = JSON.stringify(fillStyleProxies);
            var cancelButton = document.getElementById("fillCancel" + document.getElementById("fillOriginal").value);
            cancelButton.style.background = document.getElementById("fillModified").value;
            cancelButton.style.display = "inline";
        })
        document.getElementById("fillResetAll").addEventListener("click",function(){
            for (var originalColor in fillStyleProxies) {
                if (originalColor != fillStyleProxies[originalColor]) {
                    var cancelButton = document.getElementById("fillCancel" + originalColor);
                    cancelButton.style.background = originalColor;
                    cancelButton.style.display = "none";
                    fillStyleProxies[originalColor] = originalColor;
                }
            }
            localStorage.fillStyleProxies = JSON.stringify(fillStyleProxies);
        })
        document.getElementById("fillOn").addEventListener("click",function(){
            fillOn = localStorage.fillOn = localStorage.fillOn == "true" ? "false" : "true";
            this.value = fillOn;
            this.style.backgroundColor = fillOn == "true" ? "white" : "grey";
            this.innerText = fillOn == "true" ? "On" : "Off";
        })
        document.getElementById("strokeOn").addEventListener("click",function(){
            strokeOn = localStorage.strokeOn = localStorage.strokeOn == "true" ? "false" : "true";
            this.value = strokeOn;
            this.style.backgroundColor = strokeOn == "true" ? "white" : "grey";
            this.innerText = strokeOn == "true" ? "On" : "Off";
        })
        var fillKeys = Object.keys(fillStyleProxies);
        for (var i = 0; i < fillKeys.length; i++) {
            if (!document.getElementById('fillCancel'+fillKeys[i])) {
                var option = document.createElement("button");
                option.value = option.style.background = fillKeys[i];
                option.style.width = "70px";
                option.style.height = "20px";
                option.addEventListener("click", function () {
                    document.getElementById("fillOriginal").value = this.value;
                    document.getElementById("fillModified").value = fillStyleProxies[this.value];
                })
                document.getElementById("fillSelect").appendChild(option);
                option = document.createElement("button");
                option.id = 'fillCancel'+fillKeys[i];
                option.value = fillKeys[i];
                option.style.background = fillStyleProxies[fillKeys[i]];
                option.style.display = fillKeys[i] != fillStyleProxies[fillKeys[i]] ? "inline" : "none";
                option.style.width = "70px";
                option.style.height = "20px";
                option.innerText = "Cancel";
                option.addEventListener("click", function () {
                    fillStyleProxies[this.value] = this.value;
                    localStorage.fillStyleProxies = JSON.stringify(fillStyleProxies);
                    this.style.background = this.value;
                    this.style.display = "none";
                })
                document.getElementById("fillSelect").appendChild(option);
                option = document.createElement("br");
                document.getElementById("fillSelect").appendChild(option);
            }
        }
        document.getElementById("strokeApply").addEventListener("click",function(){
            strokeStyleProxies[document.getElementById("strokeOriginal").value] = document.getElementById("strokeModified").value;
            localStorage.strokeStyleProxies = JSON.stringify(strokeStyleProxies);
            var cancelButton = document.getElementById("strokeCancel" + document.getElementById("strokeOriginal").value);
            cancelButton.style.background = document.getElementById("strokeModified").value;
            cancelButton.style.display = "inline";
        })
        document.getElementById("strokeResetAll").addEventListener("click",function(){
            for (var originalColor in strokeStyleProxies) {
                if (originalColor != strokeStyleProxies[originalColor]) {
                    var cancelButton = document.getElementById("strokeCancel" + originalColor);
                    cancelButton.style.background = originalColor;
                    cancelButton.style.display = "none";
                    strokeStyleProxies[originalColor] = originalColor;
                }
            }
            localStorage.strokeStyleProxies = JSON.stringify(strokeStyleProxies);
        })

        var strokeKeys = Object.keys(strokeStyleProxies);
        for (i = 0; i < strokeKeys.length; i++) {
            if (!document.getElementById('strokeCancel'+strokeKeys[i])) {
                option = document.createElement("button");
                option.value = option.style.background = strokeKeys[i];
                option.style.width = "70px";
                option.style.height = "20px";
                option.addEventListener("click", function () {
                    document.getElementById("strokeOriginal").value = this.value;
                    document.getElementById("strokeModified").value = strokeStyleProxies[this.value];
                })
                document.getElementById("strokeSelect").appendChild(option);
                option = document.createElement("button");
                option.id = 'strokeCancel'+strokeKeys[i];
                option.value = strokeKeys[i];
                option.style.background = strokeStyleProxies[strokeKeys[i]];
                option.style.display = strokeKeys[i] != strokeStyleProxies[strokeKeys[i]] ? "inline" : "none";
                if (strokeKeys[i] != strokeStyleProxies[strokeKeys[i]]) {
                }
                option.style.width = "70px";
                option.style.height = "20px";
                option.innerText = "Cancel";
                option.addEventListener("click", function () {
                    strokeStyleProxies[this.value] = this.value;
                    localStorage.strokeStyleProxies = JSON.stringify(strokeStyleProxies);
                    this.style.background = this.value;
                    this.style.display = "none";
                })
                document.getElementById("strokeSelect").appendChild(option);
                option = document.createElement("br");
                document.getElementById("strokeSelect").appendChild(option);
            }
        }

        const closeModal = () => {
            if (modal.classList.contains('visible')) {
                modal.classList.remove("visible");
            }
        };

        const toggleModal = () => {
            modal.classList.toggle("visible");
        };

        const handleKeypress = (e) => {
            let key = e.key;
            switch (key) {
                case "Tab":
                    e.preventDefault();
                    e.stopPropagation();
                    toggleModal();
                    break;
                case "Escape":
                    e.preventDefault();
                    e.stopPropagation();
                    closeModal();
                    break;
                default:
                    break;
            }
        };

        document.addEventListener("keydown", handleKeypress);
        document.querySelector(".close").addEventListener("click", closeModal);
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        })
    } else {
        setTimeout(function(){launch()},10)
    }
}
launch();
