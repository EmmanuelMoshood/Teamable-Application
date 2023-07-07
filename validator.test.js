const { isEmailInvalid } = require('./validator')

test('valid email', () => {
    const testpayload = {
        name: "test name1",
        email: "test.email@example.com",
        interests: "testing"
    }
    const result = isEmailInvalid(testpayload)
    expect(result).toBe(false)
})

test('invalid email', () => {
    const testpayload = {
        name: "test name2",
        email: "test.email",
        interests: "testing"
    }
    const result = isEmailInvalid(testpayload)
    expect(result).toBe(true)
})