export class homePageLukan {
    rozliseni() {
        cy.viewport(1920, 1080);
        return this;
    };
    hlavnistrana() {
        cy.visit("https://www.lukan.cz");
        return this;
    };
    aceeptCookies() {
        cy.contains('Accept');
        return this;
    };
    declineCookies() {
        cy.contains('Decline');
        return this;
    };
    overeniNazvuStranky() {
        cy.title().should('eq','Lukáš bloguje - Blog o všem možném i nemožném');
        return this;
    }
}