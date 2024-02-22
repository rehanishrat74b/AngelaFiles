function FooBar(options) {
    this.options=options;
}
var fooBar = new FooBar({a: "alpha",b:"beta"});
fooBar.options;