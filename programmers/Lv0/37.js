function solution(a, b, c, d) {
    const arr = [a, b, c, d];
    let answer = 0;
    
    const result = arr.reduce((accu, curr) => {
        accu[curr] = (accu[curr] || 0) + 1;
        return accu;
    }, {});
    
    const valueList = Object.values(result);
    if(valueList.includes(4)) {
        // 4개 전부 같은 경우
        answer = Number(Object.keys(result)[0]) * 1111;
    } else if (valueList.includes(3)) {
        // 3개 같은 경우, 1개 다른 경우
        const pIndex = valueList.indexOf(3);
        const qIndex = valueList.indexOf(1);
        const p = Number(Object.keys(result)[pIndex]);
        const q = Number(Object.keys(result)[qIndex]);
        
        answer = Math.pow(10 * p + q, 2);
        
    } else if (valueList.includes(2)) {
        // 2개 같은 경우
        if(valueList.indexOf(2) === valueList.lastIndexOf(2)) {
            // 2, 1, 1인 경우
            const qIndex = valueList.indexOf(1);
            const rIndex = valueList.lastIndexOf(1);
            const q = Number(Object.keys(result)[qIndex]);
            const r = Number(Object.keys(result)[rIndex]);
            answer = q * r;
        } else {
            // 2, 2인 경우
            const pIndex = valueList.indexOf(2);
            const qIndex = valueList.lastIndexOf(2);
            const p = Number(Object.keys(result)[pIndex]);
            const q = Number(Object.keys(result)[qIndex]);
            answer = ((p + q) * Math.abs(p - q));
        }
    } else {
        // 전부 다른 경우
        const arr2 = Object.keys(result).map(Number);
        let min = 10;
        arr2.forEach((el, index) => {
            if(min > el) {
                min = el;
            }
        });
        answer = min;
    }

    return answer;
}
