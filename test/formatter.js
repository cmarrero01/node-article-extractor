// Generated by CoffeeScript 1.12.6
(function() {
  suite('Formatter', function() {
    var cheerio, formatter;
    formatter = require("../src/formatter");
    cheerio = require("cheerio");
    test('exists', function() {
      return ok(formatter);
    });
    test('replaces links with plain text', function() {
      var html, origDoc;
      html = fs.readFileSync("./fixtures/test_businessWeek1.html").toString();
      origDoc = cheerio.load(html);
      eq(origDoc("a").length, 232);
      formatter(origDoc, origDoc('body'), 'en');
      return eq(origDoc("a").length, 0);
    });
    return test('doesn\'t drop text nodes accidentally', function() {
      var doc, html;
      html = fs.readFileSync("./fixtures/test_wikipedia1.html").toString();
      doc = cheerio.load(html);
      formatter(doc, doc('body'), 'en');
      html = doc.html();
      return ok(/is a thirteen episode anime series directed by Akitaro Daichi and written by Hideyuki Kurata/.test(html));
    });
  });

}).call(this);
