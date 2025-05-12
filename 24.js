const bip39 = require('bip39');
const fs = require('fs');

const numberOfMnemonics = 100; // Number of mnemonics to generate
const outputFile = 'mnemonic.txt';

let mnemonics = '';

for (let i = 0; i < numberOfMnemonics; i++) {
    // Generate 24-word mnemonic (256 bits entropy)
    const mnemonic = bip39.generateMnemonic(256);
    mnemonics += mnemonic + '\n';
}

fs.writeFileSync(outputFile, mnemonics);

console.log(`Generated ${numberOfMnemonics} mnemonics and saved to ${outputFile}`);
