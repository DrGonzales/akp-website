
export interface Section {
    label: string;
    titel: string;
    sectiontext: string;
    secticons: Array<string>;
    gallerytag: string;
    gallerytext: string;
}

export interface Content {
    sections: Array<Section>;
}
