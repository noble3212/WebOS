# webOS Application

## Overview
This project is a webOS application that simulates a desktop environment in the browser. It allows users to launch various applications, including a file explorer and a game center, with movable windows and local caching capabilities. This will now prob act as a hub for my apps- for now until i need better backends-

## Project Structure
```
webos-app
├── src
│   ├── index.html          # Main entry point for the webOS application
│   ├── script.js          # JavaScript for app management and functionality
│   ├── styles.css         # CSS styles for the application
│   ├── apps
│   │   ├── file-explorer.html  # HTML for the file explorer app
│   │   ├── game-center.html     # HTML for the game center app
│   │   └── games
│   │       └── sample-game.html # HTML for a sample game
│   └── utils
│       └── cache.js        # Utility functions for local caching
├── README.md               # Documentation for the project
```
WEBOS: https://noble3212.github.io/WebOS/
## Features
- **Movable App Windows**: Users can drag and reposition application windows on the desktop.
- **Local Caching**: The application uses local storage to cache data, allowing for persistent file management and game data.
- **File Explorer**: Users can create, edit, and delete files within a simple interface.
- **Game Center**: A hub for loading and playing games directly in the browser.

## Setup Instructions
1. Clone the repository to your local machine.
2. Open the `index.html` file in a web browser to launch the webOS application.
3. Use the icons on the desktop to navigate to the file explorer or game center.

## Usage Guidelines
- Click on the icons to launch applications.
- Use the file explorer to manage files stored in local storage.
- Access the game center to load and play games.

## Contributing
Feel free to submit issues or pull requests to enhance the functionality or features of the webOS application.
