// Y-M-D
const addZero = (num) => {
    return num < 10 ? `0${num}` : num;
};

const convertDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = addZero(date.getMonth() + 1); // 月份加1，因为月份从0开始计数
    const day = addZero(date.getDate());
    const hours = addZero(date.getHours());
    const minutes = addZero(date.getMinutes()); // 添加前导零
    const seconds = addZero(date.getSeconds()); // 添加前导零
    const result = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    // console.log(result); // 输出格式化后的日期时间
    // 记得要返回值
    return result;
};

convertDate(); // 示例输出：2021-08-01 12:00:00

// 导出这个模块
module.exports = { convertDate };
