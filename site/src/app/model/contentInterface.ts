
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

export interface Contact {
    icon: string;
    url: string;
    description: string;
}

export interface ContactConfig {
    contacts: Array<Contact>;
    bg: string;
}

export interface Content {
    galleryContent: Array<Sections>;
    contactConfig: ContactConfig;
}
