
export interface Card {
    titel: string;
    longtext: string;
    shorttext: string;
    icons: Array<string>;
    tag: string;
}

export interface Sections {
    tag: string;
    titel: string;
    text: string;
    cards: Array<Card>;
}

export interface Content {
    galleryContent: Array<Sections>;
    contact: any;
}
