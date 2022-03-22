export class ConversaoResponse{
    constructor(
        public base: string,
        public date: string,
        public rates: any){}
}

//{"base":"USD", "date":"2017-03-8","rates":{"BRL":3.1405}}