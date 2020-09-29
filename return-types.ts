let userInput: unknown;
let userName: string;

userInput = 10;
userInput = 'Pankaj';
if (typeof userInput === 'string') {
    userName = userInput;
}

function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
}

generateError('An error occurred', 500);