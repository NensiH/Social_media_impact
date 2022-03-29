# Social_media_impact

![gettyimages-459883190-dcb1497c2baca73b4be735ecd2e139152cd1ef32-s1100-c50](https://user-images.githubusercontent.com/92277581/157372626-6bcbadbe-17f1-42c0-b21b-66f77e1b168e.jpeg)

## Team

[Quang Nguyen](https://github.com/utpetroleum)

[Nensi Dobaria](https://github.com/NensiH)

[Namrata Shah](https://github.com/namu12345)

[Tina Bellon](https://github.com/TinaBeee)

[Ima Richburg](https://github.com/imarichburg)

## Topic

### Selected topic
An examination of suicides across several decades, countries and generations that also looks at the correlation between social media use and suicide rates in the U.S. in more recent years among younger generations.

### Reason why we selected our topic
Social media's growing influence has completely altered the way young generations are growing up, resulting in online connections, experiences and exchanges no previous generations had access to. But a growing number of studies also link frequent social media use to a loss of sleep, depression, anxiety, low self-esteem and a feeling of loneliness.

Researcher continue to study a potential causal link between social media use and declines in mental health. But internal Facebook documents published by several news outlets show that the social media giant is aware of the impact its product have on particularly young, female users.

Suicide is a serious societal problem and the result of complex socioeconomic and cultural factors. Even if our analysis should show that social media use only has a minimal impact, we believe any measure to decrease risk and increase suicide prevention is worth pursuing.

### Description of our source of data
We are using a suicide data set from Kaggle, which lists suicides from around the world by country from 1985 until 2015. The data is split by gender, age and generation, and also lists the respective country's Human Development Index and GDP in a particular year.

For social media usage, we rely on a Pew Research dataset that collected the share of U.S. adults using different forms of social media from 2005 through 2021. The data is broken down by age groups.

### Questions we hope to answer with the data
We want to analyze how suicide rates changed over the decades and across different generations to determine specific patterns and identify high-risk groups for suicide. We plan to use two types of regression analyses to determine if our algorithm can accurately predict suicide rates among the different generations we identify.

We also want to determine whether an uptick in social media use in recent years overlaps with an increase in suicide rates, particularly among younger cohorts who use social media in the greatest numbers. To determine correlation, we plan to visualize U.S. suicide rates and social media use over time.

## Tools
- Source Control
  - Github
- Creating Database
  - PostgreSQL
  - SQLAlchemy
- Data cleaning and Analyzing
  - Python
  - Jupyter notebook
  - Pandas
- Machine Learning
  - scikit-learn
  - Linear Regression model
  - Random forest regressor model
- Dashboard
  - Tableau
  - MatplotLib
  - Leaflet
  - Mapbox
  - Javascript
  - HTML
  - CSS

## Machine Learning

### Description of data preprocessing
First, we used the .info() function to find data info on each columns non-null count and its data type. We decided to perform machine learning on just United States country and suicide year equal to or greater than 2005. We filtered out the dataframe column “country” == “United States” and “year” >= “2005”.

![info](https://user-images.githubusercontent.com/92401000/160256439-da604a22-572b-4cff-9fa7-3377ffed63fd.PNG)

Next, we plotted “year” versus “suicides_100k_pop” on a scatter plot to determine any trend. Based on the scatter plot, we saw a linear trend, which is best suited for machine learning regression models.

![Fig1](https://user-images.githubusercontent.com/92401000/160256454-3d211bd9-b8da-484d-9547-30f7b7f758a4.png)

### Description of feature engineering and the feature selection, including the decision-making process
First, we removed the “country”, “suicides_no”, and “country_year” columns due to its redundancy to the other columns, then we removed “HDI_for_year” column due to half its data being null values.
Next, we generated categorical variable lists of columns containing “object” for data types. Then, we used OneHotEncoder to transform the object data types to integer so it can be feed into machine learning model. We merged the one-hot encoded features back to the dataframe and drop the original “object” columns.

### Description of how data was split into training and testing sets
We created two separate dataframe, one for training set and the other for testing set. For the training set, we filtered the dataframe where year <= 2012, so the training set contained 13 years from 2005-2012. For the testing set, we filtered the dataframe where year > 2012, so the training set contained three years from 2013-2015.
Then, we split our preprocessed data into features and target arrays for X_train, y_train, X_test, y_test.  The “suicides_100k_pop” column was the target array and rest of the other seven columns was features. We normalized the X_train and X_test features using StandardScaler() function.

### Explanation of model choice, including limitations and benefits
We decided to perform two multivariate regression model, linear regression and random forest regressor for comparison. 
The linear regression model is a “best fit” line through all data points. The advantage of using this model is it is easy to understand and you can clearly see what the biggest drivers of the model are. However, the disadvantages of using this simple model is it cannot capture complex relationships between variables and the model has the tendency to “overfit”.
The random forest regressor model takes the averages of many weaker decision trees and combines them to get better overall performance. The advantage of using this model is it tends to result in a very high quality models and fast to train. However, the disadvantages of using this model is can be slow to output predictions relative to other algorithms and can be difficult to understand predictions. 
After training both models, we decided to go with the random forest regressor due to its improvement in the mean squared error, R-square, and both training and testing scores compared to the linear regression model. 

#### Linear Regression Model:

![lr_mse_r2](https://user-images.githubusercontent.com/92401000/160256640-75266805-36f5-44d7-9f27-84a0dc16357e.PNG)

![lr_scores](https://user-images.githubusercontent.com/92401000/160256645-dc4a1bb5-4fc7-4df3-9e31-fa3950fb4caf.PNG)

#### Random Forest Regressor Model:

![rf_mse_r2](https://user-images.githubusercontent.com/92401000/160256713-5feb54db-3820-4911-bcf4-3ac33407261a.PNG)

![rf_scores](https://user-images.githubusercontent.com/92401000/160256715-0cb58094-bd7e-4516-9ac2-439f8356b35b.PNG)

The random forest regressor model also showed improvement in the residual plot. A residual plot shows the difference between the true value of y and the predicted values of y, ideally we want our predictions to be close to zero on the y-axis. We can see in the linear regression residual plot, the difference is between the ranges of negative 15 to 10. In the random forest regressor residual plot, the ranges improve by decreasing to a range of negative 2 to 1.5.

![Fig2](https://user-images.githubusercontent.com/92401000/160256730-36e62161-c040-49ec-ab53-e6db33e61e3c.png)

![Fig3](https://user-images.githubusercontent.com/92401000/160256734-25354167-b410-463b-a7b6-af85cef0a87d.png)

### Explanation of changes in model choice (if changes occurred between the Segment 2 and Segment 3 deliverables)
No changes were made. 

### Description of how the model was trained (or retrained, if the team is using an existing model)
In our random forest regressor model, we instantiated the model with 1,000 decision trees and used random_state = 42. We fit the model to the training data (X_train, y_train) then use the forest’s predict method on the test data (X_test) to predict the output y.

### Description and explanation of model's mean squared error (MSE) and R-squared score
The random forest regressor model mean squared error (MSE) is 0.88265 and R-squared is 0.99394. The mean squared error (MSE) tells us how close a regression line is to a set of points. The lower the MSE, the better the forecast. The R-squared tells us how well the regression model fits the observed data. In our model, an r-squared of 0.99394 reveals that 99.39% of the data fit the regression model.

The R-squared score for the training dataset is 0.99939 and for the testing dataset is 0.99394. 

### Description of feature importance

![Fig4](https://user-images.githubusercontent.com/92401000/160256750-5c66814b-a312-4558-bd01-2deb00e351f1.png)

The top 3 most important features impacting the random forest regressor model are:
-	sex_m
-	age_range_5-14 years
-	sex_f

The advantage of using Scikit-learn default feature importance is it provides a fast calculation and is easy to retrieve in one command. However, the disadvantage is it has a tendency to inflate the importance of continuous features or high-cardinality categorical variables (as seen in male and female sex).

## Database Integration

### Database stores static data for use during the project
Before storing socialmedia_mentalhealth.csv and socialmedia_usage_agewise.csv files into Postgres, both files were cleaned using jupyter notebook. 
In socialmedia_mentalhealth.csv, we renamed the column “suicide_year” to “year” so it can be merged with socialmedia_usage_agewise.csv within jupyter notebook. We removed rows where year = 2016 due to incomplete data and reset the index. Then we exported the cleaned dataframe as a new csv file and import dataframe into Postgres “social_media_impact” database as “mentalhealth” table using SQLAlchemy.

![mentalhealth_df](https://user-images.githubusercontent.com/92401000/160475009-e81194ea-d2df-4460-af01-4fa1985d3aea.png)

In socialmedia_usage_agewise.csv, we extracted the “year” from “usagedate” column and set it as a new column, then dropped the “usagedate” column. We created a new column “25-34 years age range” by taking the weighted average of “age_18_29_per” and “age_30_49_per” columns, then we renamed the other columns to match socialmedia_mentalhealth.csv age range. We used the “.melt” function to transpose the columns to rows. Then we use the median age of each age_range column to calculate the year born. Based on the year born, we used “.loc” function and conditionals to determine each age_range’s generation and added as a new column. Then we exported the cleaned dataframe as a new csv file and import dataframe into Postgres “social_media_impact” database as “usage” table using SQLAlchemy.

![usage_df](https://user-images.githubusercontent.com/92401000/160475045-85119037-045b-4d98-bc49-3e98d0e3bd61.png)

We decided to merge both these cleaned datasets by importing the csv files into jupyter notebook. Because we wanted to compared the suicide rates versus social media usage within the USA, we filtered the cleaned socialmedia_mentalhealth to “country” = “United States” and “year” >= “2005”. Once the socialmedia_mentalhealth was filtered, we merged it with the cleaned socialmedia_usage_agewise using an “inner join” on the “year” and “generation” columns. Then we exported the merged dataframe as a new csv file and import dataframe into Postgres “social_media_impact” database as “merged” table using SQLAlchemy. 

![merged_df](https://user-images.githubusercontent.com/92401000/160475082-87361fac-8a0f-4b24-8be3-1e1827a85132.png)

Note: We like to note that because we merged both datasets on non-unique columns, the merged dataframe contained a few duplicated rows.
### Database interfaces with the project in some format (e.g., scraping updates the database)
For data visualization, we decided to use Tableau a one of our BI tool. We made a live connection to PostgreSQL database to import our mentalhealth, usage, and join_usa tables. 

![tableau_integration](https://user-images.githubusercontent.com/92401000/160475319-e66e8746-f137-409a-9110-54546729fca7.PNG)

### Includes at least two tables (or collections, if using MongoDB)
After cleaning both our socialmedia_mentalhealth.csv and socialmedia_usage_agewise.csv, we imported the cleaned dataframes into social_media_impact database as "mentalhealth" and "usage" tables in Postgres using SQLAlchemy. 
### Includes at least one join using the database language (not including any joins in Pandas)
#### mentalhealth and usage tables ERD

![social_media_impact ERD](https://user-images.githubusercontent.com/92401000/160477657-c6aea87b-7131-49ed-8414-f3379a27e8e8.PNG)

In pgAdmin 4, we created two separate tables using two separate joins. First, we opened a query tool for social_media_impact database, performed an inner join on mentalhealth and usage tables on “year” and “generation”, output it as “join_allcountry” table. 

![join_allcountry_query](https://user-images.githubusercontent.com/92401000/160475962-a590a461-2592-4f5b-81a2-7de220557530.PNG)

For our second join, we performed an inner join on mentalhealth and usage tables on “year” and “generation” where “country” = “United States” and output it as “join_usa” table.

![join_usa_query](https://user-images.githubusercontent.com/92401000/160476042-6c82bd76-c516-4ea9-9e31-fc97b09c3be5.PNG)

### Includes at least one connection string (using SQLAlchemy or PyMongo)
In this project, we used SQLAlchemy connection string twice. After data cleaning for socialmedia_mentalhealth.csv and socialmedia_usage_agewise.csv, we imported the cleaned dataframes into social_media_impact database in Postgres using SQLAlchemy.
#### mentalhealth

![mentalhealth_connection_code](https://user-images.githubusercontent.com/92401000/160476909-9b6cfe29-f132-4e10-bd88-0eee834ff1d3.PNG)

#### usage

![usage_connection_code](https://user-images.githubusercontent.com/92401000/160476932-5ce32c4e-c8eb-4322-a567-99acd76ee9ef.PNG)

In our machine learning analysis, we connected to social_media_impact database using SQLAlchemy. We reflected the database into a new model and referenced the mentalhealth table as a class. We created our session (link) from python to the database, performed a query to retrieve all the necessary data, saved the query results as a dataframe and performed machine learning analysis on the dataframe. 

![ml_connection_code](https://user-images.githubusercontent.com/92401000/160477280-d17e89f6-c8f6-4811-83a3-d17df944fef9.PNG)

## Visualization/Dashboard: 

- We used Tableau as a part of our dashboard. Our Tableau analysis can be found here [Tableau Dashboard](https://public.tableau.com/app/profile/nensi7308/viz/SocialmediausageandSuiciderates/Dashboard1).

- We use Mapbox and Leaflet to create an interactive global map of the suicide data. All the files used to create the map can be found in this repo's [Map_Viz](https://github.com/NensiH/Social_media_impact/tree/main/Map_Viz) folder:

    <img width="1000" alt="Screen Shot 2022-03-27 at 13 35 28" src="https://user-images.githubusercontent.com/90064437/160295629-2ca18ac9-fa8b-46d8-92e5-42682102360e.png">

The map provides two toggle functions: one for the tile layer (i.e. the style of the map) and one to toggle between the different generations. The data displays average country-level suicides on a per capita basis of 100,000 over the entire duration of the dataset (1985 - 2016). The map displays (bubbles) are located on each country's capital and both the radius and color of the bubbles represents the scale of per-capita suicides.

The map was created by cleaning our original Kaggle suicide dataset to contain only average suicides/100k per country and average suidies/100k per country per generation. The results were then added to a geoJSON file that lists the world capitals with geographical point data (the geoJSON file has been uploaded to a [Github page](https://tinabeee.github.io/Data/capitals2.geojson) to make API requests to it). The data is then requsted using d3.json and radius and color styled based on number of suicides. The bubbles are added together with a popup marker that displays the country name and number of suicides when clicked on.

The map clearly illustrates that older generations are the most at-risk group for suicides, with average per-capita suicide numbers significantly higher for the Greatest Generation (those born between 1901 - 1927), and steadily decreasing the younger the generation gets:

<p align="middle">
  <img src="https://user-images.githubusercontent.com/90064437/160446929-db275a3b-eb96-4f0f-9259-fe3d7febe8fe.png" width="400" />
  <img src="https://user-images.githubusercontent.com/90064437/160447326-9cf984e0-c0ae-41ff-b465-cc296126a9d9.png" width="400" />
  <img src="https://user-images.githubusercontent.com/90064437/160447124-9dbb966b-36ef-4618-9184-3cfa944fc1c1.png" width="400" />
</p>

<p align="middle">
  <img src="https://user-images.githubusercontent.com/90064437/160448028-27a04311-4f83-4ed2-958e-f91d6f10cde1.png" width="400" />
  <img src="https://user-images.githubusercontent.com/90064437/160448453-10ede7ab-034b-43f5-a4b9-0cc408e7fb56.png" width="400" />
  <img src="https://user-images.githubusercontent.com/90064437/160448581-c6dfb45b-81c5-4ab8-9e40-57c3533d2c8b.png" width="400" />
</p>


To download and use the map on your own site, <b>you have to insert your own Mapbox API key</b>, or access token into the logic.js file. The current access token only works with one URL and cannot be used elsewhere. Mapbox provides 200,000 tile requests free of charge when you create a default public token with an account on the [Mapbox website](https://www.mapbox.com/). 

## Findings


## Hypothesis testing
At the outset of our project, our null hypothesis was that there is no relationship between social media use and suicide rates, while our alternative hypothesis was that there is a relationship between suicides and social media use.

Our analysis has shown that we cannot identify a correlation between the two datapoints as suicide is a complex socio-economic phenomenon with varied causes and influences. Social media use alone does not impact suicide rates, according to the datasets we analyzed. We therefore fail to reject our null hypothesis and find that there is no relationship between social media use and suicides.

## Limitations:

The following are some of the restrictions we encountered while working on this project: **The Impact of Social Media on Suicide Rates**:

Yes, you read that correctly: social media is only a **cause**, not the sole one. Of course, causation isn't always the same as correlation. However, studies believe that the rise in mental illness is linked in part to the rise in young people's usage of social media. As you can see in the graph below, we can definitively correlate or claim that social media has an impact on young people's suicide rates.

![image](https://user-images.githubusercontent.com/92283185/160662585-c24e2dca-7347-43f6-9ea8-50faa39f139b.png)

 However, due to dataset limitations, we were unable to correlate the below graph of suicide cases with social media usage. As you can see below, suicide rates per 100k population have been steadily declining since 1984, but have been steadily increasing since 2004, whereas social media usage has been rapidly increasing since 2004. This is due to the fact that our suicide rate dataset spans the years 1984 to 2015, whereas our social media usage dataset spans the years 2005 to 2021.
![image](https://user-images.githubusercontent.com/92283185/160662260-4beb8a34-a520-4024-82c4-560bc17b058c.png)
![image](https://user-images.githubusercontent.com/92283185/160662996-dee5b3ab-aafe-44a5-b8c1-cc34fbf17553.png)

When we combine the suicide and usage datasets, we get a slightly different picture of where we can't completely rule out the impact of social media on suicide instances. To add to it, the recession began in 2008, and as shown in the graph below, the increase in suicide rates from 2008 to 2010 is yet another factor.

![image](https://user-images.githubusercontent.com/92283185/160663247-bb96c4ea-e4e4-4a92-bd79-3fae13152dc9.png)

So, to summarize, **Social Media is not the ONLY factor contributing to rising suicide rates**, and there are many other aspects to consider, such as the economy, climate, cultural concerns, and so on.

![image](https://user-images.githubusercontent.com/92283185/160528159-f348061f-3a83-468d-979a-af9ec48a655d.png)
![image](https://user-images.githubusercontent.com/92283185/160528209-35c3b9dc-e329-496f-ae27-d332f3c312c1.png)



