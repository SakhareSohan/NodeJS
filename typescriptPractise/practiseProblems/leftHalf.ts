for (let i: number = 0; i < 5; i++){
    let pattern: any = '';
    let spaces: any = ''; 
    // spaces
    for (let k: number = 5; k > i + 1; k--){
      spaces = spaces.concat(" ");
    }
    // pattern
    for(let j: number = 0; j <= i; j++){
      pattern = pattern.concat("*"); 
    }
    console.log(spaces+pattern);
  }
  /*
      *
     **
    ***
   ****
  *****
  */