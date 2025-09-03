export const fileExplorerData = [
  {
    id: "1",
    name: "Documents",
    type: "folder",
    children: [
      {
        id: "2",
        name: "Contracts",
        type: "folder",
        children: [
          {
            id: "3",
            name: "Legal",
            type: "folder",
            children: [
              {
                id: "4",
                name: "Score.txt",
                type: "file",
                score: 80,
                extension: "txt",
              },
            ],
          },
        ],
      },
      {
        id: "5",
        name: "Agreements",
        type: "folder",
        children: [
          {
            id: "6",
            name: "Client",
            type: "folder",
            children: [
              {
                id: "7",
                name: "Score.txt",
                type: "file",
                score: 65,
                extension: "txt",
              },
            ],
          },
          {
            id: "8",
            name: "Vendor",
            type: "folder",
            children: [
              {
                id: "9",
                name: "Contract_A.pdf",
                type: "file",
                score: 92,
                extension: "pdf",
              },
              {
                id: "10",
                name: "Contract_B.docx",
                type: "file",
                score: 45,
                extension: "docx",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "11",
    name: "Reports",
    type: "folder",
    children: [
      {
        id: "12",
        name: "Q1_Report.xlsx",
        type: "file",
        score: 88,
        extension: "xlsx",
      },
      {
        id: "13",
        name: "Analysis.pdf",
        type: "file",
        score: 73,
        extension: "pdf",
      },
    ],
  },
];
