function unlockOne() {
    document.getElementById('main-div').classList = 'hidden';
    document.getElementById('decoy-div').classList = 'visible';
    document.getElementById('login-div').classList = 'hidden';
}

function unlock() {
    document.getElementById('main-div').classList = 'visible';
    document.getElementById('decoy-div').classList = 'hidden';
}

function lock() {
    document.getElementById('main-div').classList = 'hidden';
    document.getElementById('decoy-div').classList = 'visible';
}