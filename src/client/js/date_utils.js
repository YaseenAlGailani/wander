function compareDates(start, end) {
    let date_start = new Date(start).getTime();
    let date_end = new Date(end).getTime();

    return date_start <= date_end;
}

function calculateDays(start, end) {
    let date_start = new Date(start).getTime();
    let date_end = new Date(end).getTime();
    let dayInMs = 24 * 60 * 60 * 1000;

    return Math.round((date_end - date_start) / dayInMs);
}

function getDayName(date) {
    return new Date(date).toLocaleDateString('en-GB', { weekday: 'long' });
}

export {
    compareDates, 
    calculateDays,
    getDayName
}