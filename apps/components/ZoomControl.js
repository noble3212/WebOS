class ZoomControl {
    constructor(canvas) {
        this.canvas = canvas;
        this.zoomLevel = 1;
        this.minZoom = 0.1;
        this.maxZoom = 5;
        this.initControls();
    }

    initControls() {
        const zoomInButton = document.createElement('button');
        zoomInButton.innerText = 'Zoom In';
        zoomInButton.onclick = () => this.zoomIn();

        const zoomOutButton = document.createElement('button');
        zoomOutButton.innerText = 'Zoom Out';
        zoomOutButton.onclick = () => this.zoomOut();

        const zoomResetButton = document.createElement('button');
        zoomResetButton.innerText = 'Reset Zoom';
        zoomResetButton.onclick = () => this.resetZoom();

        const controlContainer = document.createElement('div');
        controlContainer.appendChild(zoomInButton);
        controlContainer.appendChild(zoomOutButton);
        controlContainer.appendChild(zoomResetButton);

        document.body.appendChild(controlContainer);
    }

    zoomIn() {
        if (this.zoomLevel < this.maxZoom) {
            this.zoomLevel += 0.1;
            this.updateCanvas();
        }
    }

    zoomOut() {
        if (this.zoomLevel > this.minZoom) {
            this.zoomLevel -= 0.1;
            this.updateCanvas();
        }
    }

    resetZoom() {
        this.zoomLevel = 1;
        this.updateCanvas();
    }

    updateCanvas() {
        this.canvas.style.transform = `scale(${this.zoomLevel})`;
        this.canvas.style.transformOrigin = 'top left';
    }
}

export default ZoomControl;