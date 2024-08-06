function copycode(copybuttonid, textcopyid) {
    var copyButton = document.getElementById(copybuttonid);
    var textToCopy = document.getElementById(textcopyid);
    copyButton.addEventListener("click", function () {
        var text = textToCopy.textContent;

        var lines = text.split('\n');
        var processedLines = lines.map(function (line) {
            return line.substring(lines.length.toString().length + 1);
        });
        var processedCode = processedLines.join('\n');

        var tempTextArea = document.createElement("textarea");
        tempTextArea.value = processedCode;

        tempTextArea.style.position = "fixed";
        tempTextArea.style.top = 0;
        tempTextArea.style.left = 0;
        document.body.appendChild(tempTextArea);

        tempTextArea.select();
        document.execCommand("copy");

        document.body.removeChild(tempTextArea);

        copyButton.innerHTML = " ";
        if (typeof createSVGAnonymous === 'function') {
            var icon = createSVGAnonymous("28", "28");
            copyButton.appendChild(icon);
        }
        copyButton.innerHTML += " 已複製 ";
        setTimeout(function () {
            copyButton.innerHTML = " ";
            if (typeof createSVGCopy === 'function') {
                var icon = createSVGCopy("currentColor", "1em");
                copyButton.appendChild(icon);
            }
            copyButton.innerHTML += " Recopy ";
            copyButton.style.border = "0.1px solid #333";
        }, 2000);
    });
}