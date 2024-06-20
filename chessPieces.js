class King {
    getMoves(row, col) {
        return [
            [row - 1, col - 1], [row - 1, col], [row - 1, col + 1],
            [row, col - 1], [row, col + 1],
            [row + 1, col - 1], [row + 1, col], [row + 1, col + 1]
        ];
    }
}

class Queen {
    getMoves(row, col) {
        return [...new Rook().getMoves(row, col), ...new Bishop().getMoves(row, col)];
    }
}

class Rook {
    getMoves(row, col) {
        const moves = [];
        for (let i = 1; i < 4; i++) {
            moves.push([row + i, col], [row - i, col], [row, col + i], [row, col - i]);
        }
        return moves;
    }
}

class Bishop {
    getMoves(row, col) {
        const moves = [];
        for (let i = 1; i < 4; i++) {
            moves.push([row + i, col + i], [row - i, col - i], [row + i, col - i], [row - i, col + i]);
        }
        return moves;
    }
}

class Knight {
    getMoves(row, col) {
        return [
            [row - 2, col - 1], [row - 2, col + 1],
            [row - 1, col - 2], [row - 1, col + 2],
            [row + 1, col - 2], [row + 1, col + 2],
            [row + 2, col - 1], [row + 2, col + 1]
        ];
    }
}

class Pawn {
    getMoves(row, col) {
        return [
            [row - 1, col] // Moving upwards
        ];
    }
}

module.exports = { King, Queen, Rook, Bishop, Knight, Pawn };
