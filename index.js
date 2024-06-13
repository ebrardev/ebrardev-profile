#!/usr/bin/env node

import chalk from 'chalk';
import boxen from 'boxen';
const profile = `

${chalk.yellow(`
    /\\_/\\  
   ( o.o ) 
    > ^ < 
`)}

${chalk.blue("Hi !  I am Ebrar ,I make jokes when I'm uncomfortable")}

I am working on mobile and frontend development. I love learning and experimenting.

I love  ${chalk.yellow('Javascript')} &  ${chalk.blue('Golang')}.

${chalk.bold('Do you want to contact me?')} 
> You can check my works  (${chalk.cyan('GitHub')}) ebrardev
> You can read my articles  (${chalk.green('Medium')}) ebrardev
> Subscribe to watch my tutorials  (${chalk.red('YouTube')}) meadev
>  You can contact me about work (${chalk.black('LinkedIn')})
>You can follow my funnyless tweets (${chalk.blue('Twitter')}) ebrardev
>  (${chalk.green(' Show must go on')})
`;

const options = {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    borderColor: 'red'
};

console.log(boxen(profile, options));
