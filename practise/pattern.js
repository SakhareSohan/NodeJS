//Pattern Programming

for (let i = 0; i < 8; i++){
    let row = "#".repeat(i);
    console.log(row)
  }

// output:
// #
// ##
// ###
// ####
// #####
// ######
// #######

for (let i = 0; i < 8 ; i++){
    let spaces = " ".repeat(7-i);
    let pattern = "#".repeat(i);
    console.log(spaces + pattern)
  }

// output:
//       #
//      ##
//     ###
//    ####
//   #####
//  ######
// #######