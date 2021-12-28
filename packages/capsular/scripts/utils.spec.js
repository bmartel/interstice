import test from "ava";
//import { stub } from "sinon";

import { Filer, FilerContent } from "./utils";

// Filer
test("Can create a filer instance", (t) => {
  const file = new Filer();

  t.true(file instanceof Filer);
});

// FilerContent
test("Can create a filer content instance", (t) => {
  const file = new FilerContent();

  t.true(file instanceof FilerContent);
});

test("Find searches for the first match in contents and assigns the correct index", (t) => {
  const file = new FilerContent();

  file._contents = `
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
  `;

  file.find(", cons").run(() => {
    t.is(file._index, 31);
    t.is(file._fromIndex, 0);
    t.is(file._toIndex, 0);
  });
});

test("From applies current search index to beginning of a virtual selection", (t) => {
  const file = new FilerContent();

  file._contents = `
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
  `;

  file
    .find(", cons")
    .from()
    .run(() => {
      t.is(file._index, 31);
      t.is(file._fromIndex, 31);
      t.is(file._toIndex, 0);
    });
});

test("To applies current search index to end of a virtual selection", (t) => {
  const file = new FilerContent();

  file._contents = `
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
  `;

  file
    .find(", cons")
    .from()
    .find("elitr,")
    .to()
    .run(() => {
      t.is(file._index, 55);
      t.is(file._fromIndex, 31);
      t.is(file._toIndex, 61);
    });
});

test("Copy takes a snapshot of the current virtual selection and places it in a clipboard", (t) => {
  const file = new FilerContent();

  const contents = `
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
  `;
  file._contents = contents;

  file
    .find(", cons")
    .from()
    .find("elitr,")
    .to()
    .copy()
    .run(() => {
      t.is(file._index, 55);
      t.is(file._fromIndex, 31);
      t.is(file._toIndex, 61);
      t.is(file._contents, contents);
      t.is(file._clipboard, ", consetetur sadipscing elitr,");
    });
});

test("Cut takes a snapshot of the current virtual selection and places it in a clipboard, removing it also from the current contents", (t) => {
  const file = new FilerContent();

  const contents = `
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
  `;

  const cutContents = `
    Lorem ipsum dolor sit amet
    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
  `;

  file._contents = contents;

  file
    .find(", cons")
    .from()
    .find("elitr,")
    .to()
    .cut()
    .run(() => {
      t.is(file._index, 31);
      t.is(file._fromIndex, 31);
      t.is(file._toIndex, 31);
      t.not(file._contents, contents);
      t.is(file._contents, cutContents);
      t.is(file._clipboard, ", consetetur sadipscing elitr,");
    });
});

test("Paste inserts content from clipboard to current selection index", (t) => {
  const file = new FilerContent();

  const contents = `
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
  `;

  file._contents = contents;

  file
    .find(", cons")
    .from()
    .find("elitr,")
    .to()
    .cut()
    .run(() => {
      t.is(file._index, 31);
      t.is(file._fromIndex, 31);
      t.is(file._toIndex, 31);
      t.not(file._contents, contents);
      t.is(file._contents, cutContents);
      t.is(file._clipboard, ", consetetur sadipscing elitr,");
    })
    .paste()
    .run(() => {
      t.is(file._index, 31);
      t.is(file._fromIndex, 31);
      t.is(file._toIndex, 61);
      t.is(file._contents, contents);
      t.not(file._contents, cutContents);
      t.is(file._clipboard, ", consetetur sadipscing elitr,");
    });
});

test("Modify uses clipboard contents and a copy of the current instance", (t) => {
  const file = new FilerContent();

  const contents = `
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
  `;
  file._contents = contents;

  file
    .find(", cons")
    .from()
    .find("elitr,")
    .to()
    .copy()
    .modify((tmp) => {
      t.true(tmp instanceof FilerContent);
      t.not(tmp, file);
      t.not(tmp._contents, file._contents);
      t.is(tmp._contents, file._clipboard);
      t.is(tmp._contents, ", consetetur sadipscing elitr,");

      tmp.insert("foobar", true);

      return tmp;
    })
    .run(() => {
      t.is(file._index, 55);
      t.is(file._fromIndex, 31);
      t.is(file._toIndex, 61);
      t.is(file._contents, contents);
      t.is(file._clipboard, "foobar");
    });
});

test("Modify allows scoping of searches and other content modifications", (t) => {
  const file = new FilerContent();

  const contents = `
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
  `;
  const copyContents = `consetetur sadipscing elitr,
    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
 `;
  file._contents = contents;

  file
    .end()
    .find("cons")
    .from()
    .copy()
    .modify((tmp) => {
      tmp
        .find("Lorem")
        .from()
        .find("dolor")
        .to()
        .run(() => {
          t.is(tmp._index, 85);
          t.is(tmp._fromIndex, 252);
          t.is(tmp._toIndex, 90);
          t.is(file._clipboard, tmp._contents);
          t.is(tmp._contents, copyContents);
        });
      return tmp;
    })
    .run(() => {
      t.is(file._index, 33);
      t.is(file._fromIndex, 33);
      t.is(file._toIndex, 314);
      t.is(file._contents, contents);
      t.is(file._clipboard, copyContents);
    });
});
