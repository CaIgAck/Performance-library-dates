const {format} = require('date-fns/format');
const dayjs = require('dayjs');
const moment = require('moment');
const {DateTime} = require('luxon')


const operations = 10000*1000 //10000000

const getPerformance = (func) => {
    const start = dayjs(); // если использовать обычный date.now(), то вычисления будут в рамках погрешности, поэтому не страшно

    for (let index = 0; index < operations; index++) {
        func();
    }

    const end = dayjs();

    return `${end.diff(start)} ms`;
}


const calculateMoment = () => {
    return getPerformance(() => moment().format("DD.MM.YYYY"));
}

const calculateDateFns = () => {
    return getPerformance(() => format(new Date(), "dd.MM.yyyy"));
}

const calculateLuxon = () => {
    return getPerformance(() => new DateTime(DateTime.DATE_SHORT));
}

const calculateDayjs = () => {
    return getPerformance(() => dayjs().format('DD.MM.YYYY'));
}

for (let index = 0; index < 5; index++) {
    const resultMoment = calculateMoment();
    const resultDateFns = calculateDateFns();
    const resultLuson = calculateLuxon();
    const resultDayJs = calculateDayjs();
    
    
    
    console.log(resultMoment, 'result moment | ', resultDateFns, 'result DateFns | ', resultLuson, 'result Luxon | ', resultDayJs, 'result DayJs');    
}
