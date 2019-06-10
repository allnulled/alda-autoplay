# alda-autoplay

Tool to automatically play [alda](https://github.com/alda-lang/alda/blob/master/README.md) music by simply saving the documents.

## Prerequisites

The current tool does not include `alda`, a great programming language to create music, so:

- [Here](https://github.com/alda-lang/alda/blob/master/README.md) you can find how to install and run Alda documents.

- [Here](https://blog.djy.io/alda-a-manifesto-and-gentle-introduction/) you can find an Alda tutorial.

This tool presuposes that you have globally installed in your operative system:

- `alda`
- `node`
- `npm`

## Installation

`$ git clone ...`

`$ cd alda-autoplay`

`$ npm install`

## Usage

Start watching for changes:

`$ npm start`

Then create and edit your `alda` documents under the `composer` folder you find inside:

`$ cd composer`

`$ your-editor your-file.alda`

And whenever you change the contents of a file, it will be played. Note that the file must have the format of: `*.alda`.


