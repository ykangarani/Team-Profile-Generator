const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "ykangarani";
    const employeeInstance = new Engineer("Yousef", 2, "kangarani.yousef1991@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "ykangarani";
    const employeeInstance = new Engineer("Yousef", 2, "kangarani.yousef1991@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Yousef", 2, "kangarani.yousef1991@gmail.com", "ykangarani");
    expect(employeeInstance.getRole()).toBe(returnValue);
});