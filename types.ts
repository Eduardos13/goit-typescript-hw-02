export interface Image {
  id: string;
  urls: Urls;
  alt_description?: string;
  likes?: number;
}

interface Urls {
  full: string;
  regular: string;
  small: string;
}
