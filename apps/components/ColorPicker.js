class ColorPicker {
    constructor(onColorChange) {
        this.onColorChange = onColorChange;
        this.selectedColor = '#000000'; // Default color
        this.createColorPicker();
    }

    createColorPicker() {
        this.colorPickerElement = document.createElement('input');
        this.colorPickerElement.type = 'color';
        this.colorPickerElement.value = this.selectedColor;

        this.colorPickerElement.addEventListener('input', (event) => {
            this.selectedColor = event.target.value;
            this.onColorChange(this.selectedColor);
        });

        document.body.appendChild(this.colorPickerElement); // Append to body or a specific container
    }

    getColor() {
        return this.selectedColor;
    }
}

export default ColorPicker;