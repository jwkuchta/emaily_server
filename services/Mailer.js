const sendgrid = require('sendgrid')
const helper = sendgrid // convention - it helps us create the mailer
const keys = require('../config/keys')

class Mailer extends helper.Mail {
    
}