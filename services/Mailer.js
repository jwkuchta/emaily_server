const sendgrid = require('sendgrid')
const helper = sendgrid // convention - it helps us create the mailer
const keys = require('../config/keys')

class Mailer extends helper.Mail {
    constructor({ subject, recipient }, content) {
        super()
        this.from_email = new helper.Email('justyna.kuchta@gmail.com')
        this.subject = subject
        this.body = new helper.Content('text/html', content)
        this.recipients = this.formatAddresses(recipients)
    }
}

module.exports = Mailer