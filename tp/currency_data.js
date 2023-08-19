const currency_data = `
<div class="crypto_converter">
        <h2 class="cryptoHeader currency_h2">Crypto Currency Rates</h2>
        <div class="cryptoWidget">
            <crypto-converter-widget symbol live background-color="rgba(52, 52, 52, 0.8)" color="#f0ead6" border-radius="0.60rem" fiat="united-states-dollar" crypto="bitcoin" amount="1" decimal-places="2">
            </crypto-converter-widget>
        </div>
    </div>

    <div class="fiat_currency">
         <h2 class="currency_h1">Fiat Currency Converter</h2>
         <form id="currency_form">
            <p class="fiat_header">Select Currency</p>
            <div class="fiat_option">
               <div>
                  <label>From:</label>
                  <select id="from">
                     <option value=""> Select Currency </option>
                     <option value="AED">AED - United Arab Emirates</option>
                     <option value="AFN">AFN - Afghanistan</option>
                     <option value="ALL">ALL - Albania</option>
                     <option value="AMD">AMD - Armenia</option>
                     <option value="ANG">ANG - Netherlands</option>
                     <option value="AOA">AOA - Angola</option>
                     <option value="ARS">ARS - Argentina</option>
                     <option value="AUD">AUD - Australia</option>
                     <option value="AWG">AWG - Aruba</option>
                     <option value="AZN">AZN - Azerbaijan</option>
                     <option value="BAM">BAM - Bosnia and Herzegovina</option>
                     <option value="BBD">BBD - Barbados</option>
                     <option value="BDT">BDT - Bangladesh</option>
                     <option value="BGN">BGN - Bulgaria</option>
                     <option value="BHD">BHD - Bahrain</option>
                     <option value="BIF">BIF - Burundi</option>
                     <option value="BMD">BMD - Bermuda</option>
                     <option value="BND">BND - Brunei</option>
                     <option value="BOB">BOB - Bolivia</option>
                     <option value="BRL">BRL - Brazil</option>
                     <option value="BSD">BSD - Bahamas</option>
                     <option value="BTN">BTN - Bhutan</option>
                     <option value="BWP">BWP - Botswana</option>
                     <option value="BYN">BYN - Belarus</option>
                     <option value="BZD">BZD - Belize</option>
                     <option value="CAD">CAD - Canada</option>
                     <option value="CDF">CDF - D.R Congo</option>
                     <option value="CHF">CHF - Switzerland</option>
                     <option value="CLP">CLP - Chile</option>
                     <option value="CNY">CNY - China</option>
                     <option value="COP">COP - Colombia</option>
                     <option value="CRC">CRC - Costa Rica</option>
                     <option value="CUP">CUP - Cuba</option>
                     <option value="CVE">CVE - Cape Verde</option>
                     <option value="CZK">CZK - Czech Republic</option>
                     <option value="DJF">DJF - Djibouti</option>
                     <option value="DKK">DKK - Denmark</option>
                     <option value="DOP">DOP - Dominican</option>
                     <option value="DZD">DZD - Algeria</option>
                     <option value="EGP">EGP - Egypt</option>
                     <option value="ERN">ERN - Eritrea</option>
                     <option value="ETB">ETB - Ethiopia</option>
                     <option value="EUR">EUR - European Union</option>
                     <option value="FJD">FDJ - Fiji</option>
                     <option value="FKP">FKP - Falkland Islands</option>
                     <option value="FOK">FOK - Faroe Islands</option>
                     <option value="GBP">GBP - United Kingdom</option>
                     <option value="GEL">GEL - Georgia</option>
                     <option value="GGP">GGP - Guernsey</option>
                     <option value="GHS">GHS - Ghana</option>
                     <option value="GIP">GIP - Gibraltar</option>
                     <option value="GMD">GMD - Gambia</option>
                     <option value="GNF">GNF - Guinea</option>
                     <option value="GTQ">GTQ - Guatemala</option>
                     <option value="GYD">GYD - Guyana</option>
                     <option value="HKD">HKD - Hong Kong</option>
                     <option value="HNL">HNL - Honduras</option>
                     <option value="HRK">HRK - Croatia</option>
                     <option value="HTG">HTG - Haiti</option>
                     <option value="HUF">HUF - Hungary</option>
                     <option value="IDR">IDR - Indonesia</option>
                     <option value="ILS">ILS - Israel</option>
                     <option value="IMP">IMP - Isle of Man</option>
                     <option value="INR">INR - India</option>
                     <option value="IQD">IQD - Iraq</option>
                     <option value="IRR">IRR - Iran</option>
                     <option value="ISK">ISK - Iceland</option>
                     <option value="JEP">JEP - Jersey</option>
                     <option value="JMD">JMD - Jamaica</option>
                     <option value="JOD">JOD - Jordan</option>
                     <option value="JPY">JPY - Japan</option>
                     <option value="KES">KES - Kenya</option>
                     <option value="KGS">KGS - Kyrgyzstan</option>
                     <option value="KHR">KHR - Cambodia</option>
                     <option value="KID">KID - Kiribati</option>
                     <option value="KMF">KMF - Comoros</option>
                     <option value="KRW">KRW - South Korea</option>
                     <option value="KWD">KWD - Kuwait</option>
                     <option value="KYD">KYD - Cayman Islands</option>
                     <option value="KZT">KZT - Kazakhstan</option>
                     <option value="LAK">LAK - Laos</option>
                     <option value="LBP">LBP - Lebanon</option>
                     <option value="LKR">LKR - Sri Lanka</option>
                     <option value="LRD">LRD - Liberia</option>
                     <option value="LSL">LSL - Lesotho</option>
                     <option value="LYD">LYD - Libya</option>
                     <option value="MAD">MAD - Morocco</option>
                     <option value="MDL">MDL - Moldova</option>
                     <option value="MGA">MGA - Madagascar</option>
                     <option value="MKD">MKD - North Macedonia</option>
                     <option value="MMK">MMK - Myanmar</option>
                     <option value="MNT">MNT - Mongolia</option>
                     <option value="MOP">MOP - Macau</option>
                     <option value="MRU">MRU - Mauritania</option>
                     <option value="MUR">MUR - Mauritius</option>
                     <option value="MVR">MVR - Maldives</option>
                     <option value="MWK">MWK - Malawi</option>
                     <option value="MXN">MXN - Mexico</option>
                     <option value="MYR">MYR - Malaysia</option>
                     <option value="MZN">MZN - Mozambique</option>
                     <option value="NAD">NAD - Namibia</option>
                     <option value="NGN">NGN - Nigeria</option>
                     <option value="NIO">NIO - Nicaragua</option>
                     <option value="NOK">NOK - Norway</option>
                     <option value="NPR">NPR - Nepal</option>
                     <option value="NZD">NZD - New Zealand</option>
                     <option value="OMR">OMR - Oman</option>
                     <option value="PAB">PAB - Panama</option>
                     <option value="PEN">PEN - Peru</option>
                     <option value="PGK">PGK - Papua New Guinea</option>
                     <option value="PHP">PHP - Philippines</option>
                     <option value="PKR">PKR - Pakistan</option>
                     <option value="PLN">PLN - Poland</option>
                     <option value="PYG">PTG - Paraguay</option>
                     <option value="QAR">QAR - Qatar</option>
                     <option value="RON">RON - Romania</option>
                     <option value="RSD">RSD - Serbia</option>
                     <option value="RUB">RUB - Russia</option>
                     <option value="RWF">RWF - Rwanda</option>
                     <option value="SAR">SAR - Saudi Arabia</option>
                     <option value="SBD">SBD - Solomon Islands</option>
                     <option value="SCR">SCR - Seychelles</option>
                     <option value="SDG">SDG - Sudan</option>
                     <option value="SEK">SEK - Sweden</option>
                     <option value="SGD">SGD - Singapore</option>
                     <option value="SHP">SHP - Saint Helena</option>
                     <option value="SLE">SLE - Sierra Leone</option>
                     <option value="SOS">SOS - Somalia</option>
                     <option value="SRD">SRD - Suriname</option>
                     <option value="SSP">SSP - South Sudan</option>
                     <option value="STN">STN - São Tomé and Príncipe</option>
                     <option value="SYP">SYP - Syria</option>
                     <option value="SZL">SZL - Eswatini</option>
                     <option value="THB">THB - Thailand</option>
                     <option value="TJS">TJS - Tajikistan</option>
                     <option value="TMT">TMT - Turkmenistan</option>
                     <option value="TND">TND - Tunisia</option>
                     <option value="TOP">TOP - Tonga</option>
                     <option value="TRY">TRY - Turkey</option>
                     <option value="TTD">TTD - Trinidad and Tobago</option>
                     <option value="TVD">TVD - Tuvalu</option>
                     <option value="TWD">TWD - Taiwan</option>
                     <option value="TZS">TZS - Tanzania</option>
                     <option value="UAH">UAH - Ukraine</option>
                     <option value="UGX">UGX - Uganda</option>
                     <option value="USD">USD - United States</option>
                     <option value="UYU">UYU - Uruguay</option>
                     <option value="UZS">UZS - Uzbekistan</option>
                     <option value="VES">VES - Venezuela</option>
                     <option value="VND">VND - Vietnam</option>
                     <option value="VUV">VUV - Vanuatu</option>
                     <option value="WST">WST - Samoa</option>
                     <option value="XAF">XAF - Central Africa (CEMAC)</option>
                     <option value="XCD">XCD - Eastern Caribbean</option>
                     <option value="XDR">XDR - International Monetary Fund</option>
                     <option value="XOF">XOF - West African CFA</option>
                     <option value="YER">YER - Yemen</option>
                     <option value="ZAR">ZAR - South Africa</option>
                     <option value="ZMW">ZMW - Zambia</option>
                     <option value="ZWL">ZWL - Zimbabwe</option>
                     <option value="XPF">CFP Franc</option>
                  </select>
               </div>

               <div>
                  <label>To:</label>
                  <select id="to">
                     <option value=""> Select Currency </option>
                     <option value="AED">AED - United Arab Emirates</option>
                     <option value="AFN">AFN - Afghanistan</option>
                     <option value="ALL">ALL - Albania</option>
                     <option value="AMD">AMD - Armenia</option>
                     <option value="ANG">ANG - Netherlands</option>
                     <option value="AOA">AOA - Angola</option>
                     <option value="ARS">ARS - Argentina</option>
                     <option value="AUD">AUD - Australia</option>
                     <option value="AWG">AWG - Aruba</option>
                     <option value="AZN">AZN - Azerbaijan</option>
                     <option value="BAM">BAM - Bosnia and Herzegovina</option>
                     <option value="BBD">BBD - Barbados</option>
                     <option value="BDT">BDT - Bangladesh</option>
                     <option value="BGN">BGN - Bulgaria</option>
                     <option value="BHD">BHD - Bahrain</option>
                     <option value="BIF">BIF - Burundi</option>
                     <option value="BMD">BMD - Bermuda</option>
                     <option value="BND">BND - Brunei</option>
                     <option value="BOB">BOB - Bolivia</option>
                     <option value="BRL">BRL - Brazil</option>
                     <option value="BSD">BSD - Bahamas</option>
                     <option value="BTN">BTN - Bhutan</option>
                     <option value="BWP">BWP - Botswana</option>
                     <option value="BYN">BYN - Belarus</option>
                     <option value="BZD">BZD - Belize</option>
                     <option value="CAD">CAD - Canada</option>
                     <option value="CDF">CDF - D.R Congo</option>
                     <option value="CHF">CHF - Switzerland</option>
                     <option value="CLP">CLP - Chile</option>
                     <option value="CNY">CNY - China</option>
                     <option value="COP">COP - Colombia</option>
                     <option value="CRC">CRC - Costa Rica</option>
                     <option value="CUP">CUP - Cuba</option>
                     <option value="CVE">CVE - Cape Verde</option>
                     <option value="CZK">CZK - Czech Republic</option>
                     <option value="DJF">DJF - Djibouti</option>
                     <option value="DKK">DKK - Denmark</option>
                     <option value="DOP">DOP - Dominican</option>
                     <option value="DZD">DZD - Algeria</option>
                     <option value="EGP">EGP - Egypt</option>
                     <option value="ERN">ERN - Eritrea</option>
                     <option value="ETB">ETB - Ethiopia</option>
                     <option value="EUR">EUR - European Union</option>
                     <option value="FJD">FDJ - Fiji</option>
                     <option value="FKP">FKP - Falkland Islands</option>
                     <option value="FOK">FOK - Faroe Islands</option>
                     <option value="GBP">GBP - United Kingdom</option>
                     <option value="GEL">GEL - Georgia</option>
                     <option value="GGP">GGP - Guernsey</option>
                     <option value="GHS">GHS - Ghana</option>
                     <option value="GIP">GIP - Gibraltar</option>
                     <option value="GMD">GMD - Gambia</option>
                     <option value="GNF">GNF - Guinea</option>
                     <option value="GTQ">GTQ - Guatemala</option>
                     <option value="GYD">GYD - Guyana</option>
                     <option value="HKD">HKD - Hong Kong</option>
                     <option value="HNL">HNL - Honduras</option>
                     <option value="HRK">HRK - Croatia</option>
                     <option value="HTG">HTG - Haiti</option>
                     <option value="HUF">HUF - Hungary</option>
                     <option value="IDR">IDR - Indonesia</option>
                     <option value="ILS">ILS - Israel</option>
                     <option value="IMP">IMP - Isle of Man</option>
                     <option value="INR">INR - India</option>
                     <option value="IQD">IQD - Iraq</option>
                     <option value="IRR">IRR - Iran</option>
                     <option value="ISK">ISK - Iceland</option>
                     <option value="JEP">JEP - Jersey</option>
                     <option value="JMD">JMD - Jamaica</option>
                     <option value="JOD">JOD - Jordan</option>
                     <option value="JPY">JPY - Japan</option>
                     <option value="KES">KES - Kenya</option>
                     <option value="KGS">KGS - Kyrgyzstan</option>
                     <option value="KHR">KHR - Cambodia</option>
                     <option value="KID">KID - Kiribati</option>
                     <option value="KMF">KMF - Comoros</option>
                     <option value="KRW">KRW - South Korea</option>
                     <option value="KWD">KWD - Kuwait</option>
                     <option value="KYD">KYD - Cayman Islands</option>
                     <option value="KZT">KZT - Kazakhstan</option>
                     <option value="LAK">LAK - Laos</option>
                     <option value="LBP">LBP - Lebanon</option>
                     <option value="LKR">LKR - Sri Lanka</option>
                     <option value="LRD">LRD - Liberia</option>
                     <option value="LSL">LSL - Lesotho</option>
                     <option value="LYD">LYD - Libya</option>
                     <option value="MAD">MAD - Morocco</option>
                     <option value="MDL">MDL - Moldova</option>
                     <option value="MGA">MGA - Madagascar</option>
                     <option value="MKD">MKD - North Macedonia</option>
                     <option value="MMK">MMK - Myanmar</option>
                     <option value="MNT">MNT - Mongolia</option>
                     <option value="MOP">MOP - Macau</option>
                     <option value="MRU">MRU - Mauritania</option>
                     <option value="MUR">MUR - Mauritius</option>
                     <option value="MVR">MVR - Maldives</option>
                     <option value="MWK">MWK - Malawi</option>
                     <option value="MXN">MXN - Mexico</option>
                     <option value="MYR">MYR - Malaysia</option>
                     <option value="MZN">MZN - Mozambique</option>
                     <option value="NAD">NAD - Namibia</option>
                     <option value="NGN">NGN - Nigeria</option>
                     <option value="NIO">NIO - Nicaragua</option>
                     <option value="NOK">NOK - Norway</option>
                     <option value="NPR">NPR - Nepal</option>
                     <option value="NZD">NZD - New Zealand</option>
                     <option value="OMR">OMR - Oman</option>
                     <option value="PAB">PAB - Panama</option>
                     <option value="PEN">PEN - Peru</option>
                     <option value="PGK">PGK - Papua New Guinea</option>
                     <option value="PHP">PHP - Philippines</option>
                     <option value="PKR">PKR - Pakistan</option>
                     <option value="PLN">PLN - Poland</option>
                     <option value="PYG">PTG - Paraguay</option>
                     <option value="QAR">QAR - Qatar</option>
                     <option value="RON">RON - Romania</option>
                     <option value="RSD">RSD - Serbia</option>
                     <option value="RUB">RUB - Russia</option>
                     <option value="RWF">RWF - Rwanda</option>
                     <option value="SAR">SAR - Saudi Arabia</option>
                     <option value="SBD">SBD - Solomon Islands</option>
                     <option value="SCR">SCR - Seychelles</option>
                     <option value="SDG">SDG - Sudan</option>
                     <option value="SEK">SEK - Sweden</option>
                     <option value="SGD">SGD - Singapore</option>
                     <option value="SHP">SHP - Saint Helena</option>
                     <option value="SLE">SLE - Sierra Leone</option>
                     <option value="SOS">SOS - Somalia</option>
                     <option value="SRD">SRD - Suriname</option>
                     <option value="SSP">SSP - South Sudan</option>
                     <option value="STN">STN - São Tomé and Príncipe</option>
                     <option value="SYP">SYP - Syria</option>
                     <option value="SZL">SZL - Eswatini</option>
                     <option value="THB">THB - Thailand</option>
                     <option value="TJS">TJS - Tajikistan</option>
                     <option value="TMT">TMT - Turkmenistan</option>
                     <option value="TND">TND - Tunisia</option>
                     <option value="TOP">TOP - Tonga</option>
                     <option value="TRY">TRY - Turkey</option>
                     <option value="TTD">TTD - Trinidad and Tobago</option>
                     <option value="TVD">TVD - Tuvalu</option>
                     <option value="TWD">TWD - Taiwan</option>
                     <option value="TZS">TZS - Tanzania</option>
                     <option value="UAH">UAH - Ukraine</option>
                     <option value="UGX">UGX - Uganda</option>
                     <option selected value="USD">USD - United States</option>
                     <option value="UYU">UYU - Uruguay</option>
                     <option value="UZS">UZS - Uzbekistan</option>
                     <option value="VES">VES - Venezuela</option>
                     <option value="VND">VND - Vietnam</option>
                     <option value="VUV">VUV - Vanuatu</option>
                     <option value="WST">WST - Samoa</option>
                     <option value="XAF">XAF - Central Africa (CEMAC)</option>
                     <option value="XCD">XCD - Eastern Caribbean</option>
                     <option value="XDR">XDR - International Monetary Fund</option>
                     <option value="XOF">XOF - West African CFA</option>
                     <option value="YER">YER - Yemen</option>
                     <option value="ZAR">ZAR - South Africa</option>
                     <option value="ZMW">ZMW - Zambia</option>
                     <option value="ZWL">ZWL - Zimbabwe</option>
                     <option value="XPF">CFP Franc</option>
                  </select>
               </div>

            </div>



            <p class="fiat_header">Enter Amount</p>
            <div class="fiat_answer">
               <div>
                  <input type="number" id="amount" placeholder="Enter Amount" />
               </div>
               <div>
                  <button type="button" id="convert">Convert</button>
                  <span id="exchangeResult"></span>
               </div>
            </div>
         </form>
      </div>

`;