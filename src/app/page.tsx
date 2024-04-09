import { Sandpack } from "@codesandbox/sandpack-react";

const App = () => {
  const files = {}
  
  return (
    <SandpackProvider
      files={files} 
      theme="light" 
      template="nextjs"
    >
      <SandpackLayout>
        <SandpackCodeEditor />
        <SandpackPreview />
        <SandpackConsole />
      </SandpackLayout>
    </SandpackProvider>
  )  
}