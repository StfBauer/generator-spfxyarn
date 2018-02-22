'use strict';
// base generator scaffolding
const Generator = require('yeoman-generator');

// import command-exists to check if yarn is installed
const commandExists = require('command-exists').sync;

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);
    }

    // 1. Initialize the generator
    initializing() {
        this.composeWith(
            require.resolve(`@microsoft/generator-sharepoint/lib/generators/app`), {
                'skip-install': true
            }
        );
    }

    install() {
        // check if Yarn is installed 
        const hasYarn = commandExists('yarn');

        // install all dependencies
        this.installDependencies({
            npm: !hasYarn,
            bower: false,
            yarn: hasYarn
        });

    }

}