#!/usr/bin/env node
const parseArgs = require('minimist');
const zipFolder = require('./index');
const inquirer = require('inquirer');
const cwd = process.cwd();
function getRunParameters(){
    return parseArgs(process.argv.slice(2), {
        alias: {
            'name': 'n',
            'folder': 'f',
            'extension': 'e'
        },
        string: ['name', 'folder','extension'],
        default: {
            name: null,
            folder: '',
            extension: 'zip'
        }
    });
    return param;
}
function run() {
    const param = getRunParameters();
    if (!param.name) {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: '请输入zip文件名称'
            }
          ])
          .then(answers => {
            if(!answers.name){
                return console.error('请输入zip文件名称')
            }
                param.name = answers.name;
                zip(param)
          });
    }else{
        zip(param)
    }
    
}

function zip(param){
    const zipName = param.name+'.'+param.extension;
    const folder = param.folder || cwd;
    zipFolder(folder,zipName);
}
run();
//zipFolder('../ecode-gov-newhome-template/dist','a.zip')