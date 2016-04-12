/**
 * Created by steffen on 12-04-2016.
 */
module.exports.jwtConfig = {
    secret: "ChangMeToARealSecretOurIWillBeHacked",
    tokenExpirationTime : 60*2, //seconds
    audience: "yoursite.net",
    issuer: "yourcompany@somewhere.com"
}
