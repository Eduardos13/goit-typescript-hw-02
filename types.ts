export interface Image {
  id: string;
  urls: Urls;
}

interface Urls {
  full: string;
  regular: string;
  small: string;
}
