const chalk = require('chalk')

console.log(chalk.blue('Hello world'));

console.log(chalk.blue('Hello')+ ' world'+chalk.red('!!!'));

console.log(chalk.blue.bgYellow.bold('Hello World'));

console.log(chalk.blueBright('Hello','World!','Foo','Bar','biz','wiz'));

console.log(chalk.red('Hello', chalk.underline.bgBlue.yellow('world'), '!'));

const miles = 18;
const calculateFeet = miles => miles * 5280;

console.log(chalk`
	There are {bold 5280 feet} in a mile.
	In {bold ${miles} miles}, there are {green.bold ${calculateFeet(miles)} feet}.
`);