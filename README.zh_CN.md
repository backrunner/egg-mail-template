# egg-mail-template

egg-mail-template是一个可以帮助你导入HTML邮件模板到egg的插件。

## 开启插件

```js
// config/plugin.js
exports.mailTemplate = {
  enable: true,
  package: 'egg-mail-template',
};
```

## 使用场景

可以配合egg-mailer插件使用，该插件会读取固定目录下的HTML文件作为发送HTML邮件的模板，挂载至app下。

## 配置

参考配置：

```js
// {app_root}/config/config.default.js
exports.mailTemplate = {
  path: '', // path of directory which contains your html templates
}
```

## License

[MIT](LICENSE)
