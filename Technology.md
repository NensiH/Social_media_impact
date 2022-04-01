# Social Media Impact Technologies 

<img width="1100" alt="Screen Shot 2022-03-31 at 7 04 27 PM" src="https://user-images.githubusercontent.com/37478490/161171782-05a32a68-e169-4bfc-acc5-c55e0d7f3249.png">


## Data Gathering
Two data sets will be utilized to determine the relationship between social media engagement and suicide rates in the US 
* Suicide US data CSV file from Kaggle
* Social media usage CSV file from Pew Research


## Data Cleaning and Analysis
Pandas will be used to clean the data and perform an exploratory analysis. Further analysis will be completed using Python in Jupyter Notebooks. The CSV files will be read into Pandas DataFrames for analysis and transformation.  Columns without function for this process will be dropped.  Rows or columns will be renamed to allow the clean DataFrames to be joined into one.
* Drop rows with international data
* Drop rows with Suicide data before 2005 and after 2015
* Drop null values and unneeded columns
* Rename columns to match column names in both DataFrames
* Select inner join or full join depending on needed columns from both DataFrames

## Database Storage
The initial ERD mock up will be done in [Quick Database Diagrams](https://app.quickdatabasediagrams.com/#/) .  PostgresSQL will be used tor the [ERD flowchart](https://github.com/NensiH/Social_media_impact/blob/main/Mockups/ERD_mockup.PNG) and database.  The cleaned and transformed data will be loaded into structured tables.

## Machine Learning
Multi-variate linear regression model will be used to explore the relationship between social media usage and suicide rates by generation in the United States. We will compare this to the Random Forest Regressor model. 
There are multiple features we would like to explore when understanding the relationship between social media engagement and mental health.  We will use feature importance data and P-value to understand which features are useful to feed into the ML model.  
* Plot data in scatterplot to in scatter plot to observe the trend
* Fit the model using test data to make predictions using test data
* Evaluate the model by calculating training and testing scores model scores.  
* Use Python statistics toolkit to determine feature importance, P-value, x and y cooeficients, slope etc.
 
## Dashboard
Tableau Desktop will be used to create the dashboard and data story. Tableau can access the data directly from the SQL database.  Tableau Desktop has the additional ability of creating a link that can be accessed online to share dashboards and stories with project results.  The [initial mockup](https://github.com/NensiH/Social_media_impact/blob/main/Mockups/Storyboard_template_final_project_UT_Austin_class.pdf) gives an outline of the dashboard plan.  The final presentation and results will be posted to GitHub Pages using HTML and CSS.

