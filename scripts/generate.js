const fs = require('fs');
const path = require('path');

const messages = require('./message');

const dirPath = path.resolve(__dirname, './Component');
const fileNames = fs.readdirSync(dirPath);
const templateDir = path.resolve(__dirname, './Component');
const fileCodeMap = fileNames.reduce((prev, file) => {
  const filePath = path.resolve(templateDir, file);
  const fileCode = fs.readFileSync(filePath, 'utf8');
  return { ...prev, [file]: fileCode };
}, {});

function convertName(name) {
  if (!name) throw new Error('component name empty');
  const converted = name.charAt(0).toUpperCase() + name.slice(1);
  return converted;
}

function createComponent(dir, name, isContainer) {
  if (fs.existsSync(path.resolve(dir, `${name}.tsx`))) {
    throw new Error('already exist');
  }
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fileNames.forEach((fileName) => {
    if (!isContainer && fileName !== 'Component.tsx') {
      return;
    }
    const replacedPath = path.resolve(
      dir,
      fileName.replace(/Component/g, name)
    );
    const replacedCode = fileCodeMap[fileName]
      .replace(/Component/g, name)
      .replace(/component/g, name.toLowerCase());
    fs.writeFileSync(replacedPath, replacedCode);
  });
}

function main() {
  const [_nodePath, _filePath, ...args] = process.argv;

  if (args.length === 0) {
    throw new Error('command empty');
  }

  if (args.includes('-h') || args.includes('--help')) {
    console.log(messages.helpMessage);
    return;
  }

  if (args[0] === 'component' || args[0] === 'comp') {
    const [_cmd, name] = args;
    const convertedName = convertName(name);
    const targetDir = path.resolve(process.cwd(), 'components');
    createComponent(targetDir, convertedName);
    console.log(`created at components/${name}`);
    return;
  }

  if (args[0] === 'container' || args[0] === 'cont') {
    const [_cmd, container, component] = args;
    const convertedContainer = convertName(container);
    const containerDir = path.resolve(
      process.cwd(),
      'containers',
      convertedContainer
    );
    try {
      createComponent(containerDir, convertedContainer, true);
    } catch (e) {
      if (e.message !== 'already exist') {
        throw e;
      }
      if (!component && e.message === 'already exist') {
        throw e;
      }
    }

    try {
      const convertedComponent = convertName(component);
      const componentDir = path.resolve(
        process.cwd(),
        'containers',
        convertedContainer,
        'components'
      );
      createComponent(componentDir, convertedComponent);
      console.log(
        `created at containers/${convertedContainer}/components/${convertedComponent}`
      );
      return;
    } catch (e) {
      if (e.message !== 'component name empty') throw e;
      console.log(`created at containers/${convertedContainer}`);
      return;
    }
  }

  console.log('invalid command\n');
}
main();
