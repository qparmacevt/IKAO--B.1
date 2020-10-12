function callsign(n) {

    let call = document.getElementById('input').value;
    call  = call.toUpperCase();
    let alfabet = {
        A: 'Alfa',
        B: 'Bravo',
        C: 'Charlie',
        D: 'Delta',
        E: 'Echo',
        F: 'Foxtrot',
        G: 'Golf',
        H: 'Hotel',
        I: 'India',
        J: 'Juliet',
        K: 'Kilo',
        L: 'Lima',
        M: 'Mike',
        N: 'November',
        O: 'Oscar',
        P: 'Papa',
        Q: 'Quebec',
        R: 'Romeo',
        S: 'Siera',
        T: 'Tango',
        U: 'Uniform',
        V: 'Victor',
        W: 'Whiskey',
        X: 'Xray',
        Y: 'Yankee',
        Z: 'Zulu',
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
            document.getElementById("output").innerHTML += `${a} <br>`;
        }
        
    }

}