function foo() {
  var bar;
  quux = 'someVal';
  function zip() {
    var quux;
    bar = true;
  }
  return zip;
}
