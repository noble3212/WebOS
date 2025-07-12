class TextEditorWindow {
    constructor(canvas) {
        this.canvas = canvas;
        this.textArea = document.createElement('textarea');
        this.textArea.style.position = 'absolute';
        this.textArea.style.zIndex = '10';
        this.textArea.style.display = 'none';
        document.body.appendChild(this.textArea);

        this.textArea.addEventListener('blur', () => this.saveText());
        this.textArea.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.saveText();
            }
        });
    }

    openTextEditor(x, y, existingText = '') {
        this.textArea.value = existingText;
        this.textArea.style.left = `${x}px`;
        this.textArea.style.top = `${y}px`;
        this.textArea.style.display = 'block';
        this.textArea.focus();
    }

    saveText() {
        const text = this.textArea.value;
        const rect = this.textArea.getBoundingClientRect();
        this.canvas.addText(text, rect.left, rect.top);
        this.textArea.style.display = 'none';
    }

    closeTextEditor() {
        this.textArea.style.display = 'none';
    }
}

export default TextEditorWindow;