// api/mostActivelyTraded

export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  const symbol = searchParams.get("symbol") || "TK3TLI4UQ2XK3OBT";
  // const symbol = "IBM";
  const apiKey = process.env.API_KEY||"TK3TLI4UQ2XK3OBT";
  console.log("symbol", symbol, "apiKey", apiKey);

  try {
    const apiResponse = await fetch(
      `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=1yco`
    );
    const apiData = await apiResponse.json();
    // console.log(apiData);
    
    return new Response(JSON.stringify({ overview: apiData }));
  } catch (error) {
    console.error(`Error: ${error.message}`);
    return new Response.json({ error: "Internal Server Error" });
  }
}
