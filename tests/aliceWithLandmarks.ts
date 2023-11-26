import { writeFile } from 'fs/promises';
import epub from '../lib';
import { contentAlice, optionsAlice } from './aliceData';

(async () => {
  optionsAlice.version = 3;
  optionsAlice.landmarks = {
    bodyMatter: 1,
    titlePage: 0,
    frontMatter: 1,
    backMatter: 1,
    listOfIllustrations: 1,
    listOfTables: 1,
    preface: 1,
    bibliography: 1,
    index: 1,
    glossary: 1,
    acknowledgments: 1,
  };
  const content = await epub(optionsAlice, contentAlice);
  await writeFile(`${__filename.slice(0, -3)}.epub`, Buffer.from(content));
})();