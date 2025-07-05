let zIndex = 1, appCount = 0;

function launchApp(name, url) {
  const desktop = document.getElementById('desktop');
  const win = document.createElement('div');
  win.className = 'window';
  win.style.top = `${50 + appCount * 30}px`;
  win.style.left = `${50 + appCount * 30}px`;
  win.style.width = '500px';
  win.style.height = '300px';
  win.style.zIndex = ++zIndex;

  const header = document.createElement('div');
  header.className = 'window-header';
  header.innerHTML = `<span>${name}</span><button onclick="closeApp(this)">✖</button>`;
  makeDraggable(win, header);

  const iframe = document.createElement('iframe');
  iframe.src = url;
  iframe.style.width = '100%';
  iframe.style.height = 'calc(100% - 30px)';
  iframe.style.border = 'none';

  // Create resize handle
  const resizeHandle = document.createElement('div');
  resizeHandle.className = 'resize-handle';
  resizeHandle.style.position = 'absolute';
  resizeHandle.style.width = '16px';
  resizeHandle.style.height = '16px';
  resizeHandle.style.right = '0';
  resizeHandle.style.bottom = '0';
  resizeHandle.style.cursor = 'se-resize';
  resizeHandle.style.background = '#444';

  // Add resize event listeners
  makeResizable(win, resizeHandle);

  win.style.position = 'absolute'; // ensure positioning for dragging & resizing
  win.append(header, iframe, resizeHandle);
  desktop.appendChild(win);
  addTaskbarButton(name, win);
  appCount++;
}

function closeApp(btn) {
  const win = btn.closest('.window');
  const btnId = win.getAttribute('data-task');
  document.getElementById(btnId)?.remove();
  win.remove();
}

function addTaskbarButton(name, win) {
  const tb = document.getElementById('taskbar');
  const id = 'tb-' + Date.now();
  win.setAttribute('data-task', id);
  const btn = document.createElement('div');
  btn.className = 'taskbar-btn';
  btn.id = id;
  btn.innerText = name;
  btn.onclick = () => {
    const z = ++zIndex;
    win.style.zIndex = z;
  };
  tb.appendChild(btn);
}

function makeDraggable(win, header) {
  let offsetX, offsetY;
  header.onmousedown = (e) => {
    offsetX = e.clientX - win.offsetLeft;
    offsetY = e.clientY - win.offsetTop;
    document.onmousemove = (e) => {
      win.style.left = `${e.clientX - offsetX}px`;
      win.style.top = `${e.clientY - offsetY}px`;
    };
    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;
    };
  };
}

function makeResizable(win, handle) {
  let isResizing = false;
  let startX, startY, startWidth, startHeight;

  handle.addEventListener('mousedown', e => {
    e.preventDefault();
    isResizing = true;

    startX = e.clientX;
    startY = e.clientY;

    const rect = win.getBoundingClientRect();
    startWidth = rect.width;
    startHeight = rect.height;

    // Disable pointer events on iframe while resizing for smoothness
    const iframe = win.querySelector('iframe');
    if (iframe) iframe.style.pointerEvents = 'none';

    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResize);
  });

  function resize(e) {
    if (!isResizing) return;

    let newWidth = startWidth + (e.clientX - startX);
    let newHeight = startHeight + (e.clientY - startY);

    // Minimum size clamp
    newWidth = Math.max(newWidth, 300);
    newHeight = Math.max(newHeight, 200);

    win.style.width = newWidth + 'px';
    win.style.height = newHeight + 'px';
  }

  function stopResize() {
    isResizing = false;

    const iframe = win.querySelector('iframe');
    if (iframe) iframe.style.pointerEvents = 'auto';

    window.removeEventListener('mousemove', resize);
    window.removeEventListener('mouseup', stopResize);
  }
}
