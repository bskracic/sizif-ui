export function toTime(datetimeString) {
    const datetime = new Date(Date.parse(datetimeString));
    return datetime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit'});
}

export function toDate(datetimeString){
    const datetime = new Date(Date.parse(datetimeString));
    return datetime.toLocaleDateString();
}