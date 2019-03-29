module.exports = {
    // these are the permissions needed to get the first name
    GIVEN_NAME_PERMISSION: ['alexa::profile:given_name:read'],
    // these are the permissions needed to send reminders
    REMINDERS_PERMISSION: ['alexa::alerts:reminders:skill:readwrite'],
    // APL documents
    APLDocs: {
        launch: require('./documents/launchRequest.json'),
        intent: require('./documents/celebrityBirthdaysIntent.json'),
        help: require('./documents/helpIntent.json'),
    }
}