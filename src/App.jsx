import React from "react";
import { Excalidraw } from "@excalidraw/excalidraw";

function App() {
  return (
    <div style={{ height: "100vh", width: "100vw", margin: 0, padding: 0 }}>
      <Excalidraw 
        theme="light"
        UIOptions={{
          canvasActions: {
            toggleTheme: true,
            export: { saveFileToDisk: true },
            loadScene: true,
          },
        }}
      />
    </div>
  );
}

export default App;