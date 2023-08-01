const fetch = require('node-fetch');
const fs = require('fs');

function readContent(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function findLinks(content) {
  return content.match(/\[([^\]]+)\]\(([^)]+)\)/g).map(link => {
    const [linkText, linkUrl] = link.match(/\[([^\]]+)\]\(([^)]+)\)/);
    return { linkText, linkUrl };
  });
}

async function testLink(linkObj) {
  try {
    const response = await fetch(linkObj.linkUrl);
    if (response.status === 404 || response.status === 502) {
      return { ...linkObj, isWorking: false };
    }
    return { ...linkObj, isWorking: true };
  } catch (error) {
    return { ...linkObj, isWorking: false };
  }
}

async function testLinksInFile(filePath, notWorkingLinks) {
  const content = readContent(filePath);
  const links = findLinks(content);

  for (const linkObj of links) {
    const result = await testLink(linkObj);
    if (!result.isWorking) {
      notWorkingLinks.push({ filePath, linkObj });
    }
  }
}

async function main() {
  const notWorkingLinks = [];

  await testLinksInFile('README.md', notWorkingLinks);
  await testLinksInFile('README-etc.md', notWorkingLinks);

  const brokenLinks = notWorkingLinks.filter(link => !link.isWorking);

  if (brokenLinks.length > 0) {
    console.log('Broken Links:');
    for (const { filePath, linkObj } of brokenLinks) {
      console.log(`- Link "${linkObj.linkText}" in ${filePath} (${linkObj.linkUrl})`);
    }
  } else {
    console.log('All links are working.');
  }
}

main();
