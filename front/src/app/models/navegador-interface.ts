export interface projectsInterface {
    name: string;
    description: string,
    URL: string;
    image: string;
    _id: string;
    id_herramientas: string[];

}

export interface herramientasInterface{
    _id: String;
    name: String;
    type: String;
    ico: String;
  }

export interface bannersInterface {
    imgTitular: ImageInterface;
    logoTitular: ImageInterface;
    nombreTitular: string;
    profesionTitular: string;
    slidePersonal: SlideInterface[]
}

export interface ImageInterface {
    src: string,
    alt: string
}

export interface SlideInterface {
    text: string;
    id: string
}