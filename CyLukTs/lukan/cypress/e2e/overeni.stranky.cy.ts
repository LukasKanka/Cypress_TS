import { homePageLukan} from "../page_objects/homepage";
const home = new homePageLukan;

describe('ověření nazvu stránky', () => {
    it('ověření názvu webu' , () => {
        home.hlavnistrana().rozliseni().aceeptCookies().overeniNazvuStranky()
    });
})

