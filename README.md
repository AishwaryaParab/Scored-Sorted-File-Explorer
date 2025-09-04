# 📂 Scored & Sorted File Explorer

A modern **File Explorer system** built with **React + TypeScript**, featuring animated score visualization, sorting options, and a clean UI powered by **TailwindCSS**.

## ✨ Features

- **Nested File & Folder Explorer**  
  Supports expandable/collapsible folders with files inside.

- **Scored Files**  
  Each file has an associated **score** represented with an animated circular dial.

- **Sorting Options**  
  Easily switch between:

  - Ascending order
  - Descending order
  - Original order

- **Beautiful UI (Figma Spec Matched)**

  - **Google Fonts Integration**: Space Grotesk, Poppins, Inter
  - Smooth animations with **Framer Motion**
  - TailwindCSS theme integration

- **Type-Safe Codebase**  
  Written entirely in **TypeScript** for better reliability and maintainability.

- **Reusable Components**  
  File nodes, folder nodes, score dial, and sorting dropdowns are modular.

## Data Structures

Currently implemented with a **tree-based structure**:

```ts
{
  id: "1",
  name: "Documents",
  type: "folder",
  children: [
    {
      id: "2",
      name: "Contracts",
      type: "folder",
      children: [ ... ]
    }
  ]
}
```

## Future Improvements

For scalability (thousands of files/folders), we can switch to a flattened structure with parentId and childrenIds:

```
"2": { id: "2", name: "Contracts", type: "folder", parentId: "1", childrenIds: ["3"] }
```

This improves:

- Lookup performance (O(1) by ID)
- Easier lazy-loading
- Efficient rendering of very large trees

## Installation & Setup

```
# Clone the repo
git clone https://github.com/AishwaryaParab/Scored-Sorted-File-Explorer.git

# Navigate to project folder
cd scored-file-explorer

# Install dependencies
npm install

# Run development server
npm run dev
```
