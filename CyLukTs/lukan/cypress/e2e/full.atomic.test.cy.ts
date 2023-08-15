import { homePageLukan} from "../page_objects/homepage";
const home = new homePageLukan;
describe('Všechny testy po hromadě', () => {
    beforeEach(() => {
        home.hlavnistrana().rozliseni();
    });
    it('Potvrzení cookies', () => {
        home.aceeptCookies();
    });
    it('Zamítnutí cookies', () => {
        home.declineCookies()
    });
    it('ověření názvu webu' , () => {
        home.hlavnistrana().rozliseni().aceeptCookies().overeniNazvuStranky()
    });
})