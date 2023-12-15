function parseFen(fen) {
    const [board, activeColor, castling, enPassant, halfMoves, fullMoves] = fen.split(' ');
    const ranks = board.split('/');
    const pieces = ranks.map(rank => rank.split('').reduce((acc, char) => {
        if (/\d/.test(char)) {
            return acc + ' '.repeat(Number(char));
        }
        return acc + char;
    }, ''));
    return {
        pieces: pieces.join('').split(''),
        activeColor,
        castling,
        enPassant,
        halfMoves: Number(halfMoves),
        fullMoves: Number(fullMoves),
    };
}

const fenString = 'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e3 0 1';
const parsedFen = parseFen(fenString);

console.log('Parsed FEN:', parsedFen);

