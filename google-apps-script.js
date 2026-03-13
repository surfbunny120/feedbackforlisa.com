/**
 * Google Apps Script for Feedback for Lisa
 *
 * SETUP INSTRUCTIONS:
 *
 * 1. Open your Google Sheet:
 *    https://docs.google.com/spreadsheets/d/13YHR9p0pOQY9qQt4qrjA2IJJIsMogq20xDrELruM_oo/edit
 *
 * 2. Create 4 tabs (rename/add sheets) with these EXACT names:
 *    - Lucky
 *    - A Game
 *    - Billionaire Budgeting!
 *    - The Plan
 *
 * 3. In each tab, add headers in Row 1:
 *    - A1: Feedback
 *    - B1: Date
 *
 * 4. Go to Extensions > Apps Script
 *
 * 5. Delete any existing code and paste the function below
 *
 * 6. Click Deploy > New deployment
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 *    - Click Deploy
 *
 * 7. Copy the Web app URL and give it to me — I'll update the site with it
 */

function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(data.episode);

  if (sheet) {
    sheet.appendRow([data.feedback, new Date()]);
  }

  return ContentService.createTextOutput("OK");
}
