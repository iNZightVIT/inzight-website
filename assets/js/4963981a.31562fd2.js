"use strict";(self.webpackChunkinzight_website=self.webpackChunkinzight_website||[]).push([[432],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(a),c=r,b=h["".concat(l,".").concat(c)]||h[c]||d[c]||o;return a?n.createElement(b,i(i({ref:t},u),{},{components:a})):n.createElement(b,i({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2091:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const o=a.p+"assets/images/inzight_cas_gender_subset_travel-610c09a9699511d5583e3c2e28231e0e.png",i={title:"Subsetting your data",description:"Multiple plots for subsets of the data - the 'Subset Variable 1' and 'Subset Variable 2' boxes"},s=void 0,l={unversionedId:"getting-started/subsetting/index",id:"getting-started/subsetting/index",title:"Subsetting your data",description:"Multiple plots for subsets of the data - the 'Subset Variable 1' and 'Subset Variable 2' boxes",source:"@site/docs/02-getting-started/05-subsetting/index.mdx",sourceDirName:"02-getting-started/05-subsetting",slug:"/getting-started/subsetting/",permalink:"/inzight-website/docs/getting-started/subsetting/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02-getting-started/05-subsetting/index.mdx",tags:[],version:"current",frontMatter:{title:"Subsetting your data",description:"Multiple plots for subsets of the data - the 'Subset Variable 1' and 'Subset Variable 2' boxes"},sidebar:"tutorialSidebar",previous:{title:"Plotting two variables",permalink:"/inzight-website/docs/getting-started/two-variable-graphs/"},next:{title:"Adding Colour to Graphs",permalink:"/inzight-website/docs/getting-started/adding-colour/"}},p={},u=[{value:"Categorical Variable",id:"subset-categorical",level:2},{value:"Numeric Variable",id:"subset-numeric",level:2},{value:"Subsetting by two variables",id:"subset-two-vars",level:2}],d=(h="Figure",function(e){return console.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var h;const c={toc:u};function b(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To find trends in your data, it is often necessary to subset the full data set into levels of a categorical variable. iNZight makes this easy by offering two ",(0,r.kt)("strong",{parentName:"p"},"subset by")," slots. Simply ",(0,r.kt)("strong",{parentName:"p"},"drag and drop")," variable names into them to subset the data set, or choose from the dropdown lists."),(0,r.kt)("p",null,"In this section, we will be subsetting (or ",(0,r.kt)("em",{parentName:"p"},"faceting"),") some of the graphs we have seen previously to explore more complex relationships between variables."),(0,r.kt)("p",null,"Once again, we will be working with the ",(0,r.kt)("strong",{parentName:"p"},"Census at School 500")," example data set we loaded in ",(0,r.kt)("a",{parentName:"p",href:"load-data"},"First Graphs"),"."),(0,r.kt)("h2",{id:"subset-categorical"},"Categorical Variable"),(0,r.kt)("p",null,"We will start by creating a graph of ",(0,r.kt)("inlineCode",{parentName:"p"},"gender")," by setting it as the Variable 1. If you are continuing from the previous section, you might need to clear Variable 2 by clicking the \u2018x\u2019 to the right of the dropdown box. You should see a bar chart of the distribution of student gender."),(0,r.kt)("p",null,"Now we will investigate how this distribution changes across modes of travel: drag ",(0,r.kt)("inlineCode",{parentName:"p"},"travel")," to the Subset Variable 1 slot (the third box) ","\u2014"," what do you see?"),(0,r.kt)(d,{src:{desktop:o,lite:o},caption:"A plot of gender subset by travel",width:"800",mdxType:"Figure"}),(0,r.kt)("p",null,"In the previous section, we looked at a two-way barplot of travel by gender: this told us about the distribution of travel by gender. This time, we are looking at the distribution of ",(0,r.kt)("inlineCode",{parentName:"p"},"gender")," for each level of ",(0,r.kt)("inlineCode",{parentName:"p"},"travel"),". Immediately, we can see that those students who bike to school are predominatly male, while students catching a train or bus are made up of slightly more females. Approximately equal numbers of males and females walk to school."),(0,r.kt)("admonition",{title:"Looking at things in different ways",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you remember in the previous section we briefly mentioned a graph of gender by travel: in that case, we used travel as ",(0,r.kt)("strong",{parentName:"p"},"Variable 2")," instead of ",(0,r.kt)("strong",{parentName:"p"},"Subset Variable 1"),". The information in these two plots is very similar, but the focus is different: in the side-by-side bar charts in the previous section, we focus on how the percent in each gender changes across modes of travel (i.e., comparing the percentage of females who bike versus who walk)."),(0,r.kt)("p",{parentName:"admonition"},"In the subsetted version, we shift our focus more explicitely to looking at how the distribution of gender changes across levels of travel. This is a tricky concept to understand, but you can easily look for yourself by switching ",(0,r.kt)("strong",{parentName:"p"},"Variable 2")," with ",(0,r.kt)("strong",{parentName:"p"},"Subset Variable 1")," by clicking the switch (up-down) arrows to the right of ",(0,r.kt)("strong",{parentName:"p"},"Variable 2"),". Compare the two graphs and think about the kind of information you can see in one that you can\u2019t in the other, and vice versa.")),(0,r.kt)("h2",{id:"subset-numeric"},"Numeric Variable"),(0,r.kt)("p",null,"Sometimes you might want to see how a numeric variable influences a relationship. For example, does age affect where a student gets their lunch from? How does age affect the relationship between a student\u2019s source of model for their cellphpone and their gender? To investigate the latter, we will need to first create a graph of ",(0,r.kt)("inlineCode",{parentName:"p"},"cellsource")," (",(0,r.kt)("strong",{parentName:"p"},"Variable 1"),") by ",(0,r.kt)("inlineCode",{parentName:"p"},"gender")," (",(0,r.kt)("strong",{parentName:"p"},"Variable 2"),"), and then subset by ",(0,r.kt)("inlineCode",{parentName:"p"},"age")," (",(0,r.kt)("strong",{parentName:"p"},"Subset Variable 1"),")."),(0,r.kt)(d,{src:{desktop:a(1041).Z,lite:a(1041).Z},caption:"A plot of cellsource by gender, subset by age",width:"800",mdxType:"Figure"}),(0,r.kt)("p",null,"We see that iNZight has automatically split age into four groups, each with approximately the same number of observations in each. Can you spot any interesting relationships?"),(0,r.kt)("p",null,"Look at the percentage of boys and girls using job money to pay cellphone costs: how does this change from younger to older students? If you ",(0,r.kt)("strong",{parentName:"p"},"remove")," gender from ",(0,r.kt)("strong",{parentName:"p"},"Variable 2"),", the dynamics of this relationship suddenly disappear: a few more students use job money, but we cannot see the dramatic shift for females from under 10% in the 7-11 age band up to nearly 30% in the over 14s."),(0,r.kt)("p",null,"To see this in action, click the ",(0,r.kt)("strong",{parentName:"p"},"Play")," button to the right of the slider that appeared below the ",(0,r.kt)("strong",{parentName:"p"},"Subset Variable 1")," box. This will play through the subsets and show you each sequentially. Watch what happens to the distribution over time!"),(0,r.kt)("admonition",{title:"Interval notation",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"In the numeric subset, the age variable has been divided into groups, or intervals, and uses brackets to describe the range of each interval."),(0,r.kt)("p",{parentName:"admonition"},"Square brackets (",(0,r.kt)("inlineCode",{parentName:"p"},"[]"),") mean that the value on that side is ",(0,r.kt)("strong",{parentName:"p"},"included")," in the interval, while round brackets (",(0,r.kt)("inlineCode",{parentName:"p"},"()"),") mean the value is ",(0,r.kt)("strong",{parentName:"p"},"excluded"),". So for example, the first interval is ",(0,r.kt)("inlineCode",{parentName:"p"},"[7 - 11]")," with square brackets on both sides, so this includes students aged 7, 8, 9, 10, and 11 ",(0,r.kt)("strong",{parentName:"p"},"inclusive"),". The next interval, however, uses a round left bracket, ",(0,r.kt)("inlineCode",{parentName:"p"},"(11 - 12]"),", so this is students ",(0,r.kt)("em",{parentName:"p"},"over 11")," and ",(0,r.kt)("em",{parentName:"p"},"up to and including 12")," (which is, of course, just all students aged 12)."),(0,r.kt)("p",{parentName:"admonition"},"Where this notation becomes important is if the numeric variable can take decimal values. For example, the interval ",(0,r.kt)("inlineCode",{parentName:"p"},"(10 - 15]")," can include any value greater than 10 and less than or equal to 15. It could include the value 10.2, for example, but could not contain 10. It can, however, include the value 15. An easy way to remember this is to think of the numbers as blocks ","\u2014"," the square bracket can fit nice and snug around the number 15, but the round bracket leaves a small space between it and 10.")),(0,r.kt)("h2",{id:"subset-two-vars"},"Subsetting by two variables"),(0,r.kt)("p",null,"Finally, we will quickly look at how iNZight lets us explore an additional relationship by using the last box in the control panel: ",(0,r.kt)("strong",{parentName:"p"},"Subset Variable 2"),". This behaves a little differently that the first subsetting variable, and instead provides a look a ",(0,r.kt)("strong",{parentName:"p"},"only one")," level of the subset variable, rather than all at once. We will look at the relationship between height and armspan once again,\nthis time subset by age and gender."),(0,r.kt)("p",null,"First, set ",(0,r.kt)("strong",{parentName:"p"},"Variable 1")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"height")," and ",(0,r.kt)("strong",{parentName:"p"},"Variable 2")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"armspan")," to create a scatter plot of height against armspan. Now, set ",(0,r.kt)("strong",{parentName:"p"},"Subset Variable 1")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"age"),": you should see the plot of height against armspan by four separate age groups. Finally, set ",(0,r.kt)("strong",{parentName:"p"},"Subset Variable 2")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"gender"),". This time, you should see no change in the graph. Here\u2019s what you should see:"),(0,r.kt)("p",null,"// TODO: add figure"),(0,r.kt)("p",null,"In order to make use of the second subset variable, we need to use the slider. Start by dragging the slider one notch to the right (\u201cfemale\u201d). The graph should now show you the graph of height versus armspan ",(0,r.kt)("strong",{parentName:"p"},"only of females"),":"),(0,r.kt)("p",null,"// TODO: add figure"),(0,r.kt)("p",null,"Moving the slider one place further will show only males in the plot."),(0,r.kt)("p",null,"Lastly, if you slide the slider all the way to the right (",(0,r.kt)("inlineCode",{parentName:"p"},"_MULTI"),"), you\u2019ll see a two-way matrix, or grid, of plots for each combination of age group and gender. This can get quite messy if either (or both!) variables have lots of levels, which is why the default is to not filter at all."))}b.isMDXComponent=!0},1041:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/inzight_cas_cellsource_gender_subset_age-16c6f70c691d5e053addb08b680eb466.png"}}]);