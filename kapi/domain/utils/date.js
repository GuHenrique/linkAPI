function formattedDate(date){
    
    var day, month, year;

    var dateReturn = "";

    day = date.getDate().toString();
    month = (date.getMonth() + 1).toString();
    year = date.getFullYear();

    month = month.length == 1 ? "0"+month : month;
    day = day.length == 1 ? "0"+day : day;

    dateReturn = year+"-"+month+"-"+day;

    return  dateReturn;
}


module.exports = {
    formattedDate
}