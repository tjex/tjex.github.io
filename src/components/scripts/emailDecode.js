// from https://css-tricks.com/how-to-safely-share-your-email-address-on-a-website/#aa-the-javascript-approach
// decodes my encoded email with base64
var encEmail = "dGpleEB0amV4Lm5ldA==";
const form = document.getElementById("denc");
form.setAttribute("href", "mailto:".concat(atob(encEmail)));
