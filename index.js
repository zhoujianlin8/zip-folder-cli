const { zip } = require('./zip');
function zipFolder(folder,zipname){
    return  zip(folder, zipname);
}
module.exports = zipFolder;