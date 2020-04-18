describe("mysuite", function()
{

    it("search test", function()
    {
        console.log("this is search test.........")                        // Each it block represents one spec.

    })
    it("advanced search test", function()
    {
        console.log("this is advanced search test...........")

    })

})

fdescribe("Focused describe block", function()
{

   it("it Test", function()
    {
        console.log("this is search test in fdescribe block.........") 

    })

    xit("x search test", function()                                         // xit disables it block
    {
        console.log("this is disabled search test...........")

    })

})

xdescribe("X describe block", function()                                    // xdescribe disables the describe block
{

    beforeAll(function(){
        console.log("this is launching App.........")
    })

    afterAll(function(){
        console.log("this is closing App.........")
    })

    beforeEach(function()
    {
        console.log("this is login.........")
    })

    afterEach(function()
    {
        console.log("this is log out.........")
    })


    fit("search test", function()
    {
        console.log("this is fit search test in xdescribe block.........")             // this it block will executes along with before&after blocks though its describe block is disabled.

    })
    it("advanced search test", function()
    {
        console.log("this is advanced search test...........")

    })

})