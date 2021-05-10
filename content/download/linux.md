---
title: Linux installer
weight: 2
---

The Linux installer is based on Ubuntu and debian-like operating systems. Other systems should use the [R](#r-package) installation method below.

### Requirements

The library names for Ubuntu are given in brackets.

* Make (`maketools`)
* git (optional) (`git`)
* R (`r-base`)
* Gtk2+ (`libgtk2.0-dev`)
* XOrg (`xorg-dev`)

### Installation

1. Download the Linux installer from https://github.com/iNZightVIT/linux

Using `git`:
```bash
$ git clone https://github.com/iNZightVIT/linux.git iNZightVIT
```
Using `curl` (or similar):
```bash
$ curl -fsSL https://github.com/iNZightVIT/linux/archive/master.zip -o iNZightVIT.zip 
$ unzip iNZightVIT.zip && rm iNZightVIT.zip && mv iNZightVIT-linux-master iNZightVIT
```


2. Build iNZight
```bash
$ cd iNZightVIT
$ make
```

You can run iNZight, VIT, or the updater, respectively, with
```bash
$ ./inzight
$ ./vit
$ ./update
```


**Optional**: install system-wide using `(sudo) make install`. This will make `inzight` and `vit` available at `/usr/local/bin`.
