describe("expectSpec", function () {
  it("toBe test", function () {
    let x = 100;
    expect(x).toBe(100);
    expect(x).not.toBe(200); // both the above tests will pass.
    expect(x).not.toBe(100); // test fails with a message " Expected 100 not to be 100." (the expected value should be any number other than 100 as the x value is 100)
  });

  it("toEqual test", function () {
    let x = 100;
    expect(x).toEqual(100);
    expect(x).not.toEqual(150);
  });

  it("toBe and toEqual when the variable is an object", function () {
    let x = [10, 20, 30]; // here, x is an object in javascript
    expect(x).toBe([10, 20, 30]); // test fails with a message "Expected [ 10, 20, 30 ] to be [ 10, 20, 30 ]." toBe checks x object with primitive values (strings, numbers etc)
    expect(x).toEqual([10, 20, 30]); // toEqual checks the values of x.
  });
  it("toBe with same object reference", function () {
    let x = [10, 20, 30];
    let y = x;
    expect(x).toBe(y); // toBe compares two objects And in toEqual considers as primitives.
    //expect(x).toEqual(y);
  });

  it("toContain example with object variable", function () {
    let arr = [10, 20, 30, 40, 50];
    expect(arr).toContain(30);
    expect(arr).toContain(100); // this fails, because  Expected [ 10, 20, 30, 40, 50 ] to contain 100.
    expect(arr).not.toContain(100); // this will pass as it is checking not case

    let names = ["phanee", "vijju", "nandu"];
    expect(names).toContain("nandu"); //pass
  });

  fit("toBeNaN and toBeNull", function () {
    // let x = null;
    // expect(x).toBeNull();
    // let value = 100;
    // expect(value).toBeNaN(); // fails with a messege  Expected 100 to be NaN.
    // expect(value).not.toBeNaN(); //pass
    let s = 0 / 0;
    expect(s).toBeNaN();
  });

  it("should check the title of web page", function () {
    browser.get("https://angularjs.org/");
    expect(browser.getTitle()).toBe(
      "AngularJS — Superheroic JavaScript MVW Framework"
    );
    expect(browser.getTitle()).toContain("JavaScript MVW Framework");
  });
});
