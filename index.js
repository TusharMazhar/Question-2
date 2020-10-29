let notifications = [
    { message: 'Lorem', read: true },
    { message: 'Ipsum', read: true },
    { message: 'Dolor', read: true },
    { message: 'Sit', read: false },
    { message: 'Amet', read: true }
];

let allRead = true;

allRead = notifications.every(x => x.read === true);

console.log(allRead);