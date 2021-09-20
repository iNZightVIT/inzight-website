---
title: Plotting two variables
weight: 11
description: Working with pairs of variables - the "Variable 2" box
---


Plotting two variables is just as easy as plotting one when you use iNZight. Simply {{% inzversion desktop="drag a second variable into the __Variable 2__ slot or" %}} choose a variable from the __Variable 2__ drop-down, and again iNZight will automatically create the appropriate plot. Depending on the type of variables, you will get


* a two-way __bar plot__ if both variables are categorical,

* side-by-side __dot plots__ if one variable is numeric and the other is categorical (you get one dot plot for each category), or

* a __scatter plot__ if both variables are numeric.

You can also obtain numerical summaries for the variables by clicking on {{% inzversion desktop="the __Get Summary__ button at the bottom of the window." lite="the __Summary__ tab above the plot." %}}

If you haven't already, load the __Census at School 500__ example data set and then follow along.


## Two-way bar plots

In the previous section, we looked at the distribution of student travel modes (bus, bike, walk, etc). We will now investigate how this distribution is difference between male and female students.[^1] To start, create a (one-way) __bar plot__ of travel by choosing `travel` as __Variable 1__. This shows us once more the distribution of modes of travel.

To compare between males and females, select `gender` as __Variable 2__ {{% inzversion desktop="either by dragging it to the box or" %}} by selecting it from the drop-down. iNZight will automatically show you a __side-by-side__ or __two-way bar plot__ in which the categories of `travel` are still along the x-axis, but this time there are two bars for each category, one for each gender. The colours are labeled in the legend on the right-hand-side of the plot.

{{% inzdesktop %}}
{{< figure src="inzight_cas_travel_gender.png" alt="A plot of travel by gender" width="800" >}}
{{% /inzdesktop %}}
{{% inzlite %}}
{{< figure src="inzight_cas_travel_gender_lite.png" alt="A plot of travel by gender" width="800" >}}
{{% /inzlite %}}

From the graph, it is clear that more male students bike to school than female students, and a few more female students travel by motorcar, but otherwise the distribution of fairly similar.

{{% tip "Distributions of the primary variable" %}}
It is important to note that in the plot above, we are looking at the __distribution of travel__ for each category of gender. The heights of the green bars sum to 100%, as do the orange bars. If we wanted to compare the percentage of students catching the bus who are males, we need to look at the opposite relationship. Click the small down arrow to the right of `travel` and you'll get a very different graph! This time, we're looking at the distribution of gender across each mode of transport.

{{< figure src="inzight_cas_gender_travel.png" alt="A plot of gender by travel" width="300" >}}

Another thing you'll notice in this plot is that the bars are different widths: the width of each bar is proportional to the number of students in that group. Comparing back to the previous plot, most students traveled via motor car: in this new graph, the bars associated with 'motor' are the widest, while those associated with 'train' and 'other' are the narrowest.
{{% /tip %}}


### Numeric summary

As before, we can obtain a numerical summary of the two-way bar plot by clicking on {{% inzversion desktop="__Get Summary__." lite="__Summary__." %}} Now we see summary information about the _distribution of travel by gender_:

{{< figure src="inzight_cas_summary_travel_gender.png" alt="A summary of travel by gender" width="600" >}}

There are two tables in this output: one for counts, and another for percentages. In the table of counts, note that the right-most column is the __Row total__, that is, the total number of students of each gender. It's a little trickier to see the differences and similarities in the distributions, which is why we always look at pictures first!

In the second table (percentages), we are given the same information, but each value is divided by its row total and multiplied by 100. For example, the percentage of females who travel by motorcar is $$100\times \frac{\text{number of females in 'motor'}}{\text{total number of females}} = 100 \times \frac{125}{265} = 47.17$$ Importantly, this means that the sum of percentages __across rows__ is 100%, and that this is interpreted as __47% of females travel by motorcar__, and __not__ 47% of students traveling by car are female.


{{% alert title="Alternative plot types" color="secondary" %}}
As with single variable plots, we can explore different plot types by opening the __Add to Plot__ panel and choosing alternatives from the __Plot type__ menu. Try some different plots. Do any tell you something different about the distribution?
{{% /alert %}}


## Side-by-side dot plots

We've seen how we can look at two categorical variables, now we will see what happens when we replace the categorical variable `travel` with the numeric variable `height`. Go ahead and set `height` as __Variable 1__, and iNZight will produce a stack of dot plots: one for each gender.

{{% inzdesktop %}}
{{< figure src="inzight_cas_height_gender.png" alt="A plot of height by gender" width="800" >}}
{{% /inzdesktop %}}
{{% inzlite %}}
{{< figure src="inzight_cas_height_gender_lite.png" alt="A plot of height by gender" width="800" >}}
{{% /inzlite %}}

What do these two plots tell you about the distributions of male and female student heights?
* Are the shortest and tallest students male or female?
* Is the median height of females higher or lower than the median height of males? Why might this be?[^2]
* Do boys or girls have a greater variance in height? Hint: compare the widths of the boxes below the dot plots.


### Numeric summary

Let's now look at the numeric summary information associated with this graph and answer some of the questions above. Click on {{% inzversion desktop="__Get Summary__." lite="__Summary__." %}}

{{< figure src="inzight_cas_summary_height_gender.png" alt="A summary of height by gender" width="600" >}}

In this summary, the variable `height` (numeric) is summarised for each gender (categorical). The information is the same as for single variable dot plots, but allows us to compare the values for males and females. The median height of females is slightly higher than that of males, which we could see by the middle line in the box plots. However, we can now also compare the __mean__ heights, which is higher for males. We can also see that the __standard deviation__ (SD) is a little higher for males.

{{% tip "Averages, means, and medians" %}}
The mean and median are both measures of the "average" of a distribution, but are useful for different things. In the example above, the __median__ height of females is higher than males, but the __mean__ height of females is smaller than males. This is because the median is not affected by extreme values, while the mean is.

Looking back at the dot plot, imagine removing the three shortest females and the two tallest males: the distribution of female heights now looks taller, on average---this is what the __median__ is telling us, as the median is not affected by extreme values, or _outliers_. The __mean__, however, is affected by these extreme values, in this case the influence is enough to give males a slightly higher mean height.
{{% /tip %}}


{{% alert title="Alternative plot types" color="secondary" %}}
As with single variable plots, we can explore different plot types by opening the __Add to Plot__ panel and choosing alternatives from the __Plot type__ menu. Try some different plots. Do any tell you something different about the distribution? Note that in some of the plots, the order is reversed (males are on top instead).
{{% /alert %}}


## Scatter plots


[^1]: Recent versions of the Census at School data have added 'non-binary' as a gender option.
[^2]: Girls tend to start puberty earlier than boys, and part of this process involves growing taller! In the next section we will learn about subsetting, and we can see this in action.
