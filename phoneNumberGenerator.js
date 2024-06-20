class PhoneNumberGenerator {
    constructor(keypad) {
        this.keypad = keypad;
    }

    printValidPhoneNumbersForPiece(piece) {
        let count = 0;
        for (let r = 0; r < 4; r++) {
            for (let c = 0; c < 3; c++) {
                const startDigit = this.keypad.getValue(r, c);
                if (startDigit !== -1 && startDigit !== 0 && startDigit !== 1) {
                    const visited = Array.from({ length: 4 }, () => Array(3).fill(false));
                    const currentNumber = [startDigit];
                    count += this.generatePhoneNumbers(r, c, 1, visited, piece, currentNumber);
                }
            }
        }
        console.log(`Total valid 7-digit phone numbers: ${count}`);
    }

    generatePhoneNumbers(row, col, length, visited, piece, currentNumber) {
        if (length === 7) {
            // console.log(currentNumber.join(''));
            return 1;
        }

        visited[row][col] = true;
        let count = 0;

        for (const [newRow, newCol] of piece.getMoves(row, col)) {
            if (this.keypad.isValidPosition(newRow, newCol) && !visited[newRow][newCol]) {
                const nextDigit = this.keypad.getValue(newRow, newCol);
                currentNumber.push(nextDigit);
                count += this.generatePhoneNumbers(newRow, newCol, length + 1, visited, piece, currentNumber);
                currentNumber.pop();
            }
        }

        visited[row][col] = false;
        return count;
    }
}

module.exports = PhoneNumberGenerator;
