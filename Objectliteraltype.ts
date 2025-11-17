export type Mail = {
from:string;
to:string[];
subject:string;
body:string;
urgent:boolean;
}

export function processMail(mail:Mail){

    return `From :${mail.from} 
    TO:${mail.to}
    SUBJECT:${mail.subject}
    BODY:${mail.body}
    URGENT:${mail.urgent}   
    `
}

const mail: Mail = {
  from: "tushar@gmail.com",
  to: ["abc@gmail.com", "xyz@gmail.com"],
  subject: "Hello",
  body: "This is a test mail",
  urgent: true,
};

console.log(processMail(mail));


//We can have optional properties in the objects

export type Mail2 = {
    name:string;
    from:string;
    urgent?:boolean; // This is an optional property
}