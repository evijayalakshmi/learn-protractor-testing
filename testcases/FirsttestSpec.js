describe("A suite", function() {
    it("validate URL", function() {
        browser.get('https://angularjs.org/');
        browser.sleep(5000);
        browser.manage().window().maximize();
        expect(browser.getCurrentUrl()).toBe('https://angularjs.org/');
    });

    it("validate Title", function() {
        browser.get('https://angularjs.org/');
        browser.sleep(5000);
        browser.manage().window().maximize();
        expect(browser.getTitle()).toBe('AngularJS — Superheroic JavaScript MVW Framework');
    });

    fit("validate", function() {
        browser.get('http://www.protractortest.org/#/tutorial');
        browser.setLocation('api');
        expect(browser.getCurrentUrl()).toBe('http://www.protractortest.org/#/api');
    });
  });