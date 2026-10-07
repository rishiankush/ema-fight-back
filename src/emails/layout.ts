export function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function fieldRow(label: string, value?: string) {
  if (!value?.trim()) return "";
  return `<tr>
    <td style="padding:10px 0;border-bottom:1px solid #eee;width:38%;color:#666;font-size:13px;vertical-align:top">${escapeHtml(label)}</td>
    <td style="padding:10px 0;border-bottom:1px solid #eee;color:#111;font-size:14px">${escapeHtml(value).replaceAll("\n", "<br />")}</td>
  </tr>`;
}

export function enquiryEmailHtml(options: {
  title: string;
  intro: string;
  rows: string;
}) {
  return `<!doctype html>
<html>
  <body style="margin:0;padding:24px;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;color:#111">
    <div style="max-width:640px;margin:0 auto;background:#fff;border:1px solid #e8e8e8">
      <div style="background:#111;padding:20px 24px">
        <p style="margin:0;color:#f2c231;font-size:11px;letter-spacing:0.16em;text-transform:uppercase">EMA Fight Back</p>
        <h1 style="margin:8px 0 0;color:#fff;font-size:22px">${escapeHtml(options.title)}</h1>
      </div>
      <div style="padding:24px">
        <p style="margin:0 0 18px;color:#555;font-size:14px;line-height:1.6">${escapeHtml(options.intro)}</p>
        <table style="width:100%;border-collapse:collapse">${options.rows}</table>
      </div>
      <div style="padding:14px 24px;background:#fafafa;color:#777;font-size:12px">
        Reply to this email to contact the person who submitted the form.
      </div>
    </div>
  </body>
</html>`;
}
