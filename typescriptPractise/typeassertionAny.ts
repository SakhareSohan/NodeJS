
// enum immutable
enum color{
    red = 1,
    green = 2,
    blue = 3
  }
  let abc1: color = color.red
  console.log(abc1)
  
  // any type
  let notSure: any = 4;
  notSure = "maybe a string instead";
  notSure = false;
  console.log(notSure)
  
  // type assertion
  let someValue: any = "this is a string";
  let strLength: number = (someValue as string).length;
  console.log(strLength)