function solution(s, skip, index) {
    return s.split('').map((str) => {
        let text = str;
        for(let i = 0; i < index; i++) {
            text = String.fromCharCode((text.charCodeAt()+1 - 97) % 26 + 97);
            skip.indexOf(text) !== -1 && i--
        }
        return text;
    }).join('');
}
