import { AaaAuto } from "cypress/page_objects/homepage";
const acka = new AaaAuto();

describe("Homepage AAA Auto", () => {
  beforeEach(() => {
    acka.hlavnistrana().rozliseni().cookiespotvrzeni();
  })
  it("horni hlavickova lista", () => {
    acka.hlavicka();
  });

  it("slider bamer", () => {
    acka.slider();
  });

  it("filter bar", () => {
    acka.filterbar();
  });
});
