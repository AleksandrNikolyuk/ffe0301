
// ----------- Task 2 ------------------

const REGISTR = () => {
    let login = 'Alex';

    if (login === 'Alexxx') {
        console.log ( 'Welcome Alex' );
    } else {
        console.log ( 'No such user, please register now' );
    }
}
REGISTR();


const REGISTRATION = () => {
    let login = 'Alex';

    if (login === 'Alex') {
        return 'Welcome Alex';
    } else {
        return 'No such user, please register now';
    }
}
let result = REGISTRATION();
console.log ( result );


// ----------- Task 3 ------------------

const CHECK = () => {
    let openDoor = true;
    let onAlert = true;

    if (openDoor && onAlert) {
        console.log ( 'Alarm' );
    } else if (openDoor && !onAlert) {
        console.log ( 'Everything fine' );
    } else if (!openDoor && onAlert) {
        console.log ( 'Guarded room' );
    } else if (!openDoor && !onAlert) {
        console.log ( 'Please turn on alert' );
    }
}
CHECK();

