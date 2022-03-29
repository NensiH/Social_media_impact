# Social_media_impact

![gettyimages-459883190-dcb1497c2baca73b4be735ecd2e139152cd1ef32-s1100-c50](https://user-images.githubusercontent.com/92277581/157372626-6bcbadbe-17f1-42c0-b21b-66f77e1b168e.jpeg)

## Description:
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


## Team:

[Quang Nguyen](https://github.com/utpetroleum)

[Nensi Dobaria](https://github.com/NensiH)

[Namrata Shah](https://github.com/namu12345)

[Tina Bellon](https://github.com/TinaBeee)

[Ima Richburg](https://github.com/imarichburg)


## First Segment:
1 Namrata: Database: ERD, PostgreSQL setup 

- Sample data that mimics the expected the expected final database structure or schema
- Draft machine learning module is connected to the provisional database

2 Quang: Machine Learning pseudo code

- Takes in data from the provisional database
- Outputs label(s) for input data
- Which model did you choose and why?
- How are you training your model?
- What is the model's accuracy?
- How does this model work?

3 Nensi: Github

- Includes a README.md
- At least one branch for each team member
- Each team member has at least four commits from the duration of the first segment

4 Ima : Description of the communication protocols in [Technology and tools](https://github.com/NensiH/Social_media_impact/blob/main/Technology.md)

- Which tools are the best fit for your project? 
- What will be used for each section? For example, data cleaning and data storage will be completed using two different tools. 
- How will the dashboard be built? 
- create a document named "technology.md" and push it up to your branch. Submit a link to your branch to your instructor during the virtual class.

5 Tina: Presentation

- Storyboard
- Description of the source of data


Following are some of our limitations while working on this project - **Social Media Impact on Suicide Rates**:

Yes you heard it right, Social Media is just an **impact** and not the only cause. Ofcourse correlation doesn’t always mean causation. But researchers suggest that the increase in mental illness is in part connected to the increase in social media use among young people. As you can see in below graph we can definatley corelate or we can say there is social media impact in young generation over the suicide cases.

<img width="926" alt="SocialMediaImpact_generationwise" src="https://user-images.githubusercontent.com/92283185/160523533-f630e71a-a1a1-4f50-a909-cce73b143df8.PNG">

 But at the same time we had dataset limitations as we are not able to corelate the below graph of suicide cases with the social media usage as you can see below the suicide rates per 100k population are going up from 1984 but it is steadily going down from 2004 whereas if you can notice the further below image where the social media usage is rapidly increasing from 2004. 

 ![image](https://user-images.githubusercontent.com/92283185/160520952-748ad14e-1059-49f4-a9b1-25d3de93b0d5.png)

![image](https://user-images.githubusercontent.com/92283185/160521914-c2527a5a-b4bf-457a-9b5f-71e5f5181a50.png)

- And if we see the merged dataset from both suicide and usage we can see a bit different picture to understand where we cannot completly deny on having social media impact on suicide cases:

<img width="933" alt="SocialMediaImpact_overtheyears" src="https://user-images.githubusercontent.com/92283185/160524297-0ff10ba5-f8d7-45a2-af67-f4d8f835bdc1.PNG">

- So our final takeaway is that Social Media is one of the factor of Suicide rates going up and there can be many other factors to be considered for e.g. Climate, Economy, Cultural issues.


