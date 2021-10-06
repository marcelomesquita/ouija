import cryptoRandomString from 'crypto-random-string';

function getRandomInteger(min = 0, max = 100) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomString(size = getRandomInteger(0, 10)) {
	return cryptoRandomString({length: size, type: 'ascii-printable'});
}

export { getRandomInteger, getRandomString }
