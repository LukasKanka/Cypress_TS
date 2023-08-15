describe("Homepage AAA Auto", () => {
    it("Filtrování vozu škoda Citigo a ověření zobrazení výsledků", () => {
        cy.viewport(1920, 1080);
        // Na homepage AAA (aaaauto.cz) vyplnte filter bar a potvrdte.  
        cy.visit("https://www.aaaauto.cz/");
        // Potvrzení cookies
        cy.contains("Pouze nezbytné cookies").click();
        // Kliknutí na filtr značek
        cy.get("#car_filter_make").click();
        // Vybrání značky škoda
        cy.contains("Škoda").click();
        // Kliknutí na filtr modelů
        cy.get("#car_filter_model").click();
        // Vybrán model Citigo
        cy.contains("Citigo").click();
        // Kliknutí Stáří Vozu
        cy.get("#car_filter_yearMin-topForm").click();
        // Nastavení ve výběru vozu do stáří deseti let 
        cy.contains('Do 10 let').click();
        cy.get("button[data-slider-filter-year-save]").click();
        // Kliknutí na Vyberte cenu
        cy.get("#car_filter_priceMax-topForm").click();
        cy.contains("Do 200 000 Kč").click();
        cy.get("button[data-slider-filter-price-save]").click();
        // Kliknutí na Vyberte typ vozů
        cy.get("#car_filter_category").click();
        cy.contains("Úsporné vozy").click()
        // Hledej
        cy.get('form[name="car_filter"]').submit();
        // Zkontrolovat výsledek filtrovaní
        cy.get("#modern2019-list > div.flex.flexSB.flexAlignCenter.mv5.noprint > ul > li:nth-child(1) > span > span").contains("Škoda").should("be.visible");
        cy.get('#modern2019-list > div.flex.flexSB.flexAlignCenter.mv5.noprint > ul > li:nth-child(2) > span > span').contains("Citigo").should("be.visible");
        cy.get("#modern2019-list > div.flex.flexSB.flexAlignCenter.mv5.noprint > ul > li:nth-child(3) > span").contains("Rok od: 2013").should("be.visible");
        cy.get("#modern2019-list > div.flex.flexSB.flexAlignCenter.mv5.noprint > ul > li:nth-child(4) > span").contains("Cena do: 200 000 Kč").should("be.visible");
        cy.get("#modern2019-list > div.flex.flexSB.flexAlignCenter.mv5.noprint > ul > li:nth-child(5) > span > span").contains("Malé a ECO vozy").should("be.visible");
});
});