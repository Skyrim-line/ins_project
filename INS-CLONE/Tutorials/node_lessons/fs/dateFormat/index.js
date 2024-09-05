// npm init

// 使用自己写的 convertDate 库函数
// const { convertDate } = require('./date.js');

// const today = new Date();
// const formattedDate = convertDate(today);
// console.log('Formatted Date:', formattedDate);

// 使用第三方库 moment

const moment = require('moment');
const newDT = moment().format('YYYY-MM-DD HH:mm:ss');
console.log('Using moment to get new Date:', newDT);