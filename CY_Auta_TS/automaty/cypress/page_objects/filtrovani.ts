export class Filtrovani {
  filtrOvereniZnacky(znackaOvereni) {
    cy.get(
      "#modern2019-list > div.flex.flexSB.flexAlignCenter.mv5.noprint > ul > li:nth-child(1) > span > span",
    )
      .contains(znackaOvereni)
      .should("be.visible");

    return this;
  };

  filtrOvereniModelu(modelOvereni) {
    cy.get(
      "#modern2019-list > div.flex.flexSB.flexAlignCenter.mv5.noprint > ul > li:nth-child(2) > span > span",
    )
      .contains(modelOvereni)
      .should("be.visible");
    return this;
  };

  filtrOvereniStari(stariOvereni) {
    cy.get(
      "#modern2019-list > div.flex.flexSB.flexAlignCenter.mv5.noprint > ul > li:nth-child(3) > span",
    )
      .contains(stariOvereni)
      .should("be.visible");
    return this;
  };

  filtrOvereniCeny(cenaOvereni) {
    cy.get(
      "#modern2019-list > div.flex.flexSB.flexAlignCenter.mv5.noprint > ul > li:nth-child(4) > span",
    )
      .contains(cenaOvereni)
      .should("be.visible");
    return this;
  };

  filtrOvereniKategorie(kategorieOvereni) {
    cy.get(
      "#modern2019-list > div.flex.flexSB.flexAlignCenter.mv5.noprint > ul > li:nth-child(5) > span > span",
    )
      .contains(kategorieOvereni)
      .should("be.visible");
    return this;
  };
}
