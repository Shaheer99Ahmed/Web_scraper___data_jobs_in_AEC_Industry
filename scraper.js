const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
    const browser = await chromium.launch({ headless: false, timeout: 90000 });
    const page = await browser.newPage();

    const jsonContent = fs.readFileSync('data/companies/companies_list.json', 'utf8');
    const companyNames = JSON.parse(jsonContent).companies;

    let allJobData = [];
    let jobCounter = 0;

    for (const companyName of companyNames) {
        await page.goto('https://www.linkedin.com/jobs/search?src=go-pa');
        await page.type('#job-search-bar-keywords', companyName);
        await page.keyboard.press('Enter');
        await page.waitForNavigation();
        // const filteredUrl = page.url() + '&f_TPR=r2592000';
        // await page.goto(filteredUrl);
        // await page.waitForNavigation();


        let jobCards = await page.$$('.base-card__full-link');
        
        while (true) {
            let newJobCardsFetched = false;
            
            for (const card of jobCards) {
                const jobLink = await card.getAttribute('href');
                await card.click();
                await page.waitForTimeout(4000);

                const title = await page.$eval('.top-card-layout__title', el => el.textContent.trim());
                const description = await page.$eval('.show-more-less-html__markup', el => el.textContent.trim());

                allJobData.push({ title, company: companyName, job_link: jobLink, description });
                newJobCardsFetched = true;
                jobCounter++;

                if (jobCounter % 5 === 0) {
                    // Write to JSON file after every 5 jobs
                    fs.writeFileSync('data/collected-jobs/linkedInJobsData.json', JSON.stringify(allJobData, null, 2));
                }

                await page.evaluate('window.scrollBy(0, window.innerHeight)');
                await page.waitForTimeout(1000);
            }

            if (!newJobCardsFetched) break;  // Break if no new jobs were fetched

            const seeMoreButton = await page.$('button.infinite-scroller__show-more-button');
            if (!seeMoreButton) break;  // Break if no more jobs to load

            jobCards = await page.$$('.base-card__full-link'); // Re-query for updated job cards list
        }

        await page.evaluate('window.scrollTo(0, 0)');
        await page.fill('#job-search-bar-keywords', '');
    }

    // Final save for any remaining data
    fs.writeFileSync('data/collected-jobs/linkedInJobsData.json', JSON.stringify(allJobData, null, 2));

    await browser.close();
})();
