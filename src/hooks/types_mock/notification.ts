export const blogs = [
  {
    id: 1,
    title: "Test uchun yaratilgan blog",
    date: "05.18.2024 - 12:24",
    views: "165",
    content: "Bu birinchi blog haqida batafsil ma'lumot.",
  },
  {
    id: 2,
    title: "Test uchun yaratilgan blog va matnlar ko‘p bo‘lishi mumkin.",
    date: "05.18.2024 - 12:24",
    views: "16k",
    content:
      "Bu ikkinchi blog haqida batafsil ma'lumot. Matni uzunroq bo‘lishi mumkin.",
  },
  {
    id: 3,
    title: "Test uchun yaratilgan blog",
    date: "05.18.2024 - 12:24",
    views: "165",
    content: "Bu uchinchi blog haqida batafsil ma'lumot.",
  },
];


export interface BlogItem {
    id: number;
    title: string;
    date: string;
    views: string;
  }
  
  export interface BlogListProps {
    blogs: BlogItem[];
    selectedBlog: number;
    onSelect: (id: number) => void;
  }


export interface BlogDetailsProps {
    title?: string;
    content?: string;
  }