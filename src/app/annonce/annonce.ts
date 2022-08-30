export class Annonce {
  id: number | undefined;
  contenu: string;

  constructor(
    contenu: string = "") {
    this.contenu = contenu;
  }
}
