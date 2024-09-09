import { persistentAtom } from '@nanostores/persistent';

export const $page = persistentAtom("0");

export const homeelem = document.querySelector('.pagehome');
export const resumeelem = document.querySelector('.pageresume');
export const bookelem = document.querySelector('.pagebook');
export const pubelem = document.querySelector('.pagepub');
export const confelem = document.querySelector('.pageconf');
export const honorelem = document.querySelector('.pagehonor');
const myMap = new Map([
   ['home', homeelem],
   ['resume', resumeelem],
   ['book', bookelem],
   ['publications', pubelem],
   ['conferences', confelem],
   ['honors', honorelem]
]);
export const pages: string[] = ["home", "resume", "book", "publications", "conferences", "honors"];

$page.subscribe((page) => {
  for (let i=1; i<7; i++) {
     let mappage = myMap.get(pages[i-1]!);
     if (i == parseInt(page!)) {
       if (mappage!.classList.contains('navlink')) {
          console.log("3. removing navlink from ", i);
          mappage!.classList.remove('navlink');
       }
       console.log("3. adding myactive to ", i);
       mappage!.classList.add('myactive');
     } else {
       if (mappage!.classList.contains('myactive')) {
          console.log("1. removing myactive from ", i);
          mappage!.classList.remove('myactive');
       }
       console.log("4. adding navlink to ", i);
       mappage!.classList.add('navlink');
     }
  }
})



