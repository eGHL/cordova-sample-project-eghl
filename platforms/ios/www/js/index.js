/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  // Cordova is now initialized. Have fun!

  console.log("Running cordova-" + cordova.platformId + "@" + cordova.version);
  document.getElementById("deviceready").classList.add("ready");
  document.getElementById("makePayment").addEventListener("click", makePayment);
}

function makePayment() {
  eGHL.makePayment(
    {
      /*
       * Mandatory payment parameters list:
       * TransactionType, PymtMethod, ServiceID, PaymentID, OrderNumber, PaymentDesc, MerchantReturnURL, Amount, CurrencyCode, CustIp, CustName, CustEmail, CustPhone
       * Check the eGHL documentation for parameter names.
       */

      TransactionType: "SALE",
      PymtMethod: "ANY",
      CurrencyCode: "MYR",

      PaymentGateway: "https://pay.e-ghl.com/IPGSG/Payment.aspx", // Payment gateway URL given by eGHL
      ServiceID: "SIT", //Merchant Code or Service ID given by eGHL
      Password: "sit12345", // Merchant password given by eGHL
      MerchantName: "ABC Sdn Bhd",

      PaymentID: Date.now().toString(), // Unique string for each payment
      OrderNumber: "P0000001", // Order number to refer current payment, can duplicate.
      PaymentDesc: "eGHL Payment testing",
      Amount: "123.10", // e.g. 1000.00
      // Invalid format: 1,000.00 or 1000
      CustName: "Beta Tester",
      CustEmail: "Tester@mail.com",
      CustPhone: "60123456789",
      CustMAC: "",
      CustIP: "",
      MerchantReturnURL: "SDK", // redirect when payment complete.
      MerchantCallBackURL: "https://...", // server to server callback url
      MerchantApprovalURL: "https://...",
      MerchantUnApprovalURL: "https://...",
      LanguageCode: "EN",
      PageTimeout: "600", // eGHL payment page timeout in seconds
      CardHolder: "",
      CardNo: "",
      CardExp: "",
      CardCVV2: "",
      IssuingBank: "",
      TokenType: "",
      Token: "",
      Param6: "",
      Param7: "",
      B4TaxAmt: "",
      TaxAmt: "",
      BillAddr: "",
      BillPostal: "",
      BillCity: "",
      BillRegion: "",
      BillCountry: "",
      ShipAddr: "",
      ShipPostal: "",
      ShipCity: "",
      ShipRegion: "",
      ShipCountry: "",
      SessionID: "",
      EPPMonth: "",
      PromoCode: "",

      // SDK exclusive
      PaymentTimeout: -1, // Android: Force close webview after x seconds
      sdkTimeout: -1, // iOS: Force close webview after x seconds
      _finaliseMessage: "Finalising Payment", // iOS only
      _cancelMessage: "Cancelling Payment", // iOS only

      // Masterpass exclusive
      ReqToken: "",
      PairingToken: "",
      ReqVerifier: "",
      PairingVerifier: "",
      CheckoutResourceURL: "",
      CardId: "",
      PreCheckoutId: "",
    },
    function (resp) {
      // Success callback
      // TxnStatus:
      // 0 - Transaction Successful
      console.log("Response Success : " + JSON.stringify(resp));
    },
    function (err) {
      // Failure callback
      // TxnStatus:
      // 1 = Transaction Failed
      // 2 = Transaction Pending
      // Other = Error
      console.log("Response Error : " + JSON.stringify(err));
    }
  );
}
