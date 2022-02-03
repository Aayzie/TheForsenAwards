const textInputClassName = "TextInput_Text__ZY9Mi";

async function sleep(msec) {
    return new Promise(resolve => setTimeout(resolve, msec));
}

async function init() {
    while(true)
    {
        await sleep(100);
        var textInputs = document.getElementsByClassName(textInputClassName);
        if (textInputs.length > 0) {
            $("." + textInputClassName).sendkeys("Forsen");
            break;
        }
    }
}

init();