export function getTicketinfo(id:string|number){
    if(id==='string'){
        const parseID = id.split("-")[1];
        const numberID = parseInt(parseID);
        return `Processing Ticket: ${numberID}`;
    }
        return `Processing Ticket: ${id}`;
}

console.log(getTicketinfo("Tush-123"));