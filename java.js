
setInterval(getCryptoCompare, 1000);

function getCryptoCompare() {
  $.when(
    $.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,DOGE,XRP,SHIB&tsyms=USD")
  ).done(function (data) {
    $("#SandPrice").text((data.RAW.BTC.USD.PRICE).toLocaleString("en-US", {style: "currency", currency: "USD"}));
  });
}

