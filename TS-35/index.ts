interface IUsers {
	name: string,
	phone: string,
	email: string,
	animals?: string[],
	cars?: string[],
	hasChildren: boolean,
	hasEducation: boolean,
};


const users: IUsers[] = [
	{
		name: "Harry Felton",
		phone: "(09) 897 33 33",
		email: "felton@gmail.com",
		animals: ["cat"],
		cars: ["bmw"],
		hasChildren: false,
		hasEducation: true
		
	},
	{
		name: "May Sender",
		phone: "(09) 117 33 33",
		email: "sender22@gmail.com",
		hasChildren: true,
		hasEducation: true
	},
	{
		name: "Henry Ford",
		phone: "(09) 999 93 23",
		email: "ford0@gmail.com",
		cars: ["bmw", "audi"],
		hasChildren: true,
		hasEducation: false
	}
];


//TASK 1, TASK 2

const UsersName: Array<string> = [];

for (let key of users) {
    UsersName.push(key.name);
    if (key.cars) {
        console.log(`${key.name}: ${key.cars.length}`)
    } else if (key.cars === undefined) {
        console.log(`${key.name}: 0`)
    };
};

console.log(UsersName.toString());

//TASK 3

let UsersEducation: IUsers[] = users.filter((key:IUsers):boolean => key.hasEducation);

console.log(UsersEducation);

//TASK 4

let UsersAnimal:IUsers[] = users.filter((key:IUsers):string[] => key.animals);

console.log(UsersAnimal);

// TASK 5

function UsersCars () {
    for (let key of users) {
        if (key.cars) {
            console.log(`${key.name}: ${key.cars}`)
        };
    };
};

UsersCars();
