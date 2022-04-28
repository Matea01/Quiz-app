!+tab-generira kostur
extenzija je live server
emmet documentation
using rem

The CSS box-sizing property allows us to include the padding and border in an element's total width and height.
By default, the width and height of an element is calculated like this:

width + padding + border = actual WIDTH of an element
height + padding + border = actual HEIGHT of an element
so the element often appears bigger than you have set 
(because the element's border and padding are added to the element's specified width/height).
EXAMPLE1
    .div1 {
  width: 300px;
  height: 100px;
  border: 1px solid blue;
}

.div2 {
  width: 300px;
  height: 100px;
  padding: 50px;
  border: 1px solid red;
}
second one is bigger because it has padding included.
But with box sizing is like this:
.div1 {
  width: 300px;
  height: 100px;
  border: 1px solid blue;
  box-sizing: border-box;
}

.div2 {
  width: 300px;
  height: 100px;
  padding: 50px;
  border: 1px solid red;
  box-sizing: border-box;
}
both are the same size.

-p.choice-text pa enter stvara klasu choice-text tipa p
-let is improved var
-const is like let but user cannot update it
-spread operator [...]
-splice  method changes the contents of an array by removing or replacing existing
      elements and/or adding new in plece 
      example:
        const months = ['Jan', 'March', 'April', 'June'];
      months.splice(1, 0, 'Feb');
      // inserts at index 1
      console.log(months);
      // expected output: Array ["Jan", "Feb", "March", "April