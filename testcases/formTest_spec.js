let studentPage = require("../pages/student_page");

describe("mySuite", function () {
  beforeAll(() => {
    studentPage.get("https://www.trycatchclasses.com/code/demo/angular4_crud/");
  });

  it("add record", function () {
    studentPage.setName("vijju");
    studentPage.setContact("India");
    studentPage.setSubject("JS");
    studentPage.setMarks("0");
    studentPage.clickSubmit();
    browser.sleep(3000);
    studentPage.verifyResult(["vijju", "India", "JS", "0"], 1);
  });

  it("add record", function () {
    studentPage.setName("Phanee");
    studentPage.setContact("India");
    studentPage.setSubject("Angular");
    studentPage.setMarks("100");
    studentPage.clickSubmit();
    browser.sleep(3000);
    studentPage.verifyResult(["Phanee", "India", "Angular"], 2);
  });
});
