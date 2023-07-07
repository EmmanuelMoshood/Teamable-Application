const { isEmailInvalid, isPayloadEmpty } = require('./validator')


//testing validitity of email
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



//testing the content of payload
test('empty payload', () => {
    const testpayload = {}
    const result = isPayloadEmpty(testpayload)
    expect(result).toBe(true)
})

test('empty payload', () => {
    const testpayload = {
        name: "test name2",
        email: "test.email",
        interests: "testing"
    }
    const result = isPayloadEmpty(testpayload)
    expect(result).toBe(false)
})