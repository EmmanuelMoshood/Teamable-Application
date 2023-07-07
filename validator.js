

const isEmailInvalid = userObj => {
    return !userObj.email.includes("@")
}

const isPayloadEmpty = payload => {
    if( Object.keys(payload).length === 0){
        return true
    } 
    return false
}


module.exports = {
    isEmailInvalid,
    isPayloadEmpty
}
