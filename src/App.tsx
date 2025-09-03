import { useState } from "react";
import type { FileItem } from "./lib/types";
import FileExplorer from "./components/file-explorer";
import { fileExplorerData } from "./lib/data";
import ScoreComponent from "./components/score-dial";

function App() {
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(null);
  const handleFileSelect = (file: FileItem | null) => {
    setSelectedFile(file);
  };

  const selectedFileId = selectedFile?.id || null;
  return (
    <div className="flex items-center gap-14 bg-white">
      <ScoreComponent score={selectedFile?.score} />
      <FileExplorer
        data={fileExplorerData}
        onFileSelect={handleFileSelect}
        selectedFileId={selectedFileId}
      />
    </div>
  );
}

export default App;
