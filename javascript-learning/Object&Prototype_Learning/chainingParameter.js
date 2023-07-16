function getUser(id) {
  if (id <= 0) {
    return null;
  }

  return {
    id: id,
    username: "admin",
    profile: {
      avatar: "/avatar.png",
      language: "English",
    },
  };
}

let user = getUser(0);
let profile = user && user.profile;
let profile2 = user?.profile;

let avatar = profile2?.avatar;

console.log(avatar);
// console.log(avatar)

let defaultProfile = { default: "/default.png", language: "English" };
let user3 = getUser(3);
let profile3 = user?.profile ?? defaultProfile;
console.log(profile3);

let file = {
  read() {
    return "file content";
  },
  write(content) {
    console.log(`Writing ${content} to file...`);
    return true;
  },
};

console.log(file.compress?.());
