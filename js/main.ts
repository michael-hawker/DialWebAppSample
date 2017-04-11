
function log(msg)
{
    var div = document.getElementById("log");
    var p = document.createElement('p');
    p.textContent = msg;
    div.appendChild(p);

    console.log(msg);
}

let mode = 'system';

function modeSwitch(ev: Windows.Foundation.TypedEventHandlerArgumentType<Windows.UI.Input.RadialControllerMenuItem, Object>) {
    log("invoked " + ev.target.displayText);
    mode = ev.target.displayText;
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
    mi.addEventListener("invoked", modeSwitch);

    // Add a custom image item to the menu from our app package
    var mi2 = Windows.UI.Input.RadialControllerMenuItem.createFromIcon("Custom", Windows.Storage.Streams.RandomAccessStreamReference.createFromUri(new Windows.Foundation.Uri("ms-appx:///icons/gear.png")));
    mi2.addEventListener("invoked", modeSwitch);

    controller.menu.items.push(mi);
    controller.menu.items.push(mi2);

    controller.addEventListener("buttonclicked", (ev) => {
        log("dial pressed: " + mode);
    })

    controller.addEventListener("rotationchanged", (ev) => {
        log("rotation changed: " + ev.detail[0].rotationDeltaInDegrees + " in " + mode);
    });

    // To remove system defaults and just have your own...
    ////config.setDefaultMenuItems(<any>[]);

    log("win/dial initialized");
}
