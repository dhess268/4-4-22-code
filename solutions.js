
// returns the results of a rock paper scissors game

const rps = (p1, p2) => {
    if((p1 === 'rock' && p2 === 'scissors')|| (p1 === 'scissors' && p2 === 'paper') || (p1 === 'paper' && p2 === 'rock'))
      return 'Player 1 won!'
    else if(p1 === p2){
      return 'Draw!'
    }
    else{
      return 'Player 2 won!'
    }
  };


// Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n

// I didnt fully understand the rules of this problem so I had troubles figuring it out
  function eachCons(array, n) {
    //   let total = []
    //  for(let i = 0; i < array.length - n + 1; i++){
    //     let innertotal = []
    //     total.push(innertotal)
    //     for(let j = 0; j < Math.ceil(array/n); j++){
    //       total[i].push(j)
    //     }
    //   }
      
    //   return total
      let total = []
      if(array.length === 0){
        return []
      }
      for(let i = 0; i + n - 1< array.length; i+= 1){
        let innertotal = []
        
          for(let j = i; j < i + n; j++){
            innertotal.push(array[j])
          }
        
        total.push(innertotal)
      }
      
      
    //   for(let i = 0; i < array.length + n - 1; i+= n){
    //     console.log(i, (array.length - n + 1))
    //     if(i + n >= array.length){
    //       let innerarray = []
          
    //       for(let j = array.length - n; j < array.length; j++){
    //         innerarray.push(array[j])
    //       }
    //       total.push(innerarray)
    //     }
    //     else{
    //       let innerarray = []
    //       for(let j = i; j < n + i; j++){
    //         innerarray.push(array[j])
    //       }
    //       total.push(innerarray)
    //     }
    //   }
      
      
      return total
    }