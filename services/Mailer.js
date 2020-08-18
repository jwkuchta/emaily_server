const sendgrid = require('sendgrid')
const helper = sendgrid // convention - it helps us create the mailer
const keys = require('../config/keys')

class Mailer extends helper.Mail {
    constructor({ subject, recipients }, content) {
        super()
        this.sendgridApi = sendgrid(keys.sendgridApiKey) // to communicate with the sendgrid Api
        this.from_email = new helper.Email('justyna.kuchta@gmail.com')
        this.subject = subject
        this.body = new helper.Content('text/html', content)
        this.recipients = this.formatAddresses(recipients)

        this.addcontent(this.body)
        // enable click tracking inside our email
        this.addClickTracking()
        this.addRecipients()
    }

    // turn recipients into an array of helper.Email objects
    formatAddresses = recipients => {
        return recipients.map(({ email }) => {
            return new helper.Email(email)
        })
    }

    addClickTracking = () => {
        const trackingSettings = new helper.TrackingSettings()
        const clickTracking = new helper.ClickTracking(true, true)

        trackingSettings.setClickTracking(clickTracking)
        this.addTrackingSetting(trackingSettings)
    }

    // take the list of helper.Email objects we created in formatAddresses and add them to the Mailer
    addRecipients = () => {
        const personalize = new helper.Personalization()
        this.recipients.forEach(recipient =>  personalize.addTo(recipient))
        this.addPersonalization(personalize)
    }

    // actually send it to SendGrid
    async send() {
        const request = this.sendgridApi.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: this.toJSON()
        })

        const response = this.sendgridApi.API(request)
        return response
    }
}

module.exports = Mailer

// helper comes from SendGrid. We can also use it for our recipients property which is an array of objects