var libsearch = (function () {
    return {
        init: init
    };
    function init() {
        var navb = document.querySelector('.navbar');
        var searchbuttonarea = document.createElement("div");
        searchbuttonarea.className = 'search-button-area';
        searchbuttonarea.style.width = "100%";
        searchbuttonarea.style.maxWidth = "600px";
        searchbuttonarea.style.height = "auto";
        searchbuttonarea.style.maxHeight = "500px";
        searchbuttonarea.style.marginLeft = "20px";
        searchbuttonarea.style.marginRight = "20px";
        searchbuttonarea.style.top = "20%";
        searchbuttonarea.style.display = "none";
        searchbuttonarea.style.flexDirection = "column";
        searchbuttonarea.style.background = "#1a1b26";
        searchbuttonarea.style.borderRadius = "20px";
        searchbuttonarea.style.overflow = "auto";
        navb.appendChild(searchbuttonarea);
        var source = [
            "AESEncryption",
            "AudioCollection",
            "Counter",
            "DraggablePanel",
            "FloatAES",
            "InitializationEvent",
            "IntAES",
            "MenuGeneric",
            "Searcher",
            "StringAES",
            "Timer",
            "UI-Sizer"];
        var searchbar = document.querySelector('.search-bar');
        var searchbarfocus = true;
        searchbar.addEventListener("input", () => {
            searchbuttonarea.style.display = "flex";
            clearButtons();
            searchIO(source, (items) => {
                var button = document.createElement('div');
                button.className = 'search-list-button';
                button.innerText = items;
                button.style.textAlign = "left";
                button.style.display = "flex";
                button.style.alignItems = "left";
                button.style.height = "auto";
                button.style.paddingLeft = "5%";
                button.style.color = "#7dcfff";
                button.style.background = "#1a1b26";
                button.style.borderRadius = "10px";
                button.style.flexDirection = "column";
                button.style.wordBreak = "break-all";
                button.addEventListener("touchstart", () => {
                    button.style.background = "#2b2c37";
                });
                button.addEventListener("touchend", () => {
                    button.style.background = "#1a1b26";
                });
                button.addEventListener("mouseenter", () => {
                    button.style.background = "#2b2c37";
                    searchbarfocus = false;
                });
                button.addEventListener("mouseleave", () => {
                    button.style.background = "#1a1b26";
                    searchbarfocus = true;
                });
                button.addEventListener("mouseup", () => {
                    searchbarfocus = true;
                    searchbuttonarea.style.display = "none";
                });
                button.addEventListener("click", () => {
                    searchbar.value = items;
                    onclicksearch(button.innerText);
                });
                searchbuttonarea.appendChild(button);
                LibTags(button);
            });
            selectarrow();
        });
        searchbar.addEventListener("focus", () => {
            searchbuttonarea.style.display = "flex";
        });
        searchbar.addEventListener("blur", () => {
            if (!searchbarfocus) {
                searchbar.focus();
            }
            else {
                searchbuttonarea.style.display = "none";
            }
        });
        searchbar.addEventListener("click", () => {
            searchbuttonarea.style.display = "flex";
            clearButtons();
            searchIO(source, (items) => {
                var button = document.createElement('div');
                button.className = 'search-list-button';
                button.innerText = items;
                button.style.textAlign = "left";
                button.style.display = "flex";
                button.style.alignItems = "left";
                button.style.height = "auto";
                button.style.paddingLeft = "5%";
                button.style.color = "#7dcfff";
                button.style.background = "#1a1b26";
                button.style.borderRadius = "10px";
                button.style.flexDirection = "column";
                button.style.wordBreak = "break-all";
                button.addEventListener("touchstart", () => {
                    button.style.background = "#2b2c37";
                });
                button.addEventListener("touchend", () => {
                    button.style.background = "#1a1b26";
                });
                button.addEventListener("mouseenter", () => {
                    button.style.background = "#2b2c37";
                    searchbarfocus = false;
                });
                button.addEventListener("mouseleave", () => {
                    button.style.background = "#1a1b26";
                    searchbarfocus = true;
                });
                button.addEventListener("mouseup", () => {
                    searchbarfocus = true;
                    searchbuttonarea.style.display = "none";
                });
                button.addEventListener("click", () => {
                    searchbar.value = items;
                    onclicksearch(button.innerText);
                });
                searchbuttonarea.appendChild(button);
                LibTags(button);
            });
        });
        function clearButtons() {
            var buttons = document.querySelectorAll('.search-list-button');
            buttons.forEach(button => {
                button.remove();
            });
        }
        function searchIO(source, fc) {
            source.forEach(item => {
                var searchValue = searchbar.value.toLowerCase();
                var itemLowerCase = item.toLowerCase();
                if (itemLowerCase.includes(searchValue) && searchValue !== '') {
                    fc(item);
                }
            });
        }
        function selectarrow() {
            var buttons = document.querySelectorAll('.search-list-button');
            let currentIndex = -1;
            document.addEventListener('keydown', function (event) {
                if (event.key === 'ArrowUp') {
                    if (currentIndex > -1) {
                        buttons[currentIndex].style.background = "#1a1b26";
                        currentIndex--;
                        if (currentIndex > -1) {
                            buttons[currentIndex].style.background = "#2b2c37";
                            searchbar.value = buttons[currentIndex].innerText;
                        }
                    }
                    else {
                        currentIndex = buttons.length - 1;
                        if (currentIndex <= buttons.length - 1 && currentIndex > -1) {
                            buttons[currentIndex].style.background = "#2b2c37";
                            searchbar.value = buttons[currentIndex].innerText;
                        }
                    }
                } else if (event.key === 'ArrowDown') {
                    if (currentIndex < buttons.length - 1) {
                        if (currentIndex !== -1) {
                            buttons[currentIndex].style.background = "#1a1b26";
                        }
                        currentIndex++;
                        buttons[currentIndex].style.background = "#2b2c37";
                        searchbar.value = buttons[currentIndex].innerText;
                    }
                    else {
                        if (currentIndex > -1 && currentIndex <= buttons.length - 1) {
                            buttons[currentIndex].style.background = "#1a1b26";
                        }
                        currentIndex = -1;
                    }
                } else if (event.key === 'Enter') {
                    if (document.activeElement.className === "search-bar") {
                        onclicksearch(searchbar.value);
                    }
                }
            });
            buttons.forEach((button, index) => {
                button.addEventListener('mouseenter', function () {
                    if (currentIndex > -1 && currentIndex != index) {
                        buttons[currentIndex].style.background = "#1a1b26";
                    }
                    currentIndex = index;
                });
            });
        }
        function LibTags(b) {
            const tagbase = document.createElement('div');
            if (b.textContent === "AESEncryption") {
                b.innerHTML += "&nbsp;&nbsp;\n";
                b.appendChild(tagbase);
                poco();
            }
            else if (b.textContent === "AudioCollection") {
                b.innerHTML += "&nbsp;&nbsp;\n";
                b.appendChild(tagbase);
                engine();
            }
            else if (b.textContent === "Counter") {
                b.innerHTML += "&nbsp;&nbsp;\n";
                b.appendChild(tagbase);
                engine();
            }
            else if (b.textContent === "DraggablePanel") {
                b.innerHTML += "&nbsp;&nbsp;\n";
                b.appendChild(tagbase);
                engine();
            }
            else if (b.textContent === "FloatAES") {
                b.innerHTML += "&nbsp;&nbsp;\n";
                b.appendChild(tagbase);
                poco();
            }
            else if (b.textContent === "InitializationEvent") {
                b.innerHTML += "&nbsp;&nbsp;\n";
                b.appendChild(tagbase);
                engine();
            }
            else if (b.textContent === "IntAES") {
                b.innerHTML += "&nbsp;&nbsp;\n";
                b.appendChild(tagbase);
                poco();
            }
            else if (b.textContent === "MenuGeneric") {
                b.innerHTML += "&nbsp;&nbsp;\n";
                b.appendChild(tagbase);
                poco();
            }
            else if (b.textContent === "Searcher") {
                b.innerHTML += "&nbsp;&nbsp;\n";
                b.appendChild(tagbase);
                engine(); poco();
            }
            else if (b.textContent === "StringAES") {
                b.innerHTML += "&nbsp;&nbsp;\n";
                b.appendChild(tagbase);
                poco();
            }
            else if (b.textContent === "Timer") {
                b.innerHTML += "&nbsp;&nbsp;\n";
                b.appendChild(tagbase);
                poco();
            }
            else if (b.textContent === "UI-Sizer") {
                b.innerHTML += "&nbsp;&nbsp;\n";
                b.appendChild(tagbase);
                engine();
            }
            function engine() {
                libtags.Addlibtag({ textContent: "#Engine", color: "#cfffff", backgroundColor: "#28d", parent: tagbase });
            }
            function editor() {
                libtags.Addlibtag({ textContent: "#Editor", color: "#cfffff", backgroundColor: "#28d", parent: b });
            }
            function poco() {
                //"Plain Old C# Object" (POCO)
                libtags.Addlibtag({ textContent: "#POCO", color: "#cfffff", backgroundColor: "#28d", parent: tagbase });
            }
        }
        function onclicksearch(Text) {
            var a = document.createElement("a");
            if (Text.replace("#POCO", "").trim() === "AESEncryption" ||
                Text.replace("#Engine", "").trim() === "AudioCollection" ||
                Text.replace("#Engine", "").trim() === "Counter" ||
                Text.replace("#Engine", "").trim() === "DraggablePanel" ||
                Text.replace("#POCO", "").trim() === "FloatAES" ||
                Text.replace("#Engine", "").trim() === "InitializationEvent" ||
                Text.replace("#POCO", "").trim() === "IntAES" ||
                Text.replace("#POCO", "").trim() === "MenuGeneric" ||
                Text.replace("#Engine", "").replace("#POCO", "").trim() === "Searcher" ||
                Text.replace("#POCO", "").trim() === "StringAES" ||
                Text.replace("#POCO", "").trim() === "Timer" ||
                Text.replace("#Engine", "").trim() === "UI-Sizer") {
                a.href = "UnityLibrary.html" + "?v=" + searchbar.value;
                setTimeout(() => {
                    a.click();
                }, 100);
            }
            else {
                a.href = "PrivateLibraryUnlink.html" + "?v=" + searchbar.value;
                setTimeout(() => {
                    a.click();
                }, 100);
            }
        }
        function searchbarinit() {
            if (window.location.pathname !== "/index.html" && window.location.pathname !== "/Lib/index.html") {
                searchbar.value = paramname.getParameterByName('v', window.location.href);
                document.title = searchbar.value;
            }
        }
        searchbarinit();
    }
}());
libsearch.init();