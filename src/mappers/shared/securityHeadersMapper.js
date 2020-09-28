const { addHeaders } = require("../../commons/addHeaders");

function toResponseWithSecurityHeaders(response ) {
  const header = [
    {
      "X-Frame-Options": "deny",
    },
    {
      "X-XSS-Protection": "1; mode=block",
    },
    {
      "X-Content-Type-Options": "nosniff",
    },
    {
      "Content-Security-Policy": "default-src https",
    },
    {
      "Referrer-Policy": "no-referrer",
    },
    {
      "Expect-CT": "max-age=86400",
    },
    {
      "Feature-Policy": "fullscreen 'none'",
    },
  ];
  addHeaders(response, header);
}

module.exports = toResponseWithSecurityHeaders;
