import React, { useEffect, useState } from "react";
import { load } from "@cashfreepayments/cashfree-js";

export default function Packages() {
  const [cashfree, setCashfree] = useState(null);

  useEffect(() => {
    async function initializeCashfree() {
      const cashfreeInstance = await load({
        mode: "sandbox", //or production
      });
      setCashfree(cashfreeInstance);
    }
    initializeCashfree();
  }, []);

  async function completePayment() {
    try {
      console.log("payment clicked");
      const sessionIdResponse = await fetch("http://localhost:8081/order/sessionid", {
        method: "GET",
      }).then((res) => res.json());
      const sessionId = sessionIdResponse.payment_session_id;
      console.log("sessionId", sessionId);
      if (!sessionId) {
        console.log("no session id received");
        return;
      }

      let checkoutOptions = {
        paymentSessionId: sessionId,
        redirectTarget: document.getElementById("cf_checkout"),
        appearance: {
          width: "425px",
          height: "700px",
        }, //optional (_self, _blank, or _top)
      };

      if (cashfree) {
        let result = await cashfree.checkout(checkoutOptions);
        if (result.error) {
          console.log("There is some payment error, check for payment status");
          console.log(result.error);
        }
        if (result.redirect) {
          console.log("Payment will be redirected");
        }
        if (result.paymentDetails) {
          console.log("Payment has been completed, check for payment status");
          console.log(result.paymentDetails.paymentMessage);
        }
      } else {
        console.log("Cashfree SDK not initialized");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div id="cf_checkout" className="absolute"></div>
      <button className="max-w-[800px] mx-auto" onClick={completePayment}>
        click to pay
      </button>
      <button className="max-w-[800px] mx-auto">create aws account</button>
    </>
  );
}