// src/app.js

import Canvas from './components/Canvas.js';
import Toolbar from './components/Toolbar.js';
import ColorPicker from './components/ColorPicker.js';
import ZoomControl from './components/ZoomControl.js';
import ResizeControl from './components/ResizeControl.js';
import TextEditorWindow from './components/TextEditorWindow.js';

class App {
    constructor() {
        this.canvas = new Canvas();
        this.toolbar = new Toolbar();
        this.colorPicker = new ColorPicker();
        this.zoomControl = new ZoomControl();
        this.resizeControl = new ResizeControl();
        this.textEditorWindow = new TextEditorWindow();

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.render();
    }

    setupEventListeners() {
        // Add event listeners for toolbar actions, color changes, zooming, etc.
        this.toolbar.onToolChange(this.canvas.setTool.bind(this.canvas));
        this.colorPicker.onColorChange(this.canvas.setColor.bind(this.canvas));
        this.zoomControl.onZoomChange(this.canvas.setZoom.bind(this.canvas));
        this.resizeControl.onResize(this.canvas.resize.bind(this.canvas));
        this.textEditorWindow.onTextEdit(this.canvas.addText.bind(this.canvas));
    }

    render() {
        // Render the initial UI components
        document.body.appendChild(this.toolbar.render());
        document.body.appendChild(this.colorPicker.render());
        document.body.appendChild(this.zoomControl.render());
        document.body.appendChild(this.resizeControl.render());
        document.body.appendChild(this.textEditorWindow.render());
        document.body.appendChild(this.canvas.render());
    }
}

window.onload = () => {
    new App();
};