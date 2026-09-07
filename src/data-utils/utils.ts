const monthName: Record<number, string> = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
}

export function formatDate(year: number, month: number) {
    return `${monthName[month]} ${year}`;
}

export function formatDateRange(startYear: number, startMonth: number, endYear: number, endMonth: number) {
    return `${monthName[startMonth]} ${startYear} - ${monthName[endMonth]} ${endYear}`;
}