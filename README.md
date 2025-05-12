
# Mnemonic-24-word


**Mnemonic-24-word** is a JavaScript-based tool/library designed to generate secure 24-word mnemonic seed phrases compliant with the BIP39 standard. These mnemonic phrases are widely used in cryptocurrency wallets to securely back up and restore private keys.

This project provides a simple and efficient way to create 24-word seed phrases for blockchain wallets, ensuring strong cryptographic security by leveraging 256 bits of entropy.

## Features

- Generate 24-word mnemonic phrases (BIP39 compliant)
- Uses cryptographically secure randomness
- Lightweight and easy to integrate into JavaScript projects
- MIT licensed and open source

## Installation

Clone the repository or download the files directly:

```bash
git clone https://github.com/pook1337/Mnemonic-24-word.git
cd Mnemonic-24-word
```

Alternatively, you can copy the relevant JavaScript files (`24.js`) into your project.

## Usage

Here is a simple example of how to generate a 24-word mnemonic phrase:

```javascript
const { generateMnemonic24 } = require('./24.js');

const mnemonic = generateMnemonic24();
console.log('Your 24-word mnemonic phrase:', mnemonic);
```

*Note:* Adjust the import or require statement according to your environment and project structure.

## How It Works

- The generator creates 256 bits of entropy using a cryptographically secure random number generator.
- The entropy is then converted into a 24-word mnemonic phrase based on the BIP39 wordlist.
- The mnemonic phrase can be used to derive deterministic wallets compatible with most cryptocurrency platforms.

## Contributing

Contributions, suggestions, and improvements are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License. See the [LICENSE.txt](LICENSE.txt) file for details.

