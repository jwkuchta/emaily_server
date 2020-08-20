const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const validateEmails = emails => {
    // we need to put them in an array, trim spaces, and confirm if correct email format
    const invalidEmails = emails.split(',')
    .map(email => email.trim())
    .filter(email => regEx.test(email) === false)

    if (invalidEmails.length) {
        return `These emails are invalid: ${invalidEmails}`
    }
}