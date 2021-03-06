var marko_template = module.exports = require("marko/html").t(__filename),
    marko_helpers = require("marko/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    test_import_var_tag = marko_loadTag(require("./tags/test-import-var/renderer"));

function render(input, out) {
  var data = input;

  test_import_var_tag({
      name: "World",
      foo: input.foo,
      bar: input.bar,
      renderBody: function renderBody(out) {
        out.w("This is the body content");
      }
    }, out);
}

marko_template._ = render;
