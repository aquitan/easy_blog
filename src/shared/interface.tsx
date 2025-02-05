export interface Posts {
  posts: Post[];
}

export interface Post {
  id: number | string;
  title: string;
  slug: string;
  desc: string;
  category: string;
  content: string;
  img: string;
  isFeatured: boolean;
  visit: number;
  createdAt?: string;
  updatedAt?: string;
}
