
## 安装
* npm install zip-folder-cli

## 使用
* zip-folder 
* zip-folder -f ./dist -n projectName  //打包当前dist目录下资源输出在当前目录projectName.zip
* 可设置参数如下

·alias: {
            'name': 'n',
            'folder': 'f',
            'extension': 'e'
},
       
default: {
    name: null,
    folder: '',
    extension: 'zip'
}·

