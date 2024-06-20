const Keypad = require('./keypad');
const { King, Queen, Rook, Bishop, Knight, Pawn } = require('./chessPieces');
const PhoneNumberGenerator = require('./phoneNumberGenerator');

const main = () => {
    const keypad = new Keypad();
    const generator = new PhoneNumberGenerator(keypad);

    console.log("Valid 7-digit phone numbers for King:");
    generator.printValidPhoneNumbersForPiece(new King());

    console.log("Valid 7-digit phone numbers for Queen:");
    generator.printValidPhoneNumbersForPiece(new Queen());

    console.log("Valid 7-digit phone numbers for Rook:");
    generator.printValidPhoneNumbersForPiece(new Rook());

    console.log("Valid 7-digit phone numbers for Bishop:");
    generator.printValidPhoneNumbersForPiece(new Bishop());

    console.log("Valid 7-digit phone numbers for Knight:");
    generator.printValidPhoneNumbersForPiece(new Knight());

    console.log("Valid 7-digit phone numbers for Pawn:");
    generator.printValidPhoneNumbersForPiece(new Pawn());
};

main();
