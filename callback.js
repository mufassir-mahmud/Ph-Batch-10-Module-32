function dayWish(time, name){
    time(name)
}


function morning(name){
    console.log('Good morning', name);
}

function evening(name){
    console.log('Good evening', name);
}

function night(name){
    console.log('Good night', name);
}
dayWish(morning, 'Mufassir')
dayWish(evening, 'Mufassir')
dayWish(night, 'Mufassir')