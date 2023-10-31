// https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tesco&apikey=demo

// pages/api/tickerSearch.js

export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
    const keywords = searchParams.get("keywords") || "IBM";
   try {
      const apiResponse = await fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tesco&apikey=demo`);
      // const apiResponse =await fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keywords}&apikey=1yco`)
      // const apiData = await apiResponse.json();
      const name = apiData.bestMatches;
      return new Response(JSON.stringify({ name: name }));
    } catch (error) {
      console.error(`Error: ${error.message}`);

      return new Response.json({ error: "Internal Server Error" });
    }
  };
  