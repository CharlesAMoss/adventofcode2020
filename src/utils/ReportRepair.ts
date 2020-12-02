
    const twoItems = (input: string) => {
        const pair: Number[] = [];
        const splits: Number[] = input.split('\n').map( Number );
    
        for ( let i = 0; i < splits.length; i++ ) {
            for ( let j = 0; j < splits.length; j++ ) {

                const sum: Number = +splits[i] + +splits[j]
                if ( sum === 2020 ) {
                    pair.push(splits[i]);
                    pair.push(splits[j]);
                }
                if ( pair.length === 2 ) {
                    break;
                }
            }
        }
        return  +pair[0] * +pair[1]; 
    }
      
    const threeItems = (input: string) => {
        const trio: Number[] = [];
        const splits: Number[] = input.split('\n').map( Number );
    
        for ( let i = 0; i < splits.length; i++ ) {
            for ( let j = 0; j < splits.length; j++ ) {
                for ( let k = 0; k < splits.length; k++ ) {

                    const sum: Number = +splits[i] + +splits[j] + +splits[k]
                    if ( sum === 2020 ) {
                        trio.push(splits[i]);
                        trio.push(splits[j]);
                        trio.push(splits[k]);
                    }
                    if ( trio.length === 3 ) {
                        break;
                    }
                }
            }
        }
        return  +trio[0] * +trio[1] * +trio[2]; 
    }

export = {twoItems, threeItems};