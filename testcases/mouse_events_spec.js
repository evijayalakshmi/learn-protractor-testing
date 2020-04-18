describe("Mouse Actions", function () {
  // Mouse Over Action

  it("Mouse Over Action", function () {
    browser.waitForAngularEnabled(false); //Fo non angular applications we should enable this.

    browser.get(
      "https://opensource-demo.orangehrmlive.com/index.php/auth/login"
    );

    browser.manage().window().maximize();

    element(by.id("txtUsername")).sendKeys("Admin");
    element(by.id("txtPassword")).sendKeys("admin123");
    element(by.id("btnLogin")).click();

    browser.sleep(3000);

    var admin = element(by.id("menu_admin_viewAdminModule"));
    var usrsMgnt = element(by.id("menu_admin_UserManagement"));
    var users = element(by.id("menu_admin_viewSystemUsers"));

    browser
      .actions()
      .mouseMove(admin)
      .mouseMove(usrsMgnt)
      .mouseMove(users)
      .click()
      .perform();
    browser.sleep(5000);
  });

  // Mouse Double Click Action
  it("Mouse Double Click", function () {
    browser.waitForAngularEnabled(false);

    browser.get("http://testautomationpractice.blogspot.com/");
    browser.manage().window().maximize();
    var btn = element(by.xpath("//button[contains(text(),'Copy Text')]"));
    // 1st approach for Double click
    //browser.actions().mouseMove(btn).doubleClick().perform();

    // 2nd approach
    browser.actions().doubleClick(btn).perform();
    browser.sleep(5000);
  });
  // Mouse Right Click Action
  fit("Mouse Right Click", function () {
    browser.waitForAngularEnabled(false);
    browser.get("https://swisnl.github.io/jQuery-contextMenu/demo.html");
    browser.manage().window().maximize();
    var btnClass = element(by.className("context-menu-one btn btn-neutral"));
    //Right Click
    browser.actions().click(btnClass, protractor.Button.RIGHT).perform();
    browser.sleep(5000);
  });
  // Drag and Drop Action
  fit("drag and drop", function () {
    browser.get("https://codef0rmer.github.io/angular-dragdrop/#!/");
    browser.manage().window().maximize();
    var source_element = element(by.model("list1"));
    var target_element = element(by.model("list2"));
    browser.actions().dragAndDrop(source_element, target_element).perform();
    browser.sleep(5000);
  });
});
