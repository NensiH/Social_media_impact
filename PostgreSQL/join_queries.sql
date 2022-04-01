-- Joining mentalhealth and usage tables on "year"
SELECT mh.year, mh.country, mh.sex, mh.age_range, mh.population, mh.suicides_100k_pop,
	   mh.gdp_per_capita, mh.generation, u.usage
FROM mentalhealth AS mh
INNER JOIN usage AS u
ON (mh.year = u.year);

-- Joining mentalhealth and usage tables on "generation"
SELECT mh.year, mh.country, mh.sex, mh.age_range, mh.population, mh.suicides_100k_pop,
	   mh.gdp_per_capita, mh.generation, u.usage
FROM mentalhealth AS mh
INNER JOIN usage AS u
ON (mh.generation = u.generation);

-- Joining mentalhealth and usage tables on "year" AND "generation"
SELECT mh.year, mh.country, mh.sex, mh.age_range, mh.population, mh.suicides_100k_pop,
	   mh.gdp_per_capita, mh.generation, u.usage
INTO join_allcountry
FROM mentalhealth AS mh
INNER JOIN usage AS u
ON (mh.year = u.year) AND (mh.generation = u.generation);

-- Joining mentalhealth and usage tables on "year" AND "generation" U.S. country
SELECT mh.year, mh.country, mh.sex, mh.age_range, mh.population, mh.suicides_100k_pop,
	   mh.gdp_per_capita, mh.generation, u.usage
INTO join_usa
FROM mentalhealth AS mh
INNER JOIN usage AS u
ON (mh.year = u.year) AND (mh.generation = u.generation)
WHERE mh.country = 'United States';

SELECT * FROM join_usa;
