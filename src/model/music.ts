export interface Image {
    url: string;
    width: number;
    heigth: number;
}

export interface Album {
    id: string;
    name: string;
    embedUrl?: string;
    externalUrl?: string;
    images?: Image[];
}

export interface Artist {
    id: string;
    name: string;
    externalUrl?: string;
}

export default interface Music {
    id: string;
    name: string;
    embedUrl?: string;
    externalUrl?: string;
    artists?: Artist[];
    album?: Album;
}
