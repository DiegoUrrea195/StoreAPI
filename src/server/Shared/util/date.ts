export function createDate(): string {

    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();

    return `${year}-${month}-${day}`;

}