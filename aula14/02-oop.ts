type People = {
    name: string,
    age: number,
    address: string,
    email: string,
    phone: string
}

class Person {
    private _name: string
    private _age: number
    private _address: string
    private _email: string
    private _phone: string

    constructor({name, age, address, email, phone}: People) {
        this._name = name
        this._age = age
        this._address = address
        this._email = email
        this._phone = phone
    }

    get name() {
        return this._name
    }

    get age() {
        return this._age
    }

    get address() {
        return this._address
    }

    get email() {
        return this._email
    }

    get phone() {
        return this._phone
    }

    growOld(){
        this._age = this._age + 1
    }
}

const person1 = new Person({
    name: 'Jose Maria Sousa Santos',
    age: 23,
    address: 'X Street',
    email: 'jose.maria@gmail.com',
    phone: '11 1111-1111'
})

const person2 = new Person({
    name: 'Raimundo Nonato Sousa Santos',
    age: 20,
    address: 'X Street',
    email: 'rai.nona@gmail.com',
    phone: '22 2222-2222'
})

console.log(person1.name,person1.age)
console.log(person2.name, person2.age)

person1.growOld()
person2.growOld()

console.log(person1.age)
console.log(person2.age)