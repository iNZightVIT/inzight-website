---
title: The File menu
linkTitle: File menu
weight: 1
description: Getting data into and out of iNZight, as managing your preferences.
---

The **File** menu is where you interact with files on your computer (either by importing or exporting data), as well as access example data sets and manage your preferences.


The __File menu__ provides 4 ways of getting data into iNZight:

* ___Importing a file on your computer___ (_Import data …_)
* ___Importing a file from an internet url___ (_Import data …_)
* ___Copying and pasting___ data from programs like from Excel or Google sheets (_Paste from …_)
* Built-in ___Example data sets___ (_Example data …_)

The __File menu__ also allows for ___saving/exporting___ data. E.g., if you have modified it in some way in iNZight  (_Export data …_)


{{< figure src="1_file_menu.png" alt="The file menu" width=300 >}}


## Import data

{{< figure src="2_import.png" alt="Import dialog" width=300 >}}

___By default___ imports ___from a file___ on your computer. Throws up a ___browser___ button to initiate a dialog for navigating to the file you want.

{{< figure src="3_import-file.png" alt="Import file browse button" width=300 >}}


On clicking the __Import from url__ _checkbox_ the behaviour changes (as below)

{{< figure src="4_import-url.png" alt="Import from URL" width=300 >}}


Type or paste in the url address of the file you want to import 
{{% alert title="Note" color="info" %}}
When pasting a full url, ensure the prepopulated “https:// ” is overwritten.
{{% /alert %}}


### File types
NZight assumes that data sets are in __rows = cases__ by __columns = variables__ format

iNZight can import files of the following types:

| Type                         | Extension          |
| ---------------------------- | ------------------ |
| Comma Separated Values       | `.csv`             |
| Tab-delimited Text files     | `.txt`             |
| 97-2003 Excel files          | `.xls`             |
| 2007 Excel files             | `.xlsx`            |
| SPSS files                   | `.sav`             |
| SAS Data files               | `.sas7bdat`        |
| SAS Xport files              | `.xpt`             |
| STATA fles                   | `.dta`             |
| R Object files               | `.rds`             |
| RData files                  | `.RData`, `.rda`   |

___By default___, iNZight identifies the type of the file being imported by looking for one of these filename extensions. iNZight attempts to read the file and populate the __Preview panel__. If no preview appears iNZight has been unable to read the file.

Click the __Import__ button (at bottom right) when you are happy with what appears in the Preview panel.

The __Advanced Options__ at the bottom-left of the Import dialog box (Click on the “__+__” to expand) allows you to change default behaviour.

### Metadata in csv files

__Metadata__ is _information about the data_.

When `.csv` files and `.txt` files are imported into iNZight, all lines in the data file beginning with a `#` are ignored (there is one exception below).

This enables you to include __metadata__ in your `.csv` or `.txt` data files by starting each line of metadata information with a `#`. 

___With `.csv` files___, you can go further and include ___instructions telling iNZight to treat variables in various ways___. This is particularly useful for instructing iNZight to order the levels of a categorical variable in a desired way, rather than the default way.

Lines starting with `#' @` are interpreted by iNZight's smart read function as containing instructions of this form.

#### Example of metadata

We will use the following lines from the top of the file at https://www.stat.auckland.ac.nz/~wild/data/test/Census%20at%20School-500&meta.csv
to show how this works.

```
## --- Meta Data --- ##  
#' @factor gender[male,female]  
#' @factor cellsource[pocket,parent,job,other]  
#' @factor getlunch[home,tuckshop,dairy,school,friend,none]  
#' @numeric age  
#' @factor year  
#' @factor school=year[primary=5|6,intermediate=7|8,high=9|10|11]  
#' @factor travel[walk,bike,car=motor,public=bus|train,other]  
#' @factor cellsource  
#' @numeric phonebill=cellcost  
## --- Data --- ##
```

___Note:___ _By default in R, and therefore iNZight, the categories (levels) of a categorical variable (factor) are ordered alphanumerically._
  
The 1st (real) line above is an instruction for __gender__ to be treated as a categorical variable (factor) with levels in the order "male, female", rather than the alphabetic default "female, male". The next 2 lines are doing the same sort of reorderings for __cellsource__ and __getlunch__.

The variable __year__ in the data file has numeric values ranging from 4 to 13 and so by default will be treated as a numeric variable. `#' @factor year` is an instruction to treat it as a categorical variable (factor).

The next line, `\#' @factor school=year[primary=5|6,intermediate=7|8,high=9|10|11]` is an instruction to construct a new categorical variable called __school__ from __year__ in which students in year-levels 5 & 6 become a category called "primary", those in year levels 9 to 11 become a category called "high". Year levels 4, 12 and 13 are not mentioned in the statement so those categories remain unchanged and sort after those mentioned in the statement.

The next line redefines __travel__ by combining categories "bus" and "train" into a category called "public".

## Export data

{{< figure src="5_export.png" alt="Export data dialog" width=300 >}}

__Clicking “Open”__ initiates this dialog ...

{{< figure src="6_export-open.png" alt="Export open dialog" width=300 >}}

Cliking 'OK'  brings you back to ...

{{< figure src="5_export-OK.png" alt="Export dialog" width=300 >}}


__Choose__ from allowable file extensions and __click OK__

(_If you have already put the correct extension on your filename you can click OK without choosing an file type extension_)


## Import data via Copy and Paste

You can import data directly from Excel or Google Sheets by selecting the data and copying it (CTRL + C) and then using the **Paste from...** option in the **File** menu to paste the data directly into iNZight.

Click __Load__ when finished.


## Example data

Enables the loading of data files stored inside iNZight.

___First select___ a Module (package) and _then_ a __Dataset__ stored with that Module. 

## Preferences

__Preferences__ enables changing some of the behaviours of iNZight such as default window and font sizes.

{{< figure src="7_preferences.png" alt="Preference dialog" width=500 >}}

After changing preferences, you will be prompted to reload iNZight. If you do not, some changes may not display until you reload iNZight.


#### Single window versus Dual-window display

While _single-window_ is the default, _dual-window_ mode is better for all Windows users except computer novices.

{{< figure src="8_window-modes.png" alt="Window modes" >}}












