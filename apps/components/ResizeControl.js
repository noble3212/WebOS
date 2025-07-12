class ResizeControl {
    constructor(canvas) {
        this.canvas = canvas;
        this.init();
    }

    init() {
        this.createResizeControls();
    }

    createResizeControls() {
        const resizeContainer = document.createElement('div');
        resizeContainer.className = 'resize-control';

        const widthInput = this.createInput('Width', this.canvas.width);
        const heightInput = this.createInput('Height', this.canvas.height);

        const resizeButton = document.createElement('button');
        resizeButton.innerText = 'Resize';
        resizeButton.onclick = () => {
            const newWidth = parseInt(widthInput.value);
            const newHeight = parseInt(heightInput.value);
            this.resizeCanvas(newWidth, newHeight);
        };

        resizeContainer.appendChild(widthInput);
        resizeContainer.appendChild(heightInput);
        resizeContainer.appendChild(resizeButton);
        document.body.appendChild(resizeContainer);
    }

    createInput(label, value) {
        const inputContainer = document.createElement('div');
        const inputLabel = document.createElement('label');
        inputLabel.innerText = label;

        const input = document.createElement('input');
        input.type = 'number';
        input.value = value;
        input.min = 1;

        inputContainer.appendChild(inputLabel);
        inputContainer.appendChild(input);
        return inputContainer;
    }

    resizeCanvas(newWidth, newHeight) {
        this.canvas.width = newWidth;
        this.canvas.height = newHeight;
        // Additional logic to redraw or adjust content can be added here
    }
}

export default ResizeControl;