class Utilities {
    /**
     * @static
     * @param {Array} arr
     * @returns {Array} arr
     */
    static shuffleArray(arr) {
        let tempArr = [];
        while (arr.length) {
            let i = Math.floor(Math.random() * Math.floor(arr.length));
            tempArr.push(arr[i]);
            arr.splice(i,1);
        }
        while (tempArr.length) {
            arr.push(tempArr.shift());
        }
        return arr;
    }
}

export default Utilities;