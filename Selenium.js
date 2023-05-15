const { Builder, By, Key, until } = require("selenium-webdriver");

async function performActions(username, password) {
  const driver = new Builder().forBrowser("chrome").build();
  try {
    await driver.get("http://localhost:3000/");

    const button = await driver.findElement(By.className("primary-button"));
    await driver.wait(until.elementIsVisible(button));
    await button.click();

    await driver.sleep(3000);

    const textField = await driver.findElement(By.css('input[type="text"]'));
    await driver.wait(until.elementIsVisible(textField));
    await textField.sendKeys(username);
    await driver.sleep(2000);
    const passField = await driver.findElement(
      By.css('input[type="password"]')
    );
    await driver.wait(until.elementIsVisible(passField));
    await passField.sendKeys(password);
    await driver.sleep(2000);
    const subbutton = await driver.findElement(By.id("sub_btn"));
    await subbutton.click();
    await driver.sleep(4000);
  } finally {
    await driver.quit();
  }
}

performActions("sammamsohail", "sammam12345");
performActions("sammamsohai", "sammam12345");
