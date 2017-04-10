
function log(msg)
{
    var div = document.getElementById("log");
    var p = document.createElement('p');
    p.textContent = msg;
    div.appendChild(p);

    console.log(msg);
}

if (typeof Windows != 'undefined')
{
    var controller = Windows.UI.Input.RadialController.createForCurrentView();

    // Add our own item to respond to
    var mi = Windows.UI.Input.RadialControllerMenuItem.createFromKnownIcon("Undo/Redo", Windows.UI.Input.RadialControllerMenuKnownIcon.undoRedo);
    mi.addEventListener('invoked', (ev) => {
        log("invoked " + ev.target.displayText);
    });

    controller.menu.items.push(mi);

    controller.onbuttonclicked = (ev) => {
        log("dial pressed");
    };

    controller.addEventListener('rotationchanged', (ev) => {
        log("rotation changed: " + ev.detail[0].rotationDeltaInDegrees);
    });

    log("win/dial initialized");
}
