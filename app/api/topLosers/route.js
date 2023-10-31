// api/toplosers

export async function GET(req, res) {
  
  const apiKey = process.env.API_KEY||"TK3TLI4UQ2XK3OBT";
 

  try {
    const apiResponse = await fetch(
      `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo`
    );
    //API Key is not used it sir because check nhi kr pa rha hu. baar baar iski limit over ho jaati hai. Demo meh shi aa rh hai.
    const apiData = await apiResponse.json();

    // if 'top_losers' is present or not
    if (!apiData.top_losers) {
      return new Response.json({ error: "Top Losers data not found" });
    }

    // Extract the top_losers data
    const topLosers = apiData.top_losers;
 
    return new Response(JSON.stringify({ topLosers  }));
  } catch (error) {
    console.error(`Error: ${error.message}`);
    return new Response.json({ error: "Internal Server Error" });
  }
}
