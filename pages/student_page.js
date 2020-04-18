let studentPage = function () {
  let txtName = element(by.name("name"));
  let txtContact = element(by.name("contact"));
  let drpSubject = element(by.name("subject"));
  let txtMarks = element(by.name("marks"));
  let btnSubmit = element(by.css("input[value=Submit]"));

  this.get = function (url) {
    browser.get(url);
  };

  this.setName = function (name) {
    txtName.sendKeys(name);
  };

  this.setContact = function (contact) {
    txtContact.sendKeys(contact);
  };
  this.setSubject = function (sub) {
    drpSubject
      .element(by.xpath("//option[contains(text(),'" + sub + "')]"))
      .click();
  };

  this.setMarks = function (marks) {
    txtMarks.sendKeys(marks);
  };
  this.clickSubmit = function () {
    btnSubmit.click();
  };
  this.verifyResult = function (verifyvalues, rowIndex) {
    let rows = element.all(by.tagName("tr"));
    // const resultvalues = [name, contact, sub, marks];
    for (i = 1; i <= verifyvalues.length; i++) {
      expect(
        element(
          by.xpath("//tr[" + rowIndex + "]//td[" + (i + 1) + "]")
        ).getText()
      ).toBe(resultvalues[i - 1]);
    }

    //Other way to fetch and check elements
    // expect(element(by.xpath("//tr[" + rowIndex + "]//td[2]")).getText()).toBe(
    //   name
    // );
    // expect(rows.get(rowIndex).element(by.xpath("//td[3]")).getText()).toBe(
    //   contact
    // );
    // expect(rows.get(rowIndex).element(by.xpath("//td[4]")).getText()).toBe(sub);
    // expect(rows.get(rowIndex).element(by.xpath("//td[5]")).getText()).toBe(
    //   marks
    // );
  };
};

module.exports = new studentPage();
