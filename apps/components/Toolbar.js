import React from 'react';

class Toolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTool: 'brush',
        };
    }

    handleToolChange = (tool) => {
        this.setState({ selectedTool: tool });
        this.props.onToolChange(tool);
    };

    render() {
        return (
            <div className="toolbar">
                <button 
                    className={this.state.selectedTool === 'brush' ? 'active' : ''} 
                    onClick={() => this.handleToolChange('brush')}
                >
                    🖌️ Brush
                </button>
                <button 
                    className={this.state.selectedTool === 'eraser' ? 'active' : ''} 
                    onClick={() => this.handleToolChange('eraser')}
                >
                    🧹 Eraser
                </button>
                <button 
                    className={this.state.selectedTool === 'rectangle' ? 'active' : ''} 
                    onClick={() => this.handleToolChange('rectangle')}
                >
                    ⬜ Rectangle
                </button>
                <button 
                    className={this.state.selectedTool === 'circle' ? 'active' : ''} 
                    onClick={() => this.handleToolChange('circle')}
                >
                    ⬤ Circle
                </button>
                <button 
                    className={this.state.selectedTool === 'text' ? 'active' : ''} 
                    onClick={() => this.handleToolChange('text')}
                >
                    ✏️ Text
                </button>
            </div>
        );
    }
}

export default Toolbar;