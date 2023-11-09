# Stocks/ETFs Broking Website

This is a web application built using Next.js for a stocks/ETFs website. It includes two main pages: Explore Page and Product Page, with a common header and search functionality.

## Pages
![up](https://github.com/incruder1/GrowwStocks__/assets/56020041/49631d6a-3833-4512-84d0-2f038a823f79)
![down](https://github.com/incruder1/GrowwStocks__/assets/56020041/a206248e-dd15-4f9e-bea7-185a087dba53)
![4](https://github.com/incruder1/GrowwStocks__/assets/56020041/a6b30d76-b786-445a-8eb8-88a70af0f5dd)

![3](https://github.com/incruder1/GrowwStocks__/assets/56020041/8bede1de-fb25-471f-beaf-a8a25516e355)

### Explore Page

The Explore Page is designed to display information about the top gainers and losers in the stock/ETF market. It consists of two tabs: Top Gainers and Top Losers. Each of these sections contains a grid of cards, with 20 cards in each section, and a "Load More" button for additional cards.

- Clicking on a card in this section will route the user to the Product Page for the selected stock/ETF.

### Product Page

The Product Page provides detailed information about a specific stock/ETF. It displays basic information about the stock/ETF and a line graph showing price trends.

## Common Header

Both pages feature a common header that displays the application name and includes a search bar.

- The search bar allows users to type in stock/ETF names or keywords.
- As users type, it displays suggested stocks/ETFs based on the input.

## Technologies Used

This project utilizes the following technologies:

- [Next.js](https://nextjs.org/): The main framework for building the web application.
- [React](https://reactjs.org/): Used for building the user interface components.
- [Chart.JS](https://www.chartjs.org/): To display the line graph of price trends (you can choose a suitable library).
- [AlphaAdvantage](https://www.alphavantage.co): You'll need to integrate with a data source or API to fetch stock/ETF information.

## Setup and Installation

To run this application on your local development environment, follow these steps:

1. Clone this repository to your local machine.
2. Install the required dependencies using your preferred package manager (e.g., `npm install` or `yarn install`).
3. Set up API integration to fetch stock/ETF data.
4. Run the application using `npm run dev` or `yarn dev`.

Make sure to configure the project and API endpoints as needed.  
