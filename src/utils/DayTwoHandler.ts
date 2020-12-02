//--- Day 2: Password Philosophy ---
const passCheck = (input: string) => {
    const lines: String[] = input.split('\n');
    let count: number = 0;
    lines.forEach( p => {
        const sL: String[] = p.split(' ');
        const low: Number = Number(sL[0].split('-').shift()),
            high: Number = Number(sL[0].split('-').pop()),
            letter = sL[1].charAt(0),
            pw = sL[2].split('').reduce((pre, cur) => (cur === letter) ? ++pre : pre, 0);

            if ( pw >= low && pw <= high) {
                count++
            }
    });
    
    return count;
}

const yeah = (input: string) => {
    return "yeah"
}

export = {passCheck, yeah};