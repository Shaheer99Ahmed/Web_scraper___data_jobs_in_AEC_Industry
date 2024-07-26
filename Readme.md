# Web Scraping Data-Related Roles in AEC Industry

This project focuses on scraping job postings related to data science and other data-centric roles from LinkedIn, specifically targeting companies within the AEC-Industry. The goal is to analyze the demand for data skills in this industry.

## Table of Contents

1. [Introduction](#introduction)
2. [Data Collection](#data-collection)
3. [Challenges and Solutions](#challenges-and-solutions)
4. [Data Processing](#data-processing)
5. [Technologies Used](#technologies-used)
6. [Ethical Considerations](#ethical-considerations)
7. [Usage](#usage)
8. [Repository Structure](#repository-structure)
9. [License](#license)

## Introduction

This project aims to explore the landscape of data-related roles in the construction sector by collecting and analyzing job postings from LinkedIn. The data includes job titles, company names, job descriptions, URLs, matched keywords, and the count of these keywords in the job descriptions.

## Data Collection

- **Companies Scraped**: 19
- **Total Jobs Scraped**: 9859
- **Relevant Job Postings**: 117

The data was collected using a web scraper built with Playwright, capable of navigating LinkedIn's website and extracting relevant information.

## Challenges and Solutions

- **Mandatory Login**: Overcome by manipulating URLs to include search filters, bypassing the login requirement.
- **Lazy Loading**: Addressed by implementing an auto-scroll script that loads all available job postings, ensuring comprehensive data collection.

## Data Processing

The scraped data includes the following fields:
- **Job Title**
- **Company Name**
- **Job Description**
- **URL**
- **Matched Keywords**
- **Keywords Count**

Key Python libraries like pandas were used for data processing and analysis.

## Technologies Used

- **Web Scraping**: Playwright
- **Data Analysis and Visualization**: Pandas, Matplotlib, Seaborn
- **Data Storage**: JSON, Excel
- **Automation**: Playwright
- **Development Environment**: Jupyter Notebook

## Ethical Considerations

- **Public Data Only**: Scraping is confined to publicly available data, respecting privacy and user data protection norms.
- **No Fake Logins or Unauthorized Access**: Adheres to legal and ethical standards, ensuring data collection without unauthorized access.
- **Low-Speed Scraping**: Performed at a controlled pace to minimize impact on LinkedIn’s performance and user experience.

## Usage

To run the scraper and analyze the data, follow these steps:

1. **Set Up the Environment**:
   - Install the necessary packages using the provided `package.json` and `package-lock.json`.
   
2. **Run the Scraper**:
   - Use the `scraper.js` script to collect job postings data. Make sure to configure Playwright and have the necessary permissions.

3. **Data Processing and Analysis**:
   - Use the provided Jupyter Notebooks (`filtered_posting.ipynb` and `matching_keyword.ipynb`) to process the data and perform analysis.

## Repository Structure

- `filtered_posting.ipynb`: Jupyter Notebook containing the filtering and analysis of job postings.
- `matching_keyword.ipynb`: Jupyter Notebook for matching job descriptions with data-related keywords.
- `data/`: Directory containing JSON files with company names and collected job data.
- `scraper.js`: JavaScript file used to scrape job postings from LinkedIn.
- `package.json`: File containing the project dependencies.
- `package-lock.json`: File locking the versions of the project dependencies.
- `README.md`: This README file.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
