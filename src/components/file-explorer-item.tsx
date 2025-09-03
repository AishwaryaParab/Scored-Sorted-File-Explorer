import { ChevronDown, ChevronRight, File, Folder } from "lucide-react";
import { useMemo, useState } from "react";
import type { FileExplorerItem, FileItem, SortOrder } from "../lib/types";

interface FileExplorerNodeProps {
  item: FileExplorerItem;
  onFileSelect: (file: FileItem) => void;
  selectedFileId: string;
  sortOrder: SortOrder;
}

const FileExplorerNode = ({
  item,
  onFileSelect,
  selectedFileId,
  sortOrder,
}: FileExplorerNodeProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = (item: FileExplorerItem) => {
    if (item.type === "folder") {
      setIsExpanded(!isExpanded);
    } else {
      onFileSelect(item);
    }
  };

  // Sort children recursively
  const sortedChildren = useMemo(() => {
    if (item.type !== "folder" || !item.children) return [];

    if (sortOrder === "NONE") return item.children;

    return [...item.children].sort((a, b) => {
      if (a.type !== b.type) {
        return a.type === "folder" ? -1 : 1;
      }
      const comparison = a.name
        .toLowerCase()
        .localeCompare(b.name.toLowerCase());
      return sortOrder === "ASC" ? comparison : -comparison;
    });
  }, [item, sortOrder]);

  return (
    <div className="pl-4">
      <div
        className={`flex items-center gap-2 cursor-pointer py-1`}
        onClick={() => handleClick(item)}
      >
        {item.type === "folder" && isExpanded && (
          <ChevronDown className="w-5 h-5" />
        )}
        {item.type === "folder" && !isExpanded && (
          <ChevronRight className="w-5 h-5" />
        )}
        {item.type === "folder" ? (
          <Folder className="w-5 h-5" />
        ) : (
          <File className="w-5 h-5" />
        )}
        <p>{item.name}</p>
      </div>

      {item.type === "folder" && isExpanded && (
        <div className="pl-6 relative">
          <div className="absolute left-2 top-0 bottom-0 w-[1px] bg-[#E0E0E0]" />
          {sortedChildren.map((node) => (
            <FileExplorerNode
              key={node.id}
              item={node}
              onFileSelect={onFileSelect}
              selectedFileId={selectedFileId}
              sortOrder={sortOrder}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FileExplorerNode;
