
getCryptoCompare()
SetImages()
setInterval(getCryptoCompare, 5000);

function SetImages(){
    $.when(
        $.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=SAND,BTC,ETH,&tsyms=USD")
      ).done(function (data) {
        //Sand
        $("#EthLogo").html('<img src="https://cryptocompare.com' + data.RAW.ETH.USD.IMAGEURL + '">')
        //Bitcoin
        $("#btcLogo").html('<img src="https://cryptocompare.com' + data.RAW.BTC.USD.IMAGEURL + '">')
        //Eth
        $("#SandLogo").html('<img src="https://cryptocompare.com' + data.RAW.SAND.USD.IMAGEURL + '">')
      });
}

function getCryptoCompare() {
  $.when(
    $.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=SAND,BTC,ETH,&tsyms=USD")
  ).done(function (data) {
    //Sand
    $("#SandPrice").text("Sand is " + (data.RAW.SAND.USD.PRICE).toLocaleString("en-US", {style: "currency", currency: "USD"}))
    //Bitcoin
    $("#btcPrice").text("Bitcoin is " + (data.RAW.BTC.USD.PRICE).toLocaleString("en-US", {style: "currency", currency: "USD"}))
    //Eth
    $("#ETHPrice").text("ETH is " + (data.RAW.ETH.USD.PRICE).toLocaleString("en-US", {style: "currency", currency: "USD"}))
  });
}

