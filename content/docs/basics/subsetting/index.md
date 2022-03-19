---
title: Subsetting your data
weight: 12
description: Multiple plots for subsets of the data - the 'Subset Variable 1' and 'Subset Variable 2' boxes
---

To find trends in your data, it is often necessary to subset the full data set into levels of a categorical variable. iNZight makes this easy by offering two __subset by__ slots. Simply __drag and drop__ variable names into them to subset the data set, or choose from the dropdown lists.

In this section, we will be subsetting (or _faceting_) some of the graphs we have seen previously to explore more complex relationships between variables.

Once again, we will be working with the __Census at School 500__ example data set we loaded in [First Graphs](../load-data/#using-an-example-dataset).


## Subsetting by a categorical variable {#subset-categorical}

We will start by creating a graph of `gender` by setting it as the Variable 1. If you are continuing from the previous section, you might need to clear Variable 2 by clicking the 'x' to the right of the dropdown box. You should see a bar chart of the distribution of student gender.

Now we will investigate how this distribution changes across modes of travel: drag `travel` to the Subset Variable 1 slot (the third box) &mdash; what do you see?

{{% inzdesktop %}}
{{< figure src="inzight_cas_gender_subset_travel.png" alt="A plot of gender subset by travel" width="800" >}}
{{% /inzdesktop %}}
{{% inzlite %}}
{{< figure src="inzight_cas_gender_subset_travel_lite.png" alt="A plot of gender subset by travel" width="800" >}}
{{% /inzlite %}}

In the previous section, we looked at a two-way barplot of travel by gender: this told us about the distribution of travel by gender. This time, we are looking at the distribution of `gender` for each level of `travel`. Immediately, we can see that those students who bike to school are predominatly male, while students catching a train or bus are made up of slightly more females. Approximately equal numbers of males and females walk to school.

{{% tip "Looking at things in different ways" %}}
If you remember in the previous section we briefly mentioned a graph of gender by travel: in that case, we used travel as __Variable 2__ instead of __Subset Variable 1__. The information in these two plots is very similar, but the focus is different: in the side-by-side bar charts in the previous section, we focus on how the percent in each gender changes across modes of travel (i.e., comparing the percentage of females who bike versus who walk).

In the subsetted version, we shift our focus more explicitely to looking at how the distribution of gender changes across levels of travel. This is a tricky concept to understand, but you can easily look for yourself by switching __Variable 2__ with __Subset Variable 1__ by clicking the switch (up-down) arrows to the right of __Variable 2__. Compare the two graphs and think about the kind of information you can see in one that you can't in the other, and vice versa.
{{% /tip %}}

## Subsetting by a numeric variable {#subset-numeric}

Sometimes you might want to see how a numeric variable influences a relationship. For example, does age affect where a student gets their lunch from? How does age affect the relationship between a student's source of model for their cellphpone and their gender? To investigate the latter, we will need to first create a graph of `cellsource` (__Variable 1__) by `gender` (__Variable 2__), and then subset by `age` (__Subset Variable 1__).

{{% inzdesktop %}}
{{< figure src="inzight_cas_cellsource_gender_subset_age.png" alt="A plot of cellsource by gender, subset by age" width="800" >}}
{{% /inzdesktop %}}
{{% inzlite %}}
{{< figure src="inzight_cas_cellsource_gender_subset_age_lite.png" alt="A plot of cellsource by gender, subset by age" width="800" >}}
{{% /inzlite %}}

We see that iNZight has automatically split age into four groups, each with approximately the same number of observations in each. Can you spot any interesting relationships?

Look at the percentage of boys and girls using job money to pay cellphone costs: how does this change from younger to older students? If you __remove__ gender from __Variable 2__, the dynamics of this relationship suddenly disappear: a few more students use job money, but we cannot see the dramatic shift for females from under 10% in the 7-11 age band up to nearly 30% in the over 14s.

To see this in action, click the __Play__ button to the right of the slider that appeared below the __Subset Variable 1__ box. This will play through the subsets and show you each sequentially. Watch what happens to the distribution over time!

{{% tip "Interval notation" %}}
In the numeric subset, the age variable has been divided into groups, or intervals, and uses brackets to describe the range of each interval.

Square brackets (`[]`) mean that the value on that side is __included__ in the interval, while round brackets (`()`) mean the value is __excluded__. So for example, the first interval is `[7 - 11]` with square brackets on both sides, so this includes students aged 7, 8, 9, 10, and 11 __inclusive__. The next interval, however, uses a round left bracket, `(11 - 12]`, so this is students _over 11_ and _up to and including 12_ (which is, of course, just all students aged 12).

Where this notation becomes important is if the numeric variable can take decimal values. For example, the interval `(10 - 15]` can include any value greater than 10 and less than or equal to 15. It could include the value 10.2, for example, but could not contain 10. It can, however, include the value 15. An easy way to remember this is to think of the numbers as blocks &mdash; the square bracket can fit nice and snug around the number 15, but the round bracket leaves a small space between it and 10.
{{% /tip %}}

## Subsetting by two variables {#subset-two-vars}

Finally, we will quickly look at how iNZight lets us explore an additional relationship by using the last box in the control panel: __Subset Variable 2__. This behaves a little differently that the first subsetting variable, and instead provides a look a __only one__ level of the subset variable, rather than all at once. We will look at the relationship between height and armspan once again,
