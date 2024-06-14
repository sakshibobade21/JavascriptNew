const fun1 = () => {
  let a = 10;

  const fun2 = () => {
    console.log("a: ", a);
  }

  a = 20;

  return fun2;
}

fun1()();


