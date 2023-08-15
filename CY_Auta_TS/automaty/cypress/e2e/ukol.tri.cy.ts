import { AaaAuto } from "cypress/page_objects/homepage";
import { Filtrovani } from "cypress/page_objects/filtrovani";

const acka = new AaaAuto();
const filtr = new Filtrovani();

// Filtry overeni
const znackaOvereni = "Škoda";
const modelOvereni = "Citigo";
const stariOvereni = "Rok od: 2013";
const cenaOvereni = "Cena do: 200 000 Kč";
const kategorieOvereni = "Malé a ECO vozy";
// Filtry vyber
const znackaVyber = "Škoda";
const typModelu = "Citigo";
const stariAuta = "Do 10 let";
const vyberCeny = "Do 200 000 Kč";
const vyberKategorie = "Úsporné vozy";

describe("Homepage AAA Auto", () => {
  beforeEach(() => {
    acka.hlavnistrana().rozliseni().cookiespotvrzeni();
  });

  it("Filtrování vozu škoda Citigo a ověření zobrazení výsledků", () => {
    acka
      .clickMenuZnacka()
      .vyberZnacky(znackaVyber)
      .clickMenuFiltrModelu()
      .vyberModeluAuta(typModelu)
      .clickMenuStariAuta()
      .vyberStariAuta(stariAuta)
      .potvrzeniStariAuta()
      .clickMenuCenyAuta()
      .vyberCenyAuta(vyberCeny)
      .potvrzeniCenyAuta()
      .clickMenuKategorieAuta()
      .vyberKategorieAuta(vyberKategorie)
      .clickNaTlacitkoHledej();
    filtr
      .filtrOvereniZnacky(znackaOvereni)
      .filtrOvereniModelu(modelOvereni)
      .filtrOvereniStari(stariOvereni)
      .filtrOvereniCeny(cenaOvereni)
      .filtrOvereniKategorie(kategorieOvereni);
  });
});
