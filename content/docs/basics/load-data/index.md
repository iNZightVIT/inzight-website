---
title: "Your first graph! Loading data and plotting variables"
linkTitle: "First graphs"
weight: 2
description: See how easy it is to load data into iNZight and create graphs
---

The first thing you need to do after starting iNZight is to load a data set to work with. We've made this as easy as possible, and iNZight recognizes several file types, including CSV and Excel (on Windows). For an extensive list, [check out the File menu documentation](http://localhost:1313/docs/interface/menubar/file/#file-types).

## Loading data

iNZight lets you import your own data, either stored locally on your machine or accessed via a URL. The type of file doesn't matter---so long as iNZight knows how to read it, just specify the file name and iNZight will do the rest. However, we have also provided a set of example data sets to make exploring the program easier for those here to learn.

### Loading your own data

If you have a data set you would like to load into iNZight, go to the **File** menu
and select {{% inzversion desktop="__Import Data__." lite="__Import Dataset__." %}} This will open the following {{% inzversion desktop="window:" lite="screen:" %}}

{{% inzdesktop %}}
{{< figure src="load_data.png" alt="iNZight import data window" >}}
{{% /inzdesktop %}}
{{% inzlite %}}
{{< figure src="load_data_lite.png" alt="iNZight import data window" >}}
{{% /inzlite %}}

Use the **Browse** button to search for a file on your computer, or provide a URL to a file on a remote server. Once you have chosen your file, iNZight will display a preview of your data. If it looks OK, click {{% inzversion desktop="__Import__" lite="__Import file from URL__" %}} to load the data into iNZight.

### Using an example dataset

To make it even easier to get started with iNZight and learn data techniques, we have provided some example datasets for you to load quickly.These are used in the examples throughout the website so you can easily follow along.

To load an example data set, go to the **File** menu and click {{% inzversion desktop="__Example data ...__." lite="__Dataset Examples__." %}} You'll be presented with this window:

{{% inzdesktop %}}
{{< figure src="example_data.png" alt="Load example data into iNZight" >}}
{{% /inzdesktop %}}
{{% inzlite %}}
{{< figure src="example_data_lite.png" alt="Load example data into iNZight" >}}
{{% /inzlite %}}
In the example above, we've selected the "Census at School 500" dataset from the Default iNZight module. We will be using this dataset a lot for many of our examples. Click {{% inzversion desktop="__Load__" lite="__Select set__" %}} to load the data into iNZight. {{% inzversion lite="You can now head to __Visualize__ to start creating graphs." %}}

## Creating your first graph

{{% inzdesktop %}}
Once the data is loaded, iNZight will display the spreadsheet in the left-hand panel of the main window, like this:
{{< figure src="inzight_cas.png" alt="iNZight with the Census at School 500 data loaded" width="800" >}}

{{% note "iNZight only displays a subset of rows at a time, and you can move up and down the dataset using the 'Up' and 'Down' buttons below the spreadsheet. If you want to load the full spreadsheet,  __Dataset__ > __View full dataset__ will give you one in a new windows for you to explore." %}}

Now you're ready to create your first graph! The variable names at the top of the spreadsheet view are draggable---go ahead and try dragging **"travel"** onto the Variable 1 box underneath (labeled "Select/Drag-drop Variable 1"). Congratulations---you've created a **bar chart** of `travel`, which is exactly the best way of graphing this type of **_categorical_** variable!

{{< figure src="inzight_cas_travel.png" alt="A bar chart of travel" width="800" >}}

{{% /inzdesktop %}}

{{% inzlite %}}
When you first open the **Visualize** screen, iNZight will automatically graph the first variable in the dataset for you. In this case, we are looking at a **bar chart** of `cellsource`.

{{< figure src="inzight_cas_lite_cellsource.png" alt="A bar chart of travel" width="800" >}}
{{% /inzlite %}}

{{% tip "Categorical variables" %}}
These are variables that have distinct _categories_, _levels_, or _groups_. In the example above, the variable `travel` can take values such as "bike" or "bus". These might also be referred to as **factor** or **qualitative** variables.
{{% /tip %}}

{{% inzdesktop %}}
{{% /inzdesktop %}}

{{% inzversion desktop="Another way of choosing variables is to select them directly from the **Select variable** dropdown. For example, click the first variable box (currently labeled `travel`) and choose `height` from the dropdown." lite="To graph another variable, simply click the dropdown box under **Select first variable:** and choose another variable, for example `height`." %}}

You will now see a **dot plot** in which all of the 500 students' heights are "dropped" onto the graph and allowed to stack if they land on top of an existing point. This is a great way of looking at **numeric variables** to see how the values are distributed.
{{% inzdesktop %}}
{{< figure src="inzight_cas_height.png" alt="A dot plot of height" width="800" >}}
{{% /inzdesktop %}}
{{% inzlite %}}
{{< figure src="inzight_cas_height_lite.png" alt="A dot plot of height" width="800" >}}
{{% /inzlite %}}

{{% tip "Numeric variables" %}}
These are variables that have values which can be _measured_ or _counted_. In the example above, the variable `height` can take any positive value as measured using a ruler. These might also be referred to as **continuous** or **quantitative** variables.

If you get confused between **quantitative** and **qualitative** variables, just remember qua**n**titative variables are **n**umbers!
{{% /tip %}}

## Now it's your turn!

Create some graphs of different variables (just using Variable 1 for now) and think about what you're seeing: is the variable **categorical** or **numeric**? Can you find anything interesting? You could try answering these questions:

1. What is the most popular way students in this sample get their lunch?<br/>
   _Hint: the variable called `getlunch` tells us where each student gets their lunch from._
2. Some students spend more on their monthly phone bills than others: what was the most a student spends, on average?<br/>
   _Hint: students monthly spends are contained in a variable called `cellcost`._
3. What is the most common age of students in the sample?
4. When it comes to mode of `travel`, do more students walk to school or catch the bus (or is it too hard to tell)?
<!--
## Video demonstration

The following **_video_** demonstrates this process to load the data set
_Census at School-500.csv_ which you can find in the **Data** folder
that came with iNZight.

{{% alert title="Note" color="info" %}}
The video was made using an older version of iNZight, so there will be some minor differences in the appearance.
{{% /alert %}}

{{< youtube og88LeHxupA >}} -->

{{% nextpage %}}
