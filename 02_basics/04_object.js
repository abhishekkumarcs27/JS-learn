// const tinderUser = new Object() ///singleton  object


// const tinderUser = {} //non singleton object

// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false

// console.log(tinderUser);

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "ABHISHEK ",
//             lastname: "KUMAR"
//         }
//     }
// }

// console.log(regularUser.fullname.userfullname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);


// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
// ]

// users[1].email                        //we can use .dot for objets
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "javascript",
    price: "999",
    courseInstructor: "ABHSIHEK KUMAR",
    
}

// course.courseInstructor

const {courseInstructor: instructor} = course

//  console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "ABHI",
//     "coursename": "js",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]