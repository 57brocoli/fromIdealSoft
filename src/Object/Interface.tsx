export interface User {
    id: number;
    name: string;
    login: string;
    avatar_url: string;
    html_url: string;
    repos_url: string;
}

export interface Artiste {
    id: number;
    name: string;
    description: string;
    featuredImage: string;
    musicLink:string
}

export const imageArtiste = {
    uri: 'https://pixelevent.site/assets/uploads/artiste/',
};