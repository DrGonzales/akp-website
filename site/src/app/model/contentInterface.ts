
export interface Section {
    titel: string;
    longtext: string;
    shorttext: string;
    secticons: Array<string>;
    gallerytag: string;
}

export interface Content {
    sections: Array<Section>;
}
