# learn-protractor-testing

## [Installing Protractor](http://www.protractortest.org/#/tutorial)

---

1. Make sure that you have Node.js / [install node.js](https://nodejs.org/en/download)

   After installation, version can be checked by:

   ```
   node -v
   npm -v
   ```

2. install protractor

---

```
npm install -g protractor
protractor --version
```

3. Run command

---

```
'webdriver-manager update'
```

It downloads browser specific drivers.

4. Find conf.js file path in installed protractor in local system. there will be example test file.
   (open cmd prompt from example folder to test ('cd path') / go to that example folder and open cmd prompt)

And, run the command

```
'protractor conf.js'
```

This command will execute the sample test cases in example component(example_spec))

## learning protractor

1. Download / Open VS Code.
2. Install support for Javascript (ESLint) and Typescript.
3. Create new folder in VS explorer OR in local system, and open VS code from there.
4. Inside that folder, create two sub folders named
   - conf
   - testcases
5. Copy conf.js file into conf folder and example_spec.js into testcases folder in VS code from the example folder which is in installed protractor.
6. In conf.js update location of spec file.
7. Run conf.js in termina,
   ```
   protractor conf.js
   ```

## learning jasmine functions

### common syntax for jasmine to test test cases

```
describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});
```

    - descibe block is a test suite which is like collection of test cases.
    - it block is a individual test case.
    - expect and toBe are matches, tests the expected and actual results.

- one describe can have multipe it blocks.

       browser.get()
       browser.getCurrentUrl()
       browser.getTitle()
       browser.sleep();
       browser.manage().window().maximize();

These are some of the selenium web-driver elemements for browser actions.

## Locators

---

There are two kinds of locators in Protractor.

1. Angular specific locators (for ex. ng-model, ng-repeater, ng-bind..)
2. Locators inherited from web driver.
   - id
   - name
   - className
   - tagname
   - linkTex
   - partialLinkText
   - css
   - xpath

And,

### Global functions:

    . element       (finds a single element)
    . elements.all  (finds multiple elements)

## Jasmine Framework

Jasmine is unit testing framework and is behavior-driven dvelopment framework for testing javascript code.

### Jasmine building blocks

- describe (Test Suite)
- it (Test case)
- beforeEach (Executes multiple times before executing every it block)
- afterEach (Executes multiple times after executing every it block)
- beforeAll (Executes one time before executing all it block)
- afterAll (Executes one time after executing all it block)

### And,

- fdescribe (Focused describe block)
- xdescribe (Disables describe block)
- fit block (Focused it block)
- xit block (disables it block)

SpecFile (.js)

    describe1

    it block1
    it block2
    -------

    describe2

    it block1
    it block2
    ---------

### Mouse Actions

- Mouse Hover
- Double Click
- Right Click
- Drag and Drop
