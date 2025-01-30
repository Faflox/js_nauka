//tworze klase
class Speaker{
    //private czyli niewidoczne i typ string
    private message: string = '';
    //constructor czyli jakie argumenty do funkjci
    constructor(private name: string){}


    //jesli wiadomosc obiektu nie ma jego imienia (this == self)
    get Message(){
        if(!this.message.includes(this.name))
        {
            throw Error("W komunikacie brakuje imienia mówwcy.");
        }
        return this.message;
    }

    //tworzy wiadomosc jesli istnieje imie w
    set Message(val: string){
        let tmpMessage = val;
        if(!val.includes(this.name)){
            tmpMessage = `${this.message} ${val}`;
        }
        this.message = tmpMessage;
    }
}

//tworze zmienna instancji speaker
const speaker = new Speaker('Janek');
//przypisuje wartosc do tego co tam ma w sobie
speaker.Message = 'Cześć';
console.log(speaker.Message);