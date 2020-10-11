function callsign(n) {

    let call = document.getElementById('input').value;

    let alfabet = {
        a: 'Alfa',
        b: 'Bravo',
        c: 'Charlie',
        d: 'Delta',
        e: 'Echo',
        f: 'Foxtrot',
        g: 'Golf',
        h: 'Hotel',
        i: 'India',
        j: 'Juliet',
        k: 'Kilo',
        l: 'Lima',
        m: 'Mike',
        n: 'November',
        o: 'Oscar',
        p: 'Papa',
        q: 'Quebec',
        r: 'Romeo',
        s: 'Siera',
        t: 'Tango',
        u: 'Uniform',
        v: 'Victor',
        w: 'Whiskey',
        x: 'Xray',
        y: 'Yankee',
        z: 'Zulu',
        '1': "One",
        '2': 'Two',
        '3': 'Three',
        '4': 'Four',
        '5': 'Five',
        '6': 'Six',
        '7': 'Seven',
        '8': 'Eight',
        '9': 'Nine',
        '0': 'Zero'
    };

    console.log(alfabet);
    console.log(call);

    let splited = call.split('');
    console.log(splited);

    let Temp = document.getElementById("output").innerHTML;

    for (let i = 0; i<=splited.length; i++) {
        if (splited[i] in alfabet)  {
            let a = (alfabet[splited[i]]);
            console.log(typeof(a));
            console.log(a);
            document.getElementById("output").innerHTML = `${a}`;
        }
        
    }

}