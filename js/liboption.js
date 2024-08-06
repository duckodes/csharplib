var liboption = (function () {
    return {
        init: init
    }
    function init() {
        fileutils.ReadFileText('Resource/Register/localstorage.ordinary-level/8hR7kL3pQ9sT6wE2.localstorage', (text) => {
            if (storageutils.get(text)) {
                themepackage.tokyonightdark("code-style");
            }
            else {
                themepackage.vs2015("code-style");
            }
        });
        fileutils.ReadFileText('Resource/Register/localstorage.ordinary-level/sdWs5sd5f48Dsdf47F65.localstorage', (text) => {
            if (storageutils.get(text)) {
                document.querySelector('code').style.setProperty('--code-white-space', 'pre-wrap');
            }
            else {
                document.querySelector('code').style.setProperty('--code-white-space', 'unset');
            }
        });
        fileutils.ReadFileText('Resource/Register/localstorage.ordinary-level/5sWfs5fFGOs5g7RsdMBS.localstorage', (text) => {
            if (storageutils.get(text)) {
                var codeBlock = document.querySelectorAll('code');
                codeBlock.forEach(element => {
                    if (element.contentEditable === 'true' || element.contentEditable === 'inherit') {
                        var codeText = element.innerText;
                        var lines = codeText.split('\n');
                        var numberedCode = '';
                        for (var i = 0; i < lines.length; i++) {
                            numberedCode += 'aBcDeFgHiJkLmNoPqRsTuVwXyZ' + (i + 1).toString().padEnd(lines.length.toString().length, ' ') + ' ' + '&nbsp;' + lines[i];

                            if (i < lines.length - 1) {
                                numberedCode += '\n';
                            }
                        }
                        element.innerHTML = numberedCode;
                        element.innerHTML = hljs.highlightAuto(element.innerText).value;
                        element.innerHTML = element.innerHTML.replace(/\aBcDeFgHiJkLmNoPqRsTuVwXyZ/g, '<div class="no-select" contenteditable="false" style="display: inline-block;color: #555;">').replace(/&nbsp;/g, '</div>');
                    }
                });
            }
        });
        var option = document.getElementById("option");

        option.addEventListener("click", () => {
            contextmenuutils.init(option.parentElement, (b, c) => {
                c.style.marginLeft = "-25px";
            });
            contextmenuutils.addItem("Settings", (c) => {
                c.addEventListener("click", () => {
                    alertutils.init(document.body, (b, c, ti, rmb) => {
                        b.style.background = "rgb(0, 0, 0, 0.3)";
                        ti.textContent = "Settings";
                        fileutils.ReadFileText('Resource/Register/localstorage.ordinary-level/8hR7kL3pQ9sT6wE2.localstorage', (text) => {
                            var bbtn = document.createElement("div");
                            bbtn.style.display = "flex";
                            bbtn.style.alignItems = "center";
                            bbtn.style.flexDirection = "row";
                            var btn = document.createElement("div");
                            btn.innerText = "主題";
                            btn.style.width = "70%";
                            c.appendChild(bbtn);
                            bbtn.appendChild(btn);
                            buttonutils.swb({
                                a: storageutils.get(text), bsw: "40px", csw: "14px", bsh: "20px", csh: "14px", bsbdr: "15px", csbdr: "15px", fs: 5,
                                bsb: "#777", bsba: "#336", csb: "#333", csba: "#558", p: bbtn, fc(atv) {
                                    storageutils.set(text, atv);
                                    if (atv) {
                                        themepackage.tokyonightdark("code-style");
                                    }
                                    else {
                                        themepackage.vs2015("code-style");
                                    }
                                }
                            });
                        });
                        fileutils.ReadFileText('Resource/Register/localstorage.ordinary-level/sdWs5sd5f48Dsdf47F65.localstorage', (text) => {
                            var bbtn = document.createElement("div");
                            bbtn.style.display = "flex";
                            bbtn.style.alignItems = "center";
                            bbtn.style.flexDirection = "row";
                            var btn = document.createElement("div");
                            btn.innerText = "代碼換行樣式";
                            btn.style.width = "70%";
                            c.appendChild(bbtn);
                            bbtn.appendChild(btn);
                            buttonutils.swb({
                                a: storageutils.get(text), bsw: "40px", csw: "14px", bsh: "20px", csh: "14px", bsbdr: "15px", csbdr: "15px", fs: 5,
                                bsb: "#777", bsba: "#336", csb: "#333", csba: "#558", p: bbtn, fc(atv) {
                                    storageutils.set(text, atv);
                                    if (atv) {
                                        document.querySelector('code').style.setProperty('--code-white-space', 'pre-wrap');
                                    }
                                    else {
                                        document.querySelector('code').style.setProperty('--code-white-space', 'unset');
                                    }
                                }
                            });
                        });
                        fileutils.ReadFileText('Resource/Register/localstorage.ordinary-level/5sWfs5fFGOs5g7RsdMBS.localstorage', (text) => {
                            var bbtn = document.createElement("div");
                            bbtn.style.display = "flex";
                            bbtn.style.alignItems = "center";
                            bbtn.style.flexDirection = "row";
                            var btn = document.createElement("div");
                            btn.innerText = "自動填入行數";
                            btn.style.width = "70%";
                            c.appendChild(bbtn);
                            bbtn.appendChild(btn);
                            buttonutils.swb({
                                a: storageutils.get(text), bsw: "40px", csw: "14px", bsh: "20px", csh: "14px", bsbdr: "15px", csbdr: "15px", fs: 5,
                                bsb: "#777", bsba: "#336", csb: "#333", csba: "#558", p: bbtn, fc(atv) {
                                    storageutils.set(text, atv);
                                }
                            });
                        });
                        rmb.addEventListener("click", () => { document.body.style.overflow = ''; b.remove(); });
                    });
                    document.body.style.overflow = 'hidden';
                    contextmenuutils.remove();
                });
                c.addEventListener("mouseenter", () => {
                    c.style.background = "#202020";
                });
                c.addEventListener("mouseleave", () => {
                    c.style.background = "";
                });
            });
            contextmenuutils.addItem("help", (c) => {
                c.addEventListener("click", () => {
                    alertutils.init(document.body, (b, c, ti, rmb) => {
                        ti.textContent = "help";
                        var ver = document.createElement("span");
                        ver.innerText = "ver.1.0.0";
                        c.appendChild(ver);
                        rmb.addEventListener("click", () => { b.remove(); });
                        window.onclick = function (event) {
                            if (event.target === b) {
                                b.remove();
                            }
                        }
                    });
                    contextmenuutils.remove();
                });
                c.addEventListener("mouseenter", () => {
                    c.style.background = "#202020";
                });
                c.addEventListener("mouseleave", () => {
                    c.style.background = "";
                });
            });
        });
    }
}());