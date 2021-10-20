const rewire = require("rewire")
const functions = rewire("./functions")
const showElement = functions.__get__("showElement")
// @ponicode
describe("showElement", () => {
    test("0", () => {
        let callFunction = () => {
            showElement(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            showElement(2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            showElement(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            showElement(-5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            showElement(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            showElement(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})
