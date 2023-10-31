# Stocks/ETFs Broking Website

This is a web application built using Next.js for a stocks/ETFs website. It includes two main pages: Explore Page and Product Page, with a common header and search functionality.

## Pages

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
