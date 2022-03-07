# danimal141's resume

This is based on [kawamataryo/resume-template](https://github.com/kawamataryo/resume-template). Thank you for the template!

## Features

### Insert table of contents

You can insert table of contents with [doctoc](https://github.com/thlorenz/doctoc).

```
$ yarn doctoc
```

### 💅 Lint text

Automatic proofreading with [textlint](https://github.com/textlint/textlint).

```
$ yarn lint --fix
```
It is also automatically executed when pre-commit by [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks).
proofreading rules are set with `.textlintrc`.



### 📝 Convert MD to PDF

You can generate PDF with [md-to-pdf](https://www.npmjs.com/package/md-to-pdf).


```
$ yarn build:pdf
```

The output PDF can be styled as you like with CSS. Edit the `pdf-configs/style.css`.

### 🛠 Create release

When you push with a `v**` tag, GitHub Actions will run the build, generate the PDF, create a Release, and register the PDF to Assets.

```
$ git commit -m "add job"
$ git tag v1.0
$ git push origin --tags
```

### 📆 Remind update

Automatically generate issues every three months with GitHub Actions Schedules triggers to prompt you to update your resume.

To change the duration or stop the job, edit `.github/workflows/create-issue.yml`.
To change the issue contents, edit `.github/ISSUE_TEMPLATE.md`.
