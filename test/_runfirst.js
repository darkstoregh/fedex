const arr = [];

if (!process.env.FEDEX_ENV) arr.push('Error: FEDEX_ENV environment variable not provided.');
if (!process.env.FEDEX_KEY) arr.push('Error: FEDEX_KEY environment variable not provided.');
if (!process.env.FEDEX_PASSWORD) arr.push('Error: FEDEX_PASSWORD environment variable not provided.');
if (!process.env.FEDEX_ACCOUNT_NUMBER) arr.push('Error: FEDEX_ACCOUNT_NUMBER environment variable not provided.');
if (!process.env.FEDEX_METER_NUMBER) arr.push('Error: FEDEX_METER_NUMBER environment variable not provided.');

console.log(arr.join('\n'));

if (arr.length) process.exit();
