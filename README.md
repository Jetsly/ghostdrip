# ghostdrip
Ghost 主题

###目录架构###

```
├── /assets
|   ├── /css
|   ├── /fonts
|   ├── /images
|   ├── /js
├── /partials  
├── default.hbs
├── index.hbs [必需]
└── post.hbs [必需]
```

`index.hbs` 和 `post.hbs` 是必须的 – 如果这两个模板文件不存在的话，Ghost就无法正常运行
`partials` 是一个特殊的目录。 这个目录包含模板文件
`assets` 是一个资源的目录。 这个目录包含资源文件