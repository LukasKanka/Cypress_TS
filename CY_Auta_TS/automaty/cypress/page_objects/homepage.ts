export class AaaAuto {
  rozliseni() {
    cy.viewport(1920, 1080);
    return this;
  };

  hlavnistrana() {
    cy.visit("https://www.aaaauto.cz/");
    return this;
  };

  cookiespotvrzeni() {
    cy.contains("Pouze nezbytné cookies").click();
    return this;
  };

  hlavicka() {
    // logo AAA
    cy.get("#modern-header > header > div > div.headerMenu > a > svg").should(
      "be.visible",
    );
    //Koupit
    cy.get(
      "#modern-header > header > div > div.headerMenu > ul > li:nth-child(1) > a",
    )
      .should("be.visible")
      .trigger("mouseover");
    //  Prodat
    cy.get(
      "#modern-header > header > div > div.headerMenu > ul > li:nth-child(2) > a",
    )
      .should("be.visible")
      .trigger("mouseover");
    //  Vyměnit
    cy.get(
      "#modern-header > header > div > div.headerMenu > ul > li:nth-child(3) > a",
    )
      .should("be.visible")
      .trigger("mouseover");
    // Financovat
    cy.get(
      "#modern-header > header > div > div.headerMenu > ul > li:nth-child(4) > a",
    )
      .should("be.visible")
      .trigger("mouseover");
    // Kariéra
    cy.get(
      "#modern-header > header > div > div.headerMenu > ul > li:nth-child(5) > a",
    ).should("be.visible");
    // Ikona Lupy
    cy.get(
      "#modern-header > header > div > div.headerTools > span.headerToolsItem.searchButton > svg",
    ).should("be.visible");
    // Kontakty otvírací doby
    cy.get(
      "#modern-header > header > div > div.headerTools > a:nth-child(2) > svg",
    ).should("be.visible");
    // Garáž
    cy.get("#notifications-desktop > span > svg")
      .should("be.visible")
      .trigger("mouseover");
    // WhatsApp
    cy.get(
      "#modern-header > header > div > div.headerTools > a:nth-child(4) > svg > g > path:nth-child(4)",
    ).should("be.visible");
    // Telefóní linka
    cy.get(
      "#modern-header > header > div > div.headerTools > span.headerToolsItem.headerToolsItemContact.hasSubmenu.submenuLink > h3",
    )
      .should("be.visible")
      .trigger("mouseover");
    return this;
  };

  slider() {
    // api slidebar
    cy.get("body > div.modern2018.fullHeight.fullWidth > div").should(
      "be.visible",
    );
    return this;
  };

  filterbar() {
    // Značka
    cy.get("#hpFilterNG > form > div > div > div:nth-child(1)").should(
      "be.visible",
    );
    // Model
    cy.get("#hpFilterNG > form > div > div > div.select.disabled").should(
      "be.visible",
    );
    // Rok
    cy.get(
      "#hpFilterNG > form > div > div > div.multiselect.multiselect--large",
    ).should("be.visible");
    // Cena
    cy.get("#hpFilterNG > form > div > div > div:nth-child(4)").should(
      "be.visible",
    );
    // Kategorie
    cy.get(
      "#hpFilterNG > form > div > div > div.select.select--not-important",
    ).should("be.visible");
    // Hledat
    cy.get("#hpFilterNG > form > div > button").should("be.visible");
    return this;
  };

  clickMenuZnacka() {
    cy.get("#car_filter_make").click();
    return this;
  };

  vyberZnacky(znackaVyber) {
    cy.contains(znackaVyber).click();
    return this;
  };

  clickMenuFiltrModelu() {
    cy.get("#car_filter_model").click();
    return this;
  };

  vyberModeluAuta(typModelu) {
    cy.contains(typModelu).click();
    return this;
  };

  clickMenuStariAuta() {
    cy.get("#car_filter_yearMin-topForm").click();
    return this;
  };

  vyberStariAuta(stariVyber) {
    cy.contains(stariVyber).click();
    return this;
  };

  potvrzeniStariAuta() {
    cy.get("button[data-slider-filter-year-save]").click();
    return this;
  };

  clickMenuCenyAuta() {
    cy.get("#car_filter_priceMax-topForm").click();
    return this;
  };

  vyberCenyAuta(vyberCeny) {
    cy.contains(vyberCeny).click();
    return this;
  };

  potvrzeniCenyAuta() {
    cy.get("button[data-slider-filter-price-save]").click();
    return this;
  };

  clickMenuKategorieAuta() {
    cy.get("#car_filter_category").click();
    return this;
  };

  vyberKategorieAuta(vyberKategorie) {
    cy.contains(vyberKategorie).click();
    return this;
  };

  clickNaTlacitkoHledej() {
    cy.get('form[name="car_filter"]').submit();
    return this;
  }
};
