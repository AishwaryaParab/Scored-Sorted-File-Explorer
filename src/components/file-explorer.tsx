import { useMemo, useState } from "react";
import type { FileExplorerItem, FileItem, SortOrder } from "../lib/types";
import FileExplorerNode from "./file-explorer-item";
import SortDropdown from "./sort-dropdown";

interface FileExplorerProps {
  data: FileExplorerItem[];
  onFileSelect: (file: FileItem) => void;
  selectedFileId: string;
}

const FileExplorer = ({
  data,
  onFileSelect,
  selectedFileId,
}: FileExplorerProps) => {
  //   const [fileExplorer, setFileExplorer] = useState<FileExplorerItem[]>(data);
  const [sortOrder, setSortOrder] = useState<SortOrder>("ASC");

  const sortedData: FileExplorerItem[] = useMemo(() => {
    if (sortOrder === "NONE") return data;

    return [...data].sort((a, b) => {
      if (a.type !== b.type) {
        return a.type === "folder" ? -1 : 1;
      }
      const comparison = a.name
        .toLowerCase()
        .localeCompare(b.name.toLowerCase());
      return sortOrder === "ASC" ? comparison : -comparison;
    });
  }, [data, sortOrder]);

  const handleFileSelect = (file: FileItem) => {
    onFileSelect(file);
  };

  const handleSortChange = (newSortOrder: SortOrder) => {
    setSortOrder(newSortOrder);
  };

  return (
    <div className="flex-1">
      <SortDropdown sortOrder={sortOrder} onSortChange={handleSortChange} />
      <div className="h-full overflow-auto">
        <div className="max-w-[400px]">
          {sortedData.map((item) => (
            <FileExplorerNode
              key={item.id}
              item={item}
              onFileSelect={handleFileSelect}
              selectedFileId={selectedFileId}
              sortOrder={sortOrder}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FileExplorer;
