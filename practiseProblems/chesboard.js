// chessboard problem

for (let i = 0; i < 9; i++){
    let str = '';
    for (let j = 0; j < 8; j++){
      if ((i + j) % 2 == 0){
        str = str.concat('#');
      } else {
        str = str.concat(' ');
      }
    }
    console.log(str);
  }

//   output:
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 