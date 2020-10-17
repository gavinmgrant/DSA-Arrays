const urlify = string => {
    const arr = string.split('');

    const urled = arr.map(char => {
        // if character is a space, replace with %20
        if (char === ' ') {
            return char = '%20';
        // or else return the original character     
        } else {
            return char;
        }
    })
    
    return urled.join('');
};

console.log(urlify('www.thinkful.com /tauh ida parv een'));