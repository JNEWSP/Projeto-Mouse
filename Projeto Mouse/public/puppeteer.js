const puppeteer = require('puppeteer');

async function moveMouse(x, y) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:3000');
  await page.mouse.move(x, y);

  await browser.close();
}

async function clickMouse() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:3000');
  await page.mouse.down();
  await page.mouse.up();

  await browser.close();
}

async function scrollMouse(direction) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:3000');
  await page.mouse.wheel({ delta: direction === 'up' ? -100 : 100 });

  await browser.close();
}

module.exports = { moveMouse, clickMouse, scrollMouse };