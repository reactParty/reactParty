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

    /**
     * @static
     * @param {Array} arr 
     * @param {Object} objToRemove
     * @returns {Array} arr
     */
    static removeFromArray(arr, objToRemove) {
        if (arr == null || objToRemove == null) return;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === objToRemove) {
                arr.splice(i,1);
            }
        }
        return arr;
    }
}

export default Utilities;