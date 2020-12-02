//--- Day 2: Password Philosophy ---
const passCount = (input: string) => {
    const lines: String[] = input.split('\n');
    let count: number = 0;
    lines.forEach( l => {
        const sL: String[] = l.split(' ');
        const low: Number = Number(sL[0].split('-').shift()),
              high: Number = Number(sL[0].split('-').pop()),
              letter: string = sL[1].charAt(0),
              pwCount: Number = sL[2].split('').reduce((pre, cur) => (cur === letter) ? ++pre : pre, 0);

        if ( pwCount >= low && pwCount <= high) {
            count++
        }
    });

    return count;
}

const passPosition = (input: string) => {
    const lines: String[] = input.split('\n');
    let count: number = 0;
    lines.forEach( l => {
        const sL: String[] = l.split(' ');
        const first: Number = Number(sL[0].split('-').shift()),
              second: Number = Number(sL[0].split('-').pop()),
              letter: string = sL[1].charAt(0),
              password: string = sL[2].toString(),
              indices: Number[] = [];
              
        for ( let i = 0; i < password.length; i++ ) {
            if (password[i] === letter) indices.push( i + 1 );
        }

        if (indices.includes(first) || indices.includes(second)) {
            if (indices.includes(first) !== indices.includes(second)) count++
        }
    });

    return count
}

export = {passCount, passPosition};