const createError = () => {
	return new Error('Something went wrong!');
};

const err = createError();
console.log(err.stack);
	
const divide = (dividend, divisor) => {
	if (divisor === 0) {
		throw new Error('Division by zero not supported');
	}
	return dividend / divisor;
};
	
try {
throw new Error();
}catch (err) {
	// Handle the error here
}
	
try {
	someFunc();
} catch (err) {
	// Handle errors
}
	
function readProfiles(filePaths) {
	const profiles = [];
	for (const filePath of filePaths) {
		try {
		  const profile = readOneProfile(filePath);
		  profiles.push(profile);
		} catch (err) { // (A)
		  console.log('Error in: '+filePath, err);
		}
	}
}

function readOneProfile(filePath) {
	const profile = new Profile();
	const file = openFile(filePath);
	// ··· (Read the data in `file` into `profile`)
	return profile;
}

function openFile(filePath) {
	if (!fs.existsSync(filePath)) {
		throw new Error('Could not find file '+filePath); // (B)
	}
	// ··· (Open the file whose path is `filePath`)
}