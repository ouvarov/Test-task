const toDate = (date: string) => {
    const newDate = new Date(date);
    const month = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    return `${newDate.getFullYear()} ${month[newDate.getMonth()]} ${newDate.getDate()}`;
};

export default toDate;
