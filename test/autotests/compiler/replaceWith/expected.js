var marko_template = module.exports = require("marko/html").t(__filename);

function render(input, out) {
  var data = input;

  out.w("<div replaced=\"test-replaceWith\"></div>");
}

marko_template._ = render;
