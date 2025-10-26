//1
const delayTask1 = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
};

const loggerTask1 = (time) => console.log(`Resolved after ${time}ms`);

delayTask1(2000).then(loggerTask1);
delayTask1(1000).then(loggerTask1);
delayTask1(1500).then(loggerTask1);


//2

const usersTask2 = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

const toggleUserStateTask2 = (allUsers, userName) => {
  return new Promise((resolve) => {
    const updatedUsers = allUsers.map((user) =>
      user.name === userName ? { ...user, active: !user.active } : user
    );
    resolve(updatedUsers);
  });
};

const loggerTask2 = (updatedUsers) => {
  console.log("Updated users list:");
  console.table(updatedUsers);
};


toggleUserStateTask2(usersTask2, "Mango").then(loggerTask2);
toggleUserStateTask2(usersTask2, "Lux").then(loggerTask2);


//3

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const makeTrans = (tx) => {
  const delay = rand(200, 500);

  return new Promise((res, rej) => {
    setTimeout(() => {
      const ok = Math.random() > 0.3;
      ok ? res({ id: tx.id, time: delay }) : rej(tx.id);
    }, delay);
  });
};

const okLog = ({ id, time }) =>
  console.log(` Transaction ${id} processed in ${time}ms`);

const errLog = (id) =>
  console.log(`Transaction ${id} failed. Please try again later.`);

makeTrans({ id: 70, amount: 150 }).then(okLog).catch(errLog);
makeTrans({ id: 71, amount: 230 }).then(okLog).catch(errLog);
makeTrans({ id: 72, amount: 75 }).then(okLog).catch(errLog);
makeTrans({ id: 73, amount: 100 }).then(okLog).catch(errLog);