// function for check input
exports.CheckInput = (inpt) => {
    let opt = inpt.includes('@')
    if (opt) return true;
    else return false;
}