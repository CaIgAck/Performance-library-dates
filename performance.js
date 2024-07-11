const {format} = require('date-fns/format');
const dayjs = require('dayjs');
const moment = require('moment');
const {DateTime} = require('luxon')


const operations = 10000*1000 //10000000

const getPerformance = (func) => {
    const start = performance.now();

    for (let index = 0; index < operations; index++) {
        func();
    }

    const end = performance.now();

    return `${Math.floor(end - start)} ms`;
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

const calculateDate = () => {
    return getPerformance(() => new Date().toLocaleDateString('en-GB'));
}

for (let index = 0; index < 5; index++) {
    const resultMoment = calculateMoment();
    const resultDateFns = calculateDateFns();
    const resultLuson = calculateLuxon();
    const resultDayJs = calculateDayjs();
    const resultDate = calculateDate();
    
    
    console.log(resultMoment, 'result moment | ', resultDateFns, 'result DateFns | ', resultLuson, 'result Luxon | ', resultDayJs, 'result DayJs | ', resultDate, 'result Date');    
}
