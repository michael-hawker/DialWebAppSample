// Type definitions for WinRT
// Project: 
// Definitions by: Michael Hawker (https://github.com/michael-hawker)
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/* *****************************************************************************
MIT License

Copyright (c) 2017 Microsoft

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
***************************************************************************** */

declare namespace Windows {
    export module UI {
        export module Input {
            export interface IRadialControllerButtonClickedEventArgs {
                contact: any; //RadialControllerScreenContact 
                simpleHapticsController: any; //Windows.Devices.Haptics.SimpleHapticsController;
            }
            export interface IRadialControllerButtonClickedEventArgs2 {
                contact: any; //RadialControllerScreenContact 
                simpleHapticsController: any; //Windows.Devices.Haptics.SimpleHapticsController;
            }
            export class RadialControllerButtonClickedEventArgs implements IRadialControllerButtonClickedEventArgs, IRadialControllerButtonClickedEventArgs2 {
                contact: any; //RadialControllerScreenContact 
                simpleHapticsController: any; //Windows.Devices.Haptics.SimpleHapticsController;
            }
            export interface RadialControllerButtonHoldingEventArgs {
                contact: any; //RadialControllerScreenContact 
                simpleHapticsController: any; //Windows.Devices.Haptics.SimpleHapticsController;
            }
            export interface RadialControllerButtonEventHandler {
                (sender: Windows.UI.Input.RadialController, e: Windows.UI.Input.RadialControllerButtonClickedEventArgs): void;
            }
            export class RadialController {
                /** Occurs when the user presses the dial. */
                onbuttonclicked: Windows.Foundation.TypedEventHandler<Windows.UI.Input.RadialController, Windows.UI.Input.RadialControllerButtonClickedEventArgs>;
                addEventListener(type: "buttonclicked", listener: Windows.Foundation.TypedEventHandler<Windows.UI.Input.RadialController, Windows.UI.Input.RadialControllerButtonClickedEventArgs>): void;
                removeEventListener(type: "buttonclicked", listener: Windows.Foundation.TypedEventHandler<Windows.UI.Input.RadialController, Windows.UI.Input.RadialControllerButtonClickedEventArgs>): void;
                //buttonHolding
                //buttonPressed
                //buttonReleased
                //controlAcquired
                //controlLost
                //rotationChanged
                //screenContractContinued
                menu: RadialControllerMenu;
                static createForCurrentView(): Windows.UI.Input.RadialController;
                static isSupported(): boolean;
                addEventListener(type: string, listener: Windows.Foundation.EventHandler<any>): void;
                removeEventListener(type: string, listener: Windows.Foundation.EventHandler<any>): void;
            }

            export class RadialControllerMenu { //IRadialControllerMenu
                isEnabled: boolean;
                items: Windows.Foundation.Collections.IVector<RadialControllerMenuItem>;
                getSelectedMenuItem(): RadialControllerMenuItem;
                selectMenuItem(menuItem: RadialControllerMenuItem);
                trySelectPreviouslySelectedMenuItem(): boolean;
            }

            export class RadialControllerMenuItem { //IRadialControllerMenuItem
                displayText: string;
                tag: any;
                static createFromFontGlyph(displayText: string, glyph: string, fontFamily: string, fontUri?: Windows.Foundation.Uri);
                static createFromIcon(displayText: string, icon: Windows.Storage.Streams.IRandomAccessStreamReference);
                static createFromKnownIcon(displayText: string, value: RadialControllerMenuKnownIcon)
                oninvoked: any;
            }

            export enum RadialControllerMenuKnownIcon {
                inkColor,
                inkThickness,
                nextPreviousTrack,
                penType,
                ruler,
                scroll,
                undoRedo,
                volume,
                zoom
            }
       }
    }
}
