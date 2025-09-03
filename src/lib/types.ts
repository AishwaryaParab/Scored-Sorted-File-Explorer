export interface FileItem {
  id: string;
  name: string;
  type: "file";
  score: number;
  extension?: string;
}

export interface FolderItem {
  id: string;
  name: string;
  type: "folder";
  children: (FileItem | FolderItem)[];
}

export type FileExplorerItem = FileItem | FolderItem;

export type SortOrder = "ASC" | "DESC" | "NONE";
