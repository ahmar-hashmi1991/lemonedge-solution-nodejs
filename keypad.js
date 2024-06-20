class Keypad {
    constructor() {
        this.layout = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [-1, 0, -1] // -1 for * and #
        ];
    }

    getValue(row, col) {
        if (this.isValidPosition(row, col)) {
            return this.layout[row][col];
        }
        return -1;
    }

    isValidPosition(row, col) {
        return row >= 0 && row < 4 && col >= 0 && col < 3 && this.layout[row][col] !== -1;
    }
}

module.exports = Keypad;
