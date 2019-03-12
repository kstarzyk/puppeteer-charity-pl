'use strict';

const puppeteer = require('puppeteer');


const places = [
  {
    url: "https://www.pajacyk.pl/#index",
    selector: ".paj-click2"
  },
  {
    url: "https://dobryklik.pl",
    selector: "a.letter-o"
  },
  {
    url: "https://kociklik.pl",
    selector: "a.letter-o"
  },
  {
    url: "http://www.polskieserce.pl",
    selector: ".buttonPomoc"
  },
  {
    url: "http://www.okruszek.org.pl",
    selector: "img[title='Kliknij w okruszek']"
  },
  {
    url: "http://www.pmiska.pl",
    selector: "img.a"
  },
  // {
  //   url: "http://dobrewychowanie.pl/klikanie/index.php/klikaj-w-skrzynie",
  //   selector: "img[alt='skrzynia zamknieta']"
  // },
]

async function helloWorld() {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.waitFor(15000);
  for (let p of places) {
    await page.goto(p.url);
    await page.waitFor(3000);
    await page.evaluate(s => {
      document.querySelector(s).click();
    }, p.selector);
    await page.waitFor(3000);
  }

  await browser.close();
}

helloWorld();