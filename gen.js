function password () {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let pswd = '';

    for(let i = 0; i < 32; i++) {
        pswd += alphabet.charAt(Math.floor(Math.random()*63));
    }

    //console.log(pswd);
    document.getElementById("pswrd").innerHTML = pswd;
}
password();
