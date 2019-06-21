var postcss = require('postcss');

var defaultOpts = {
  replace: [],
};
module.exports = postcss.plugin('postcss-amp-process', function(opts) {
  opts = { ...defaultOpts, ...opts };
  return root => {
    if (opts.replace.length) {
      root.walkDecls(decl => {
        const inputFile =
          root.source && root.source.input && root.source.input.file;
        let value = decl.value;

        opts.replace.map(replaceString => {
          value = value.replace(replaceString[0], replaceString[1]);
        });

        decl.value = value;
      });
    }
    root.walkRules((rule, ruleIndex) => {
      if (ruleIndex === 0 && rule.selector.charAt(0) === '#') {
        rule.selector = ' ' + rule.selector;
      }
      rule.walkDecls((decl, index) => {
        decl.important = false;
        if (index == rule.nodes.length - 1) {
          let value = decl.value;
          var lastChar = value[value.length - 1];
          if (lastChar === '%') {
            decl.value += ' ';
          }
        }
      });
    });
  };
});
