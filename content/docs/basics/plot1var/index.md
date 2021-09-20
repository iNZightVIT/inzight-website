---
title: Plotting one variable
weight: 10
description: Working with one variable at a time - the "Variable 1" box
---


As we saw in the previous section, it is easy to create a graph with iNZight. Simply {{% inzversion desktop="__drag and drop__ variables from the spreadsheet view to the variable boxes, or choose them directly " lite="choose a variable" %}} from the variable box drop-downs---iNZight will automatically create a graph for you!

- __Numeric variables__ produce a __dot plot__ (by default)

- __Categorical variables__ (or __factors__) produce a __bar plot__

In this section, we will learn how to obtain textual summaries of the information displayed in the plot, as well as learn about other ways of visualising single variables with iNZight.

{{% alert title="Tutorial catch-up" color="secondary" %}}
If you skipped the previous section, you can catch up by loading the __Census at School 500__ dataset from {{% inzversion desktop="__File__ > __Example datasets__." lite="__File__ > __Dataset examples__." %}}
{{% /alert %}}

## Numeric variables

Numeric variables are those that are __measured__ or __counted__ and represented using whole (1, 2, -25, 2021) or decimal (12.5, 10.35) numbers, for example _height_, _age_, or the amount of money spent on a mobile bill per month.

To look at the distribution of students' armspans, choose `armspan` as the first variable. You should see a _dot plot_ of the 500 students' armspans appear.

{{% inzdesktop %}}
{{< figure src="inzight_cas_armspan.png" alt="A dot plot of armspan" width="800" >}}
{{% /inzdesktop %}}
{{% inzlite %}}
{{< figure src="inzight_cas_armspan_lite.png" alt="A dot plot of height" width="800" >}}
{{% /inzlite %}}

Immediately we can see that most students have armspans between 130 and 180 cm. However, there are many students who have measured their armspans to be as small as 20cm! Below the dotplot is a __box and whisker plot__, showing the range (the thin horizontal line), as well as the 25%, 50%, and 75% quantiles (the lower, middle, and upper ends of the box, respectively).

You can obtain a numeric summary of a graph by clicking the {{% inzversion desktop="__Get Summary__ button at the bottom of the iNZight window." lite="__Summary__ button above the plot." %}}

{{< figure src="inzight_cas_summary_armspan.png" alt="Numeric summary of armspan" width="600" >}}

This tells us the range of values (minimum and maximum values), the quantiles, as well as the sample mean and standard deviation. In addition to this at the top of the summary output, we see information about the variable: it is telling us that our __Primary variable of interest__ (armspan) is a numeric variable, and that of the 500 students in the dataset, 36 are missing observations of armspan. This missing value information is also available at the bottom of the plot.


Have a look at some other numeric variables in the dataset (height, rightfoot, age, year, cellcost). Look at the graph and think about what it means: can you see anything interesting? Look at the summary information for each variable to get familiar with the information provided.


#### Advanced: More than just dot plots {#other-numeric-plots}

Dot plots are OK, but you may have noticed that some variables provide odd-looking plots due to the way the points fall. iNZight provides a selection of alternative plot types for you to look at numeric variables!

To do this, click on {{% inzversion desktop="__Add to plot__ in the plot toolbar, or find it in the __Plot__ menu." lite="__Add to Plot__ in the top-left of the screen." %}} You'll see a panel appear with a lot of new controls in it. Don't worry about most of these for now---we will cover them later! For now, just focus on the __Plot type__ control at the top. Choose different plot types in this drop down and look at the resulting plot. In this example below, I've chosen the "Violin" plot.

{{% inzdesktop %}}
{{< figure src="inzight_cas_armspan_violin.png" alt="A violin plot of armspan" width="800" >}}
{{% /inzdesktop %}}
{{% inzlite %}}
{{< figure src="inzight_cas_armspan_violin_lite.png" alt="A violin plot of armspan" width="800" >}}
{{% /inzlite %}}

{{% alert title="Feeling adventurous?" color="secondary" %}}
Feel free to play with the other controls in this window and see what happens!

If you get lost or confused, you can reset the plot by clicking {{% inzversion desktop="__Remove additions__ in the plot toolbar, or find it in the __Plot__ menu and clicking __Remove all__ at the bottom of the panel." lite="__Restore defaults__ at the bottom of the __Select Variables__ panel." %}}
{{% /alert %}}


## Categorical variables

Categorical variables are those that have values which fall into __categories__ (or __levels__). For example, the way students travel to school might be by _bus_, _car_, or _walk_. A person's ethnicity is another example of categorical variable, as is a student's grade in an exam ("A", "B", "C", or "Excellence", "Merit", etc).

Graphs of categorical variables involve displaying how many observations fall into each category, which is by default shown using a __bar chart__ in iNZight. Let's look at a graph of `travel`:

{{% inzdesktop %}}
{{< figure src="../load-data/inzight_cas_travel.png" alt="A bar plot of travel" width="800" >}}
{{% /inzdesktop %}}
{{% inzlite %}}
{{< figure src="../load-data/inzight_cas_travel_lite.png" alt="A bar plot of travel" width="800" >}}
{{% /inzlite %}}

Immediately we can see that most students travel via motor (typically a car), and equal numbers either catch a bus or walk. Only a few students catch a train.

As before, we can get a numeric summary of the graph by clicking {{% inzversion desktop="__Get Summary__." lite="__Summary__." %}}

{{< figure src="inzight_cas_summary_travel.png" alt="Numeric summary of travel" width="600" >}}

Here we can see both the actual counts in each category, as well as the percentage in each. On the far right we see the total of 500 students. Note that there are no missing observations in this variable!

You can now look at all of the variables in the dataset. The categorical variables you can look at are _getlunch_, _gender_[^1], and _cellsource_. Take a look at these---can you find anything interesting?

[^1]: In the Census at School dataset bundled with iNZight, _gender_ is treated as a __binary__ variable (two levels). More recent versions of the survey have added 'Non-binary' as a choice (yay!), and in future we will try an replace the dataset bundled with iNZight with a more up-to-date one!

#### Advanced: More than just bar charts {#other-categorical-plots}

As before, you can use the __Add to Plot__ panel to explore different ways of looking at categorical variables. Try looking through some of these. Can you see any patterns in some that aren't quite so obvious in others?

That completes single variable plots with iNZight. We are now ready to move on to looking at two variables at once!


<!--
The following ___video___ demonstrates how to use iNZight to plot a single variable.
{{% alert title="Note" color="info" %}}
The video was made using an older version of iNZight, so there will be some minor differences in the appearance.
{{% /alert %}}


{{< youtube idEQ6VULiu4 >}}


### You can follow along

1. Load the Census at School 500 data set from __File__ > __Example Data__:

  ![Load example data into iNZight](../../img/user_guides/basics/3_load_examples.png)

2. __Click and drag__ the variable _height_ to the __Variable 1__ slot to produce a dot plot.

3. __Click and drag__ the variable _cellsource_ to the __Variable 1__ slot to produce a bar plot.

4. Click the __Get Summary__ button to get a text summary of the graph. -->

{{% nextpage %}}
