function createMachine(name, status) {
  return {
    name: name,
    status: status,
  };
}

function createMachine2(name, status) {
  return {
    name,
    status,
  };
}

const name = "abc";
let name1 = "machine name";
let machine1 = {
  [name]: "server",
  "machine hours": 10000,
};

let server = {
  name: "Server",
  restart: function () {
    console.log("function");
  },
};

let server1 = {
  name: "Server",
  restart() {
    console.log("asdsadsa");
  },
};
