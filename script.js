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

  win.append(header, iframe);
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