'use strict';
var fs = require('fs');
var archiver = require('archiver');
var path = require('path');

class ZipAFolder {
    static async zip(srcFolder, zipFilePath) {
        return new Promise((resolve, reject) => {
            ZipAFolder.zipFolder(srcFolder, zipFilePath, err => {
                if (err) {
                    reject(err);
                }
                resolve();
            });
        });
    }

    static zipFolder(srcFolder, zipFilePath, callback) {
        // folder double check
        fs.access(srcFolder, fs.constants.F_OK, (notExistingError) => {
            if (notExistingError) {
                return callback(notExistingError);
            }
            fs.access(path.dirname(zipFilePath), fs.constants.F_OK, (notExistingError) => {
                if (notExistingError) {
                    return callback(notExistingError);
                }
                var output = fs.createWriteStream(zipFilePath);
                var zipArchive = archiver('zip');

                output.on('close', function() {
                    callback();
                });

                zipArchive.pipe(output);
                // 确保解压文件名称问zip包文件名
                zipArchive.directory(srcFolder, path.parse(zipFilePath).name);
                zipArchive.finalize();
            });
        });
    }
}

module.exports = ZipAFolder;