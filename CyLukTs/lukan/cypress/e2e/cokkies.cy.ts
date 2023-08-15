import { homePageLukan} from "../page_objects/homepage";
const home = new homePageLukan;
describe('Test funkčnosti cookies tlačítek', () => {
    beforeEach(() => {
      home.hlavnistrana().rozliseni();
    });
    it('Potvrzení cookies', () => {
        home.aceeptCookies();
    });
    it('Zamítnutí cookies', () => {
        home.declineCookies()
    });
})