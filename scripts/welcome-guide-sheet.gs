function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Timestamp",
      "Name",
      "Phone",
      "Email",
      "Channel",
      "Looking for",
      "Everyone should know self-defense",
      "Safety a bigger worry",
      "Consent",
      "Skipped",
      "Source",
      "Follow-up due",
      "WhatsApp status",
      "Visitor email status",
    ]);
  }
  sheet.appendRow([
    data.submittedAt || new Date().toISOString(),
    data.name || "",
    data.phone || "",
    data.email || "",
    data.channel || "",
    data.lookingFor || "",
    data.everyoneShouldKnow || "",
    data.safetyWorry || "",
    data.consent || "",
    data.skipped || "",
    data.source || "welcome-popup",
    data.followUpDue || "",
    data.whatsappStatus || "",
    data.visitorEmailStatus || "",
  ]);
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(
    ContentService.MimeType.JSON,
  );
}
