// pair programming with Lana
const wordSearch = (letters, word) => {
    if (letters.length !== 0) {
        let verticalArray = [];
        for (let i = 0; i < letters[0].length; i++) {
            verticalArray.push([]);
        }
        for (i = 0; i < letters.length; i++) {
            for (j = 0; j < letters[i].length; j++) {
                verticalArray[j].push(letters[i][j]);
            }
        }
        const verticalJoin = verticalArray.map(ls => ls.join(''));
        const horizontalJoin = letters.map(ls => ls.join(''));
        for (let column of verticalJoin) {
            for (let row of horizontalJoin) {
                if (column.includes(word) && row.includes(word)) {
                    return true;
                }
            }
        }
    }
    return false;
};

module.exports = wordSearch;
