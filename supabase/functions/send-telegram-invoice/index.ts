import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

function generateInvoiceHTML(data: any): string {
  const {
    orderNumber, name, phone, email, city, district, address,
    items, totalPrice, discountPercent, discountAmount, couponCode,
    shipping, finalTotal, paymentMethod, paymentMonths
  } = data;

  const methodNames: Record<string, string> = {
    visa: 'فيزا',
    installment: 'تقسيط بالفيزا',
    tabby: 'تابي',
    tamara: 'تمارا',
  };

  const date = new Date().toLocaleDateString('ar-EG', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  const itemsRows = items.map((item: any) => `
    <tr>
      <td>${item.name}</td>
      <td>${item.quantity}</td>
      <td>${item.price} ر.س</td>
      <td>${item.total} ر.س</td>
    </tr>
  `).join('');

  const discountSection = discountPercent > 0 ? `
    <tr class="discount-row">
      <td>خصم ${discountPercent}%</td>
      <td>- ${discountAmount} ر.س</td>
    </tr>
    ${couponCode ? `<tr><td>كود الخصم</td><td>${couponCode}</td></tr>` : ''}
  ` : '';

  return `<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
<title>فاتورة #${orderNumber}</title>
<link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800&display=swap" rel="stylesheet">
<style>
  @page { size: A4; margin: 0; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: 'Tajawal', 'Segoe UI', Tahoma, sans-serif;
    direction: rtl;
    color: #2d2d2d;
    background: #fff;
    max-width: 800px;
    margin: 0 auto;
    padding: 0;
    font-size: 14px;
    line-height: 1.6;
    width: 100%;
  }

  .header {
    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
    color: #fff;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
  }
  .header .brand h1 {
    font-size: 28px;
    letter-spacing: 8px;
    font-weight: 800;
    margin: 0;
  }
  .header .brand p {
    color: #999;
    font-size: 12px;
    margin-top: 2px;
  }
  .header .invoice-meta {
    text-align: left;
    font-size: 12px;
    color: #ccc;
  }
  .header .invoice-meta .order-num {
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 4px;
    word-break: break-all;
  }

  .content { padding: 16px; }

  .section-title {
    font-size: 15px;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 12px;
    padding-bottom: 8px;
    border-bottom: 2px solid #f0f0f0;
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
  }
  .section-title .icon { font-size: 18px; }

  .info-grid {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 24px;
  }
  .info-item {
    display: flex;
    gap: 8px;
    align-items: baseline;
  }
  .info-item .label {
    color: #888;
    font-size: 13px;
    min-width: 60px;
    flex-shrink: 0;
    font-weight: 600;
  }
  .info-item .value {
    font-weight: 500;
    color: #2d2d2d;
    word-break: break-word;
  }

  .products-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 24px;
    font-size: 13px;
  }
  .products-table thead th {
    background: #f7f7f7;
    padding: 10px 8px;
    text-align: right;
    font-weight: 600;
    font-size: 12px;
    color: #666;
    border-bottom: 2px solid #e8e8e8;
    white-space: nowrap;
  }
  .products-table tbody td {
    padding: 10px 8px;
    border-bottom: 1px solid #f0f0f0;
    font-size: 13px;
    vertical-align: top;
  }

  .totals-box {
    background: #fafafa;
    border-radius: 10px;
    padding: 16px;
    margin-bottom: 24px;
  }
  .totals-box table {
    width: 100%;
    border-collapse: collapse;
  }
  .totals-box td {
    padding: 6px 0;
    font-size: 14px;
  }
  .totals-box td:first-child { color: #666; }
  .totals-box td:last-child {
    text-align: left;
    font-weight: 500;
  }
  .totals-box .discount-row td { color: #dc3232; font-weight: 600; }
  .totals-box .total-final {
    border-top: 2px solid #1a1a1a;
    margin-top: 8px;
    padding-top: 10px;
  }
  .totals-box .total-final td {
    font-size: 18px;
    font-weight: 800;
    color: #007c3c;
  }
  .totals-box .total-final td:first-child { color: #1a1a1a; }

  .payment-info {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 24px;
    padding: 14px 16px;
    background: #f0f8f0;
    border-radius: 8px;
    border-right: 4px solid #007c3c;
  }
  .payment-info .item { display: flex; gap: 8px; align-items: center; }
  .payment-info .item .label { color: #666; font-size: 13px; }
  .payment-info .item .value { font-weight: 600; }

  .footer {
    text-align: center;
    padding: 16px;
    color: #bbb;
    font-size: 12px;
    border-top: 1px solid #f0f0f0;
  }

  @media print {
    body { max-width: none; }
    .header { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .totals-box, .payment-info { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  }
</style>
</head>
<body>

<div class="header">
  <div class="brand">
    <h1>ALEZZ</h1>
    <p>فاتورة شراء</p>
  </div>
  <div class="invoice-meta">
    <div class="order-num">#${orderNumber}</div>
    <div>${date}</div>
  </div>
</div>

<div class="content">

  <div class="section-title"><span class="icon">👤</span> بيانات العميل</div>
  <div class="info-grid">
    <div class="info-item">
      <span class="label">الاسم:</span>
      <span class="value">${name}</span>
    </div>
    <div class="info-item">
      <span class="label">الجوال:</span>
      <span class="value">${phone}</span>
    </div>
    ${email ? `<div class="info-item">
      <span class="label">البريد:</span>
      <span class="value">${email}</span>
    </div>` : ''}
    <div class="info-item">
      <span class="label">المدينة:</span>
      <span class="value">${city}</span>
    </div>
    <div class="info-item">
      <span class="label">الحي:</span>
      <span class="value">${district}</span>
    </div>
    <div class="info-item full-width">
      <span class="label">العنوان:</span>
      <span class="value">${address}</span>
    </div>
  </div>

  <div class="section-title"><span class="icon">📦</span> المنتجات</div>
  <table class="products-table">
    <thead>
      <tr>
        <th>المنتج</th>
        <th>الكمية</th>
        <th>السعر</th>
        <th>الإجمالي</th>
      </tr>
    </thead>
    <tbody>
      ${itemsRows}
    </tbody>
  </table>

  <div class="section-title"><span class="icon">💰</span> ملخص الفاتورة</div>
  <div class="totals-box">
    <table>
      <tr>
        <td>المجموع</td>
        <td>${totalPrice} ر.س</td>
      </tr>
      ${discountSection}
      <tr>
        <td>الشحن</td>
        <td>${shipping === 0 ? 'مجاني 🚚' : shipping + ' ر.س'}</td>
      </tr>
      <tr class="total-final">
        <td>الإجمالي النهائي</td>
        <td>${finalTotal} ر.س</td>
      </tr>
    </table>
  </div>

  <div class="payment-info">
    <div class="item">
      <span class="label">💳 طريقة الدفع:</span>
      <span class="value">${methodNames[paymentMethod] || paymentMethod}</span>
    </div>
    ${paymentMonths > 1 ? `<div class="item">
      <span class="label">📅 عدد الأشهر:</span>
      <span class="value">${paymentMonths}</span>
    </div>` : ''}
  </div>

</div>

<div class="footer">
  شكراً لتسوقكم معنا — ALEZZ
</div>

</body>
</html>`;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const TELEGRAM_BOT_TOKEN = Deno.env.get("TELEGRAM_BOT_TOKEN");
    const TELEGRAM_CHAT_ID = Deno.env.get("TELEGRAM_CHAT_ID");
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) throw new Error("Telegram not configured");

    const body = await req.json();

    // Generate HTML invoice
    const html = generateInvoiceHTML(body);
    const htmlBytes = new TextEncoder().encode(html);
    const htmlBlob = new Blob([htmlBytes], { type: "text/html" });

    // Send HTML document to Telegram
    const formData = new FormData();
    formData.append("chat_id", TELEGRAM_CHAT_ID);
    formData.append("document", htmlBlob, `invoice_${body.orderNumber}.html`);
    formData.append("caption", `📄 فاتورة طلب #${body.orderNumber}\n💰 الإجمالي: ${body.finalTotal} ر.س`);

    const docRes = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendDocument`,
      { method: "POST", body: formData }
    );
    const docData = await docRes.json();
    if (!docRes.ok) throw new Error(`Telegram sendDocument error: ${JSON.stringify(docData)}`);

    // Send summary text message
    let summary = `🧾 <b>طلب جديد #${body.orderNumber}</b>\n\n`;
    summary += `👤 ${body.name}\n📱 ${body.phone}\n`;
    if (body.email) summary += `📧 ${body.email}\n`;
    summary += `🏙 ${body.city} - ${body.district}\n📍 ${body.address}\n\n`;
    summary += `📦 <b>المنتجات:</b>\n`;
    for (const item of body.items) {
      summary += `  • ${item.name} × ${item.quantity} = ${item.total} ر.س\n`;
    }
    if (body.discountPercent > 0) {
      summary += `\n🎉 خصم ${body.discountPercent}% (-${body.discountAmount} ر.س)`;
      if (body.couponCode) summary += ` | كود: ${body.couponCode}`;
      summary += '\n';
    }
    summary += `\n🚚 الشحن: ${body.shipping === 0 ? 'مجاني' : body.shipping + ' ر.س'}\n`;
    summary += `💰 <b>الإجمالي: ${body.finalTotal} ر.س</b>\n`;
    summary += `💳 طريقة الدفع: ${body.paymentMethod}`;
    if (body.paymentMonths > 1) summary += ` (${body.paymentMonths} شهر)`;

    await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: summary, parse_mode: "HTML" }),
      }
    );

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Invoice error:", error);
    return new Response(JSON.stringify({ success: false, error: error instanceof Error ? error.message : "Unknown" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
