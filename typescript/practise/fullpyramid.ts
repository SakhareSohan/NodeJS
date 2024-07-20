for (let i: number = 0; i < 5; i++){
    let pattern: any = '';
    let spaces: any = ''; 
    // spaces
    for(let j: number = 5 - i - 1; j >= 0; j--){
      spaces = spaces.concat(" "); 
    }
    // patter
    for(let k: number = 0; k <= i; k++){
      pattern = pattern.concat('* ')
    }
    
    console.log(spaces+pattern);
  }
  /*
      *
     * *
    * * *
   * * * *
  * * * * *
  */