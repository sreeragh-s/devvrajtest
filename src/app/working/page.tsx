'use client'
import React, { useEffect, useState } from 'react'
import { Sandpack } from "@codesandbox/sandpack-react";
import {
  SandpackProvider,
  SandpackConsole,
  SandpackFileExplorer,
  SandpackLayout,
  SandpackPreview,
  SandpackStack,
  SandpackCodeEditor,
} from "@codesandbox/sandpack-react";



export default function Page() {

    const files = {
        "/App.jsx": `
      import React from "react";
      
      export default function HelloWorld() {
        return <h1>Hello World</h1>;
      }`,
      "/NewFile.jsx": `
      import React from "react";
      
      export default function HelloWorld() {
        return <h1>New File</h1>;
      }`}


  return (
    <SandpackProvider
      files={files}
      theme="dark"
      template="vite-react"
    >
      <SandpackStack />
      <SandpackLayout>
        <SandpackCodeEditor
          showRunButton={true}
          showTabs={true}
          showLineNumbers={false}
          showInlineErrors={true}
          wrapContent
          closableTabs
        />
        <SandpackFileExplorer />
        <SandpackPreview
          showNavigator={true}
          showOpenNewtab={true}
          showOpenInCodeSandbox={false}
          showRestartButton={true}
          showRefreshButton={true}
        />
        <SandpackConsole />
      </SandpackLayout>
    </SandpackProvider>
  );
}
