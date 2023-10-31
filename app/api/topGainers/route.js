// api/topGainers/

export async function GET(req, res) {
 const apiKey = process.env.API_KEY||"TK3TLI4UQ2XK3OBT";
  
  console.log(apiKey);
  try {
    const apiResponse = await fetch(
      `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo`
    );
    //API Key is not used it sir because check nhi kr pa rha hu. baar baar iski limit over ho jaati hai. 
    const apiData = await apiResponse.json();
    if (!apiData.top_gainers) {
      return new Response.json({ error: "Top Gainers data not found" });
    }

    const topGainers = apiData.top_gainers;

    return new Response(JSON.stringify({ topGainers  }));
  } catch (error) {
    console.error(`Error: ${error.message}`);
    return new Response.json({ error: "Internal Server Error" });
  }
}
