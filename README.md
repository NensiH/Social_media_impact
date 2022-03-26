# Social_media_impact

![gettyimages-459883190-dcb1497c2baca73b4be735ecd2e139152cd1ef32-s1100-c50](https://user-images.githubusercontent.com/92277581/157372626-6bcbadbe-17f1-42c0-b21b-66f77e1b168e.jpeg)

## Team:

[Quang Nguyen](https://github.com/utpetroleum)

[Nensi Dobaria](https://github.com/NensiH)

[Namrata Shah](https://github.com/namu12345)

[Tina Bellon](https://github.com/TinaBeee)

[Ima Richburg](https://github.com/imarichburg)

### Selected topic
An examination of suicides across several decades, countries and generations that also looks at the correlation between social media use and suicide rates in the U.S. in more recent years among younger generations.

### Reason why we selected our topic
Social media's growing influence has completely altered the way young generations are growing up, resulting in online connections, experiences and exchanges no previous generations had access to. But a growing number of studies also link frequent social media use to a loss of sleep, depression, anxiety, low self-esteem and a feeling of loneliness.

Researcher continue to study a potential causal link between social media use and declines in mental health. But internal Facebook documents published by several news outlets show that the social media giant is aware of the impact its product have on particularly young, female users.

Suicide is a serious societal problem and the result of complex socioeconomic and cultural factors. Even if our analysis should show that social media use only has a minimal impact, we believe any measure to decrease risk and increase suicide prevention is worth pursuing.

### Description of our source of data
We are using a suicide data set from Kaggle, which lists suicides from around the world by country from 1985 until 2015. The data is split by gender, age and generation, and also lists the respective country's Human Development Index and GDP in a particular year.

For social media usage, we rely on a Pew Research dataset that collected the share of U.S. adults using different forms of social media from 2005 through 2021. The data is broken down by age groups.

### Data Integration:
The Team have reviewed all the datasets listed previously, selected the main and the supporting datasets, and worked on cleaning and analyzing them. The main dataset was preprocessed and analyzed in order to test a ML model and to select the most appropriate one. We have used Python and Jupyter notebook to transform structured and unstructured data as well as data cleaning and deliver it to SQL for necessary joins and divide data into meaningful CSVs. We have then used these datasets for Tableau visualization.

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

The random forest regressor model also showed improvement in the residual plot. A residual plot shows the difference between the true value of y and the predicted values of y, ideally we want out predictions to be close to zero on the y-axis. We can see in the linear regression residual plot, the difference is between the ranges of negative 15 to 10. In the random forest regressor residual plot, the ranges improve by decreasing to a range of negative 2 to 1.5.

![Fig2](https://user-images.githubusercontent.com/92401000/160256730-36e62161-c040-49ec-ab53-e6db33e61e3c.png)

![Fig3](https://user-images.githubusercontent.com/92401000/160256734-25354167-b410-463b-a7b6-af85cef0a87d.png)

### Explanation of changes in model choice (if changes occurred between the Segment 2 and Segment 3 deliverables)
No changes were made. 

### Description of how they have trained the model thus far, and any additional training that will take place
In our random forest regressor model, we instantiated the model with 1,000 decision trees and used random_state = 42. We fit the model to the training data (X_train, y_train) then use the forest’s predict method on the test data (X_test) to predict the output y.

### Description of current accuracy score
The random forest regressor model mean squared error (MSE) is 0.88265 and R-squared is 0.99394.
The accuracy score for the training dataset is 0.99939 and for the testing dataset is 0.99394. 

### Description of feature importance

![Fig4](https://user-images.githubusercontent.com/92401000/160256750-5c66814b-a312-4558-bd01-2deb00e351f1.png)

The top 3 most important features impacting the random forest regressor model are:
-	sex_m
-	age_range_5-14 years
-	sex_f

The advantage of using Scikit-learn default feature importance is it provides a fast calculation and is easy to retrieve in one command. However, the disadvantage is it has a tendency to inflate the importance of continuous features or high-cardinality categorical variables (as seen in male and female sex).

## Visualization/Dashboard: 

- We used Tableau as a part of our dashboard. Our Tableau analysis can be found here [Tableau Dashboard](https://public.tableau.com/app/profile/nensi7308/viz/SocialmediausageandSuiciderates/Dashboard1).
