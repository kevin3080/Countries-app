
export interface Country {
    name:         Name;
    currencies:   Currencies;
    capital:      string[];
    region:       string;
    subregion:    string;
    languages:    Languages;  
    flag:         string;  
    population:   number; 
    flags:        Flags;
    borders:      string[];
    tld:          string[];
}

export interface Currencies {
    VES: Ves;
}

export interface Ves {
    name:   string;
    symbol: string;
}


export interface Flags {
    png: string;
    svg: string;
    alt: string;
}

export interface Languages {
    spa: string;
}


export interface Name {
    common:     string;
    official:   string;
    nativeName: NativeName;
}

export interface NativeName {
    spa: Translation;
}

export interface Translation {
    official: string;
    common:   string;
}

