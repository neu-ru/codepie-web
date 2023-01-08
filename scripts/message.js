const helpMessage = `
usage:
pnpm g or generate [-h | --help] <command> <args>

description:
These are Component generating commands used in various situations
 
how to use:
- make component in components directory
comp or component <name>
ex. pnpm g comp Header

- make component in container's components directory
cont or container <container> <component>
ex1. pnpm g cont Home
ex2. pnpm g cont Home HomePage
`;

module.exports = { helpMessage };
