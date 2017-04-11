
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
    log("initializing dial");

    // Modify System Defaults to Only Show Volume and Next/Prev Track as per guidance.
    // https://docs.microsoft.com/en-us/windows/uwp/input-and-devices/windows-wheel-interactions
    var config = Windows.UI.Input.RadialControllerConfiguration.getForCurrentView();

    config.setDefaultMenuItems(<any>[Windows.UI.Input.RadialControllerSystemMenuItemKind.volume,
                                     Windows.UI.Input.RadialControllerSystemMenuItemKind.scroll]);

    var controller = Windows.UI.Input.RadialController.createForCurrentView();

    // Add our own item to respond to
    var mi = Windows.UI.Input.RadialControllerMenuItem.createFromKnownIcon("Undo/Redo", Windows.UI.Input.RadialControllerMenuKnownIcon.undoRedo);
    mi.addEventListener("invoked", (ev) => {
        log("invoked " + ev.target.displayText);
    });

    controller.menu.items.push(mi);

    controller.addEventListener("buttonclicked", (ev) => {
        log("dial pressed");
    })

    controller.addEventListener("rotationchanged", (ev) => {
        log("rotation changed: " + ev.detail[0].rotationDeltaInDegrees);
    });

    // To remove system defaults and just have your own...
    ////config.setDefaultMenuItems(<any>[]);

    log("win/dial initialized");
}
