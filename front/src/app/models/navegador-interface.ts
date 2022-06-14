export interface projectsInterface {
    name: string;
    description: string,
    URL: string;
    image: imgProInterface;
    _id: string;
    id_herramientas: string[];

}

export interface imgProInterface {
    alt: string;
    link: string
}

export interface herramientasInterface{
    _id: String;
    name: String;
    type: String;
    ico: String;
  }

