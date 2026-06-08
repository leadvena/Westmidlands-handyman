export interface ServiceItem {
  id: string;
  name: string;
  category: "carpentry-assembly" | "plumbing-heating" | "repairs-decorating" | "outdoor-garden" | "flooring-tiling";
  description: string;
  popular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  beforeImg: string;
  afterImg: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  date: string;
}

export interface OpeningHour {
  day: string;
  hours: string;
  status: "open" | "closed" | "limited";
}
