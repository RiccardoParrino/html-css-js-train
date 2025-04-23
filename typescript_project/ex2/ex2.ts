type Person = {
    name: string
    surname: string
}

type Job = {
    jobName: string
    payment: number
}

type WorkerMan = Person & Job;

let company: WorkerMan[] = new Array();

const w1: WorkerMan = {
    name: "Marco",
    surname: "Rossi",
    jobName: "Informatico",
    payment: 1000
}

const w2: WorkerMan = {
    name: "Giovanni",
    surname: "Rossi",
    jobName: "Telematico",
    payment: 2000
}

company.push(w1);
company.push(w2);

type WorkerOrMan = Person | Job;

let society: WorkerOrMan[] = new Array();

const m1: WorkerOrMan = {
    name: "Giovanni",
    surname: "Verdi",
    jobName: "Telematico"
}

society.push(m1);





