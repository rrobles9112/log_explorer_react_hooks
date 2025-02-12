const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');
const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  const startUrl =
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.join(__dirname, "/../build/index.html"),
      protocol: "file:",
      slashes: true
    });

  console.log(process.env.ELECTRON_START_URL);

  mainWindow.loadURL(startUrl);
  mainWindow.on("closed", function() {
    mainWindow = null;
  });

  installExtension(REACT_DEVELOPER_TOOLS)
    .then(name => {
      console.log(`Added Extension:  ${name}`);
    })
    .catch(err => {
      console.log("An error occurred: ", err);
    });
}

app.on("ready", createWindow);

app.on("window-all-closed", function() {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function() {
  if (mainWindow === null) {
    createWindow();
  }
});
