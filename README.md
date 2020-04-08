# learn-protractor-testing

## [Installing Protractor](http://www.protractortest.org/#/tutorial)
---------------------

1. Make sure that you have Node.js / [install node.js](https://nodejs.org/en/download)
	
    After installation, version can be checked by:
    
    ```
    node -v    
    npm -v
    ```

2. install protractor
---------------------

```
npm install -g protractor
protractor --version
```

3. Run command
---------------

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
3. Create  new folder in VS explorer OR in local system, and open VS code from there.
4. Inside that folder, create two sub folders named
    - conf
    - testcases
5. Copy conf.js file into conf folder and example_spec.js into testcases folder in VS code from the example folder which is in installed protractor.
6. In conf.js update location  of spec file.
7. Run conf.js in termina,
    ```
    protractor conf.js
    ```




