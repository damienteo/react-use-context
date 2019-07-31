export function authenticate(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "New name",
        dateOfBirth: "01/01/1991",
        email: "email@email.com"
      });
    }, 2500);
  });
}
