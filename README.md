# egg-mail-template

egg-mail-template是一个可以帮助你导入HTML邮件模板到egg的插件。

egg-mail-template is a plugin that can help you import your HTML email templates into egg.

## 安装 Install

```bash
npm i egg-mail-template --save
```

## 开启插件 Usage

```js
// config/plugin.js
exports.mailTemplate = {
  enable: true,
  package: 'egg-mail-template',
};
```

你可以配合egg-mailer使用本插件，插件会读取固定目录下的HTML文件作为发送HTML邮件的模板，挂载至app下。

You can use this plugin with egg-mailer, this plugin will read your templates from a certain directory and mount them on app object.

## 配置 Configuration

参考配置：

```js
// {app_root}/config/config.default.js
exports.mailTemplate = {
  path: '', // path of directory which contains your html templates
}
```

## License

[MIT](LICENSE)
