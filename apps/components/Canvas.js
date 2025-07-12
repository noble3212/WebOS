class Canvas {
    constructor(canvasElement) {
        this.canvas = canvasElement;
        this.context = this.canvas.getContext('2d');
        this.isDrawing = false;
        this.currentColor = '#000000';
        this.lineWidth = 5;
        this.init();
    }

    init() {
        this.canvas.addEventListener('mousedown', this.startDrawing.bind(this));
        this.canvas.addEventListener('mousemove', this.draw.bind(this));
        this.canvas.addEventListener('mouseup', this.stopDrawing.bind(this));
        this.canvas.addEventListener('mouseout', this.stopDrawing.bind(this));
    }

    startDrawing(event) {
        this.isDrawing = true;
        this.context.beginPath();
        this.context.moveTo(this.getMousePos(event).x, this.getMousePos(event).y);
    }

    draw(event) {
        if (!this.isDrawing) return;
        this.context.lineTo(this.getMousePos(event).x, this.getMousePos(event).y);
        this.context.strokeStyle = this.currentColor;
        this.context.lineWidth = this.lineWidth;
        this.context.stroke();
    }

    stopDrawing() {
        this.isDrawing = false;
        this.context.closePath();
    }

    getMousePos(event) {
        const rect = this.canvas.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    }

    setColor(color) {
        this.currentColor = color;
    }

    setLineWidth(width) {
        this.lineWidth = width;
    }

    clearCanvas() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    resizeCanvas(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
        this.clearCanvas();
    }
}

export default Canvas;