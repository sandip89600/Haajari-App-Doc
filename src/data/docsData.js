export const docsData = [
  {
    id: "account",
    title: "Account",
    description: "Manage your profile, security, and preferences",
    articles: [
      {
        id: "how-to-sign-up",
        title: "How to Sign Up",
        summary: "Learn how to register a new supervisor or contractor account on Haajari App.",
        readTime: "2 min read",
        lastUpdated: "July 7, 2026",
        content: `
# How to Sign Up on Haajari App

Welcome to Haajari App! Getting started takes less than two minutes. Follow this guide to set up your contractor or supervisor account.

### Step-by-Step Registration

1. **Download the App**: Install Haajari App from the Google Play Store or Apple App Store.
2. **Open the App**: Tap the Haajari icon on your device.
3. **Select Language**: Choose your preferred language (English, Hindi, Marathi, Gujarati, etc.).
4. **Enter Mobile Number**: Input your 10-digit mobile phone number.
5. **Verify OTP**: You will receive a 6-digit One-Time Password via SMS. Enter it to verify your number.
6. **Choose Your Role**:
   * **Contractor/Builder**: Select this if you manage multiple construction sites and supervisors.
   * **Supervisor**: Select this if you manage attendance on-site.
7. **Complete Your Profile**: Input your full name, company name (optional), and email address.

> [!TIP]
> Keep your mobile number active, as all OTP verifications and WhatsApp summaries will be routed to this number.
`
      },
      {
        id: "how-to-login",
        title: "How to Login",
        summary: "Access your account using secure OTP login or passwords.",
        readTime: "2 min read",
        lastUpdated: "July 5, 2026",
        content: `
# How to Login to Haajari App

Accessing your workforce dashboard is simple. We support secure passwordless login for ease of use on busy sites.

### Standard OTP Login (Recommended)

1. Open the Haajari App.
2. Enter your registered **10-digit Mobile Number**.
3. Tap **Request OTP**.
4. Enter the **6-digit verification code** sent to your phone.
5. You'll be automatically logged in to your active workspace.

### Password Login

If you have configured a password in your Profile Settings:
1. Tap **Login with Password** on the login screen.
2. Enter your mobile number/email and your password.
3. Tap **Sign In**.

> [!WARNING]
> Never share your OTP code with anyone, including individuals claiming to represent Haajari App Support.
`
      },
      {
        id: "forgot-password",
        title: "Forgot Password",
        summary: "Recover or reset your account password quickly.",
        readTime: "2 min read",
        lastUpdated: "July 2, 2026",
        content: `
# Forgot Password

If you forgot your password, you can reset it instantly using OTP verification.

### Reset Process

1. On the login screen, click **Forgot Password**.
2. Input your registered mobile number or email.
3. Tap **Send Verification Link / OTP**.
4. If using mobile, enter the SMS OTP. If using email, click the link in your inbox.
5. Set a strong new password (minimum 8 characters with numbers and letters).
6. Tap **Confirm** to update and sign in.
`
      },
      {
        id: "change-password",
        title: "Change Password",
        summary: "Update your existing password for security.",
        readTime: "2 min read",
        lastUpdated: "July 1, 2026",
        content: `
# Change Password

We recommend updating your password every 90 days to keep your workforce payroll data secure.

### Steps to Change Password:
1. Navigate to **Account Settings** -> **Security**.
2. Select **Change Password**.
3. Enter your current password.
4. Input your new password twice for confirmation.
5. Tap **Save Changes**.
`
      },
      {
        id: "update-profile",
        title: "Update Profile",
        summary: "Edit your personal info, company name, and language settings.",
        readTime: "3 min read",
        lastUpdated: "June 28, 2026",
        content: `
# Update Profile

Keep your information up to date to ensure accurate invoices and receipts.

### Editable Fields:
- **Full Name**: Appears on PDF reports.
- **Company Name**: Printed on invoice templates.
- **Email Address**: Used for billing alerts.
- **Default Language**: Change UI text translation.

### How to Update:
1. Go to **Settings** -> **Edit Profile**.
2. Tap the field you wish to edit and type the new details.
3. Click the checkmark icon or **Save Profile** button at the bottom.
`
      },
      {
        id: "delete-account",
        title: "Delete Account",
        summary: "Understand the implications and steps of account termination.",
        readTime: "2 min read",
        lastUpdated: "June 25, 2026",
        content: `
# Delete Account

> [!CAUTION]
> Deleting your account is permanent. This action will permanently erase all site history, worker profiles, and attendance/salary spreadsheets.

### Steps to Delete Account:
1. Tap **Settings** -> **Account Settings**.
2. Scroll to the bottom and click **Delete Account**.
3. Confirm by entering your registered phone number.
4. Complete the OTP challenge to finalize the deletion.
`
      },
      {
        id: "two-factor-authentication",
        title: "Two-Factor Authentication",
        summary: "Secure your financial data with an extra layer of protection.",
        readTime: "3 min read",
        lastUpdated: "June 20, 2026",
        content: `
# Two-Factor Authentication (2FA)

Add an extra layer of security to your payroll dashboards.

### Enabling 2FA
1. Go to **Settings** -> **Security**.
2. Toggle **Two-Factor Authentication**.
3. Select your verification method:
   - **SMS OTP**: Sent to your mobile phone.
   - **Authenticator App** (Google Authenticator): Scan the QR code to set up.
4. Save the backup recovery codes in a safe place.
`
      }
    ]
  },
  {
    id: "attendance",
    title: "Attendance",
    description: "Mark, edit, export, and audit employee attendance",
    articles: [
      {
        id: "mark-attendance",
        title: "Mark Attendance",
        summary: "How to check workers in/out, set half days, and add photo verification.",
        readTime: "3 min read",
        lastUpdated: "July 6, 2026",
        content: `
# How to Mark Attendance

Marking daily attendance is the core feature of Haajari App. Supervisors can record attendance in seconds.

### Quick Attendance Marking

1. Open the app and select your **Active Site**.
2. Tap the **Mark Attendance** tab.
3. You will see a list of workers assigned to this site.
4. For each worker, choose status:
   * **Present (P)**: Green icon. Worker was present for the full shift.
   * **Absent (A)**: Red icon. Worker was not present.
   * **Half Day (HD)**: Yellow icon. Marks half shift.
   * **Overtime (OT)**: Add overtime hours if applicable.
5. Tap **Submit Attendance** at the bottom.

> [!IMPORTANT]
> If Photo Verification is enabled for the site, you will be prompted to take a selfie/photo of the worker at the site before submission.
`
      },
      {
        id: "edit-attendance",
        title: "Edit Attendance",
        summary: "Correct mistakes in past attendance sheets.",
        readTime: "2 min read",
        lastUpdated: "July 4, 2026",
        content: `
# Editing Past Attendance

Mistakes happen. Haajari App allows you to correct attendance for past dates within the permitted lock window.

### Correction Steps:
1. Tap the **History** tab in the bottom menu.
2. Select the date from the calendar calendar.
3. Find the worker whose status needs modification.
4. Change the selection (e.g., from Absent to Present).
5. Add a brief reason for change (e.g., "Late arrival approved").
6. Click **Update Sheet**.

*Note: Only users with Contractor permissions can edit attendance beyond 3 days old.*
`
      },
      {
        id: "half-day",
        title: "Half Day Settings",
        summary: "Understand how half-days impact wages and reports.",
        readTime: "2 min read",
        lastUpdated: "July 2, 2026",
        content: `
# Half Day Settings

Setting half days automatically adjusts the worker's daily wage by **50%**.

### How to Mark Half Day:
- Toggle the **HD** button in the attendance screen.
- The app will automatically register 0.5 shifts.
- The wage calculations for the day will be updated instantly inside the salary module.
`
      },
      {
        id: "overtime",
        title: "Overtime (OT)",
        summary: "Calculate hourly and shift-based overtime.",
        readTime: "3 min read",
        lastUpdated: "June 30, 2026",
        content: `
# Overtime (OT)

Manage hours worked beyond standard shifts to compensate your workers fairly.

### OT Modes:
1. **Hourly OT**: Paid based on an hourly rate.
2. **Double Shift**: Adds a full second shift salary.

### Configuration:
- Go to the worker's profile -> **Wage Settings**.
- Define the hourly OT rate (e.g., ₹100/hour).
- While marking attendance, tap the **+** next to **OT** and select the hours worked.
`
      },
      {
        id: "attendance-history",
        title: "Attendance History",
        summary: "View daily, weekly, and monthly registers.",
        readTime: "2 min read",
        lastUpdated: "June 25, 2026",
        content: `
# Attendance History

Keep track of historical attendance logs for compliance and auditing.

- Access history by clicking **Reports** -> **Attendance Register**.
- Use filters to view logs by **Site**, **Supervisor**, or **Worker**.
- Green, yellow, and red grids give an instant visual status of the monthly sheet.
`
      },
      {
        id: "monthly-summary",
        title: "Monthly Summary",
        summary: "Review workforce presence trends and summaries.",
        readTime: "2 min read",
        lastUpdated: "June 22, 2026",
        content: `
# Monthly Summary

Get a bird's eye view of worker engagement.

- The monthly summary page displays totals: Present Days, Absent Days, Overtime Hours, and Active Sites.
- This summary helps contractors analyze resource allocations across active sites.
`
      },
      {
        id: "export-attendance",
        title: "Export Attendance Reports",
        summary: "Download attendance sheets as PDF or Excel spreadsheets.",
        readTime: "3 min read",
        lastUpdated: "June 18, 2026",
        content: `
# Exporting Attendance Reports

Need data offline? You can export clean reports in seconds.

### Exporting:
1. Navigate to **Reports**.
2. Choose **Attendance Sheet**.
3. Select date range (e.g., "This Month", "Last Month", or "Custom").
4. Choose file format: **PDF** (ready for printing) or **Excel** (for raw numbers).
5. Tap **Export & Share** to send directly via WhatsApp, email, or download.
`
      }
    ]
  },
  {
    id: "site-management",
    title: "Site Management",
    description: "Manage locations, supervisors, and progress updates",
    articles: [
      {
        id: "create-site",
        title: "Create Site",
        summary: "Step-by-step to register a new construction site project.",
        readTime: "2 min read",
        lastUpdated: "July 3, 2026",
        content: `
# Creating a Construction Site

Organizing your work by site is crucial for tracking attendance, materials, and progress.

### How to Create a Site:
1. Tap the site dropdown in the header or go to **Settings** -> **My Sites**.
2. Tap the **+ Create New Site** button.
3. Enter site details:
   - **Site Name** (e.g., "Vasant Heights A Wing")
   - **Address / Location** (Optional, for Geofencing verification)
   - **Start Date** & **Budget** (Optional)
4. Tap **Save Project**.
`
      },
      {
        id: "add-supervisor",
        title: "Add Supervisor",
        summary: "Delegate site management to supervisors with custom permissions.",
        readTime: "3 min read",
        lastUpdated: "June 29, 2026",
        content: `
# Add Supervisor to Site

Contractors can delegate day-to-day attendance tracking to supervisors.

### Assigning a Supervisor:
1. Navigate to **My Sites** and select your site.
2. Tap **Supervisors** -> **Assign Supervisor**.
3. Select an existing supervisor from your contacts or input their mobile number.
4. Define permissions (e.g., Can mark attendance, can edit wages, read-only).
5. The supervisor will receive an SMS invite link.
`
      },
      {
        id: "assign-workers",
        title: "Assign Workers",
        summary: "Link workers to specific sites for easy check-ins.",
        readTime: "2 min read",
        lastUpdated: "June 25, 2026",
        content: `
# Assign Workers to Site

Ensure that only active workers assigned to a specific site show up on the supervisor's dashboard.

### Steps:
1. Open the site dashboard.
2. Click **Workers** -> **Assign Workers**.
3. Check the boxes next to the workers you wish to assign.
4. Tap **Done**. The selected workers are now visible in the daily attendance list.
`
      },
      {
        id: "daily-work-plan",
        title: "Daily Work Plan",
        summary: "Create checklist goals for supervisors and teams.",
        readTime: "3 min read",
        lastUpdated: "June 20, 2026",
        content: `
# Daily Work Plan

Keep everyone aligned on project deliverables.

- Contractors can write a list of goals (e.g., "Pour slab on 3rd floor", "Lay brickwork in kitchen area").
- Supervisors view the work plan on their dashboards.
- Tasks can be checked off as completed, with options to attach photo proof.
`
      },
      {
        id: "voice-instructions",
        title: "Voice Instructions",
        summary: "Send audio instructions to non-literate workers or supervisors.",
        readTime: "2 min read",
        lastUpdated: "June 15, 2026",
        content: `
# Voice Instructions

In construction, clear communication is critical. Haajari supports direct audio messaging.

- Record voice instructions within the app chat.
- Transcripts are generated automatically in the target regional language.
- Ideal for sending quick tasks directly from the office to the field.
`
      },
      {
        id: "photo-verification",
        title: "Photo Verification",
        summary: "Enable geolocation and facial snaps to eliminate proxy attendance.",
        readTime: "3 min read",
        lastUpdated: "June 10, 2026",
        content: `
# Photo Verification

Prevent 'buddy punching' and proxy attendance using real-time photo confirmation.

### Enabling Photo Verification:
1. Go to **Site Settings**.
2. Toggle **Photo Verification Required**.
3. Select frequency: **Check-in Only** or **Check-in & Check-out**.
4. When marking attendance, supervisors must snap a photo of the worker.
`
      },
      {
        id: "material-requests",
        title: "Material Requests",
        summary: "Log site inventory demands and track approvals.",
        readTime: "3 min read",
        lastUpdated: "June 05, 2026",
        content: `
# Material Requests

Log and manage cement, steel, bricks, and sand requirements.

- **Request**: Supervisors tap **New Material Request** and enter quantities.
- **Approval**: Contractors receive push notifications and can approve, reject, or edit.
- **Status**: Visual indicators show "Pending", "In Transit", or "Delivered".
`
      },
      {
        id: "site-progress",
        title: "Site Progress Tracker",
        summary: "Visualize project completion timelines.",
        readTime: "2 min read",
        lastUpdated: "June 01, 2026",
        content: `
# Site Progress

Track milestones and project completion percentages.

- Upload daily site photos to build progress galleries.
- Compare actual timeline vs. scheduled timeline.
- Generate client-ready progress summary reports.
`
      }
    ]
  },
  {
    id: "worker-management",
    title: "Worker Management",
    description: "Onboard, organize, and manage worker profiles and historical data",
    articles: [
      {
        id: "add-worker",
        title: "Add Worker",
        summary: "Create new worker profiles with custom skills and contact details.",
        readTime: "2 min read",
        lastUpdated: "July 2, 2026",
        content: `
# Onboarding a New Worker

Keep your employee records complete. Follow these steps to register workers.

### Steps:
1. Go to the **Workers** tab on the dashboard.
2. Tap **+ Add Worker**.
3. Enter their name, mobile number, and select primary skills (e.g., Mason, Carpenter, Laborer).
4. Set their default wage details (e.g., ₹500/day).
5. Attach optional documents (Aadhaar or identity proof).
6. Tap **Save Worker**.
`
      },
      {
        id: "remove-worker",
        title: "Remove Worker",
        summary: "Remove workers from active rosters while keeping historic data.",
        readTime: "2 min read",
        lastUpdated: "June 28, 2026",
        content: `
# Removing Workers

If a worker leaves your project, you can archive their profile.

- Go to worker profile settings.
- Select **Archive Worker** (do not use delete if you wish to retain salary records).
- Archived workers will no longer appear on active attendance registers but their history remains preserved in reports.
`
      },
      {
        id: "update-worker",
        title: "Update Worker Details",
        summary: "Modify worker profile photos, phone numbers, and emergency contacts.",
        readTime: "2 min read",
        lastUpdated: "June 25, 2026",
        content: `
# Updating Worker Profiles

Edit worker credentials easily.

- Select the worker.
- Tap **Edit Profile**.
- Update banking info, phone details, or photo avatars.
- Tap **Save changes**.
`
      },
      {
        id: "wage-settings",
        title: "Wage Settings",
        summary: "Configure daily rates, piece rates, or monthly salaries.",
        readTime: "3 min read",
        lastUpdated: "June 22, 2026",
        content: `
# Wage Settings

Configure custom payout parameters for different types of workers.

- **Daily Wage**: Base pay for a standard 8-hour shift.
- **Hourly Wage**: Pay calculated by hours worked.
- **Piece Rate**: Pay per unit completed (e.g., number of bricks laid).
`
      },
      {
        id: "worker-profile",
        title: "Worker Profile Overview",
        summary: "Review worker contact info and emergency numbers.",
        readTime: "2 min read",
        lastUpdated: "June 18, 2026",
        content: `
# Worker Profile

The worker profile card serves as the central hub for:
- Contact Details
- Emergency Numbers
- Current Site Allocation
- Skills Badges
`
      },
      {
        id: "worker-history",
        title: "Worker History",
        summary: "Track past sites, attendance consistency, and past wages.",
        readTime: "3 min read",
        lastUpdated: "June 15, 2026",
        content: `
# Worker History Logs

View historic performance metrics.

- Attendance consistency chart (e.g., 92% attendance).
- Log of all historical sites they worked on.
- Total lifetime payouts received through Haajari App.
`
      }
    ]
  },
  {
    id: "salary",
    title: "Salary & Payouts",
    description: "Calculate wages, payouts, advances, and export financial summaries",
    articles: [
      {
        id: "salary-calculation",
        title: "Salary Calculation",
        summary: "How daily wages, overtime, and advances calculate totals automatically.",
        readTime: "3 min read",
        lastUpdated: "July 5, 2026",
        content: `
# Salary Calculation Engine

Haajari App calculates wages in real-time, eliminating manual diary errors.

### The Formula:
$$\\text{Total Payable} = (\\text{Days Worked} \\times \\text{Daily Rate}) + \\text{Overtime Pay} - \\text{Advance Payments}$$

### How It Works:
- Attendance registers automatically feed into the salary module.
- Advances logged by supervisors are auto-deducted from the net payable sum.
- Balance due is updated instantly.
`
      },
      {
        id: "daily-rate",
        title: "Daily Rate Settings",
        summary: "Set default rates and override them for specific days.",
        readTime: "2 min read",
        lastUpdated: "June 30, 2026",
        content: `
# Daily Rate Configuration

Assign specific daily values to skilled vs. unskilled workers.

- Easily change base rates under worker profile settings.
- Enable temporary holiday bonuses or Sunday overrides where needed.
`
      },
      {
        id: "custom-wage",
        title: "Custom Wages & Advances",
        summary: "Log advances (kharchi) and custom payouts.",
        readTime: "2 min read",
        lastUpdated: "June 27, 2026",
        content: `
# Custom Wages & Advances

Workers frequently require advance cash (kharchi). Haajari handles this gracefully.

- Tap **Add Advance / Debit** on the worker's dashboard.
- Input the amount (e.g., ₹2000) and the reason (e.g., festival advance).
- This is automatically subtracted from the next salary sheet.
`
      },
      {
        id: "payment-history",
        title: "Payment History",
        summary: "Review paid amounts and outstanding balances.",
        readTime: "2 min read",
        lastUpdated: "June 22, 2026",
        content: `
# Payment History

A transaction ledger for every worker.

- Track status: **Paid**, **Partially Paid**, or **Pending**.
- View history of past transactions with reference numbers.
`
      },
      {
        id: "export-salary-report",
        title: "Export Salary Report",
        summary: "Get payslips and PDF summaries for accountant records.",
        readTime: "3 min read",
        lastUpdated: "June 18, 2026",
        content: `
# Exporting Salary Reports

Make payroll handovers easy.

- Download complete Excel summary sheet.
- Export individual worker **Pay Slips** in PDF format containing work days, overtime, advances, and final signature fields.
`
      }
    ]
  },
  {
    id: "ai-assistant",
    title: "AI Assistant",
    description: "Interact with Haajari AI for instant voice updates and analysis",
    articles: [
      {
        id: "ai-chat",
        title: "AI Chat Assistant",
        summary: "How to chat with Haajari AI to query attendance details.",
        readTime: "3 min read",
        lastUpdated: "July 1, 2026",
        content: `
# Haajari AI Chat Assistant

Haajari App features an advanced AI system that understands construction terms and worker queries.

### Things you can ask Haajari AI:
- *"Who was absent yesterday at the central site?"*
- *"Calculate the total outstanding salary for Rajan this month."*
- *"Which site has the lowest attendance rate this week?"*

Just open the **AI Assistant** tab and start typing in your regional language.
`
      },
      {
        id: "voice-assistant",
        title: "Voice Assistant Integration",
        summary: "Ask questions out loud in regional languages.",
        readTime: "2 min read",
        lastUpdated: "June 28, 2026",
        content: `
# Voice Assistant

No typing required. Tap the microphone icon, speak, and let the AI process calculations.

- Available in Hindi, English, Marathi, Telugu, and more.
- Perfect for contractors on the move.
`
      },
      {
        id: "ai-limitations",
        title: "AI Limitations",
        summary: "Understand what queries the AI can and cannot handle.",
        readTime: "2 min read",
        lastUpdated: "June 25, 2026",
        content: `
# AI Limitations

While our AI is advanced, it has boundaries:
- It cannot approve material requests without user confirmation.
- It cannot make payments; it only computes outstanding amounts.
- Always cross-verify financial calculations before issuing transfers.
`
      },
      {
        id: "ai-permissions",
        title: "AI Permissions Setup",
        summary: "Grant or restrict AI data indexing permissions.",
        readTime: "2 min read",
        lastUpdated: "June 22, 2026",
        content: `
# AI Permissions

Control which datasets the AI can read.

- Turn on/off AI access to financial dashboards.
- Restrict AI access on supervisor accounts to ensure data separation.
`
      },
      {
        id: "ai-read-only-mode",
        title: "AI Read-only Mode",
        summary: "Ensure AI only analyses data without modifying sheets.",
        readTime: "2 min read",
        lastUpdated: "June 18, 2026",
        content: `
# AI Read-only Mode

By default, the AI operate in Read-Only Mode. It cannot delete worker profiles or alter attendance registers. It simply reads, analyzes, and presents the requested summaries.
`
      },
      {
        id: "ai-privacy",
        title: "AI Data Privacy & Security",
        summary: "Learn how your private site data is secured.",
        readTime: "3 min read",
        lastUpdated: "June 15, 2026",
        content: `
# AI Privacy

Your project details are secure.

- We do not use your proprietary workforce data or salaries to train general public models.
- All AI processing is sandbox-isolated and fully compliant with data encryption standards.
`
      }
    ]
  },
  {
    id: "notifications",
    title: "Notifications",
    description: "Configure notifications across Push, WhatsApp, and Email",
    articles: [
      {
        id: "push-notifications",
        title: "Push Notifications",
        summary: "Set up mobile push notifications for instant alerts.",
        readTime: "2 min read",
        lastUpdated: "July 1, 2026",
        content: `
# Push Notifications

Stay updated with real-time activities.

### Enable Mobile Alerts:
1. Navigate to **Settings** -> **Notification Settings**.
2. Toggle **Push Notifications** to Active.
3. Choose alerts:
   - Supervisor checked in.
   - Material request created.
   - Attendance summary complete.
`
      },
      {
        id: "whatsapp-notifications",
        title: "WhatsApp Alerts Integration",
        summary: "Send daily attendance and payslip notifications via WhatsApp.",
        readTime: "3 min read",
        lastUpdated: "June 28, 2026",
        content: `
# WhatsApp Alerts

Send PDF reports and payroll sheets directly to your workers or clients on WhatsApp.

- Enable **WhatsApp Integration** in settings.
- The app will automatically send a summary text to the contractor every evening at 7:00 PM.
`
      },
      {
        id: "email-notifications",
        title: "Email Reports Configuration",
        summary: "Automate delivery of reports to your accounting inbox.",
        readTime: "2 min read",
        lastUpdated: "June 25, 2026",
        content: `
# Email Notifications

Receive weekly and monthly PDF invoices and reports automatically.

- Add your accountant's email in settings.
- Schedule automatic exports for the 1st of every month.
`
      }
    ]
  },
  {
    id: "reports",
    title: "Reports",
    description: "Generate, schedule, and export business and attendance reports",
    articles: [
      {
        id: "daily-report",
        title: "Daily Reports",
        summary: "Overview of daily site metrics.",
        readTime: "2 min read",
        lastUpdated: "July 2, 2026",
        content: `
# Daily Reports

Get a daily summary of site operations.

- Highlights: Total Present Count, Total Advances Paid, Weather/Photo updates.
- Auto-sent to contractor daily.
`
      },
      {
        id: "weekly-report",
        title: "Weekly Reports",
        summary: "Weekly wage summaries and workforce analysis.",
        readTime: "2 min read",
        lastUpdated: "June 29, 2026",
        content: `
# Weekly Reports

Analyze weekly spending.

- Computes weekly attendance averages.
- Tracks labor expenditure compared to budget limits.
`
      },
      {
        id: "monthly-report",
        title: "Monthly Reports",
        summary: "Complete payroll overview for month-end reconciliation.",
        readTime: "3 min read",
        lastUpdated: "June 25, 2026",
        content: `
# Monthly Reports

The ultimate reconciliation document for your business.

- Displays month-long grid for all active workers.
- Includes total tax calculations, advance tallies, and final payments.
`
      },
      {
        id: "export-pdf",
        title: "Export to PDF",
        summary: "Save files as printer-friendly PDF documents.",
        readTime: "2 min read",
        lastUpdated: "June 20, 2026",
        content: `
# Export to PDF

Generate clean, branded PDF pages.

- Tap **Export** -> **Select PDF**.
- Clean styling ready to print on standard A4 paper.
`
      },
      {
        id: "export-excel",
        title: "Export to Excel (.xlsx)",
        summary: "Export raw attendance and salary spreadsheets for Excel.",
        readTime: "2 min read",
        lastUpdated: "June 15, 2026",
        content: `
# Export to Excel

Load data directly into Tally, QuickBooks, or Microsoft Excel.

- Formatted tables with separate tabs for Attendance and Payouts.
`
      }
    ]
  },
  {
    id: "subscription",
    title: "Subscription",
    description: "Billing settings, payment options, and feature differences",
    articles: [
      {
        id: "free-plan",
        title: "Free Plan Details",
        summary: "Understand what features are included in the Free tier.",
        readTime: "2 min read",
        lastUpdated: "July 3, 2026",
        content: `
# Free Plan Features

The free version of Haajari App is designed for small teams.

### Included:
- Up to **1 Site**
- Up to **10 Workers**
- Standard Attendance (No photo validation)
- Basic PDF reports
`
      },
      {
        id: "premium-plan",
        title: "Premium Plan Details",
        summary: "Explore advanced capabilities like Geofencing, Photo check-in, and AI.",
        readTime: "3 min read",
        lastUpdated: "July 1, 2026",
        content: `
# Premium Plan Features

Unlock maximum potential for growing construction firms.

### Included:
- **Unlimited Sites** & **Unlimited Workers**
- Geofencing & Photo Verification
- AI Voice Assistant
- Custom Excel Reports & WhatsApp automated messages
- Multi-supervisor roles
`
      },
      {
        id: "payment-methods",
        title: "Supported Payment Methods",
        summary: "Credit Cards, UPI, Netbanking, and Google Pay support.",
        readTime: "2 min read",
        lastUpdated: "June 28, 2026",
        content: `
# Payment Methods

We support multiple channels for subscription payments:
- **UPI** (PhonePe, Google Pay, Paytm)
- **Credit/Debit Cards** (Visa, Mastercard, RuPay)
- **Netbanking**
`
      },
      {
        id: "upgrade",
        title: "How to Upgrade",
        summary: "Step-by-step walkthrough to transition to Premium.",
        readTime: "2 min read",
        lastUpdated: "June 25, 2026",
        content: `
# How to Upgrade to Premium

1. Open the app and tap the **Premium Banner** or go to **Settings** -> **Billing**.
2. Select your cycle: **Monthly** or **Annual** (Save 20%).
3. Click **Upgrade Now**.
4. Complete payment. Your account is upgraded instantly.
`
      },
      {
        id: "cancel-subscription",
        title: "How to Cancel Subscription",
        summary: "Cancel subscription and return to Free plan safely.",
        readTime: "2 min read",
        lastUpdated: "June 20, 2026",
        content: `
# Canceling Subscription

You can cancel anytime.

- Tap **Settings** -> **Billing** -> **Cancel Subscription**.
- Your premium access will continue until the end of the current billing cycle.
`
      }
    ]
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    description: "Common problems and instant resolutions",
    articles: [
      {
        id: "app-not-opening",
        title: "App Not Opening",
        summary: "Steps to fix crash on launch or loading freezes.",
        readTime: "2 min read",
        lastUpdated: "July 5, 2026",
        content: `
# App Not Opening Troubleshooting

If the app freezes on the splash screen, follow these fixes:

1. **Clear App Cache**: Go to Android settings -> Apps -> Haajari -> Storage -> Clear Cache.
2. **Update App**: Make sure you are running the latest version from the Play Store.
3. **Restart Device**: Reboots clear temporary RAM glitches.
`
      },
      {
        id: "internet-issues",
        title: "Offline Mode & Syncing",
        summary: "How Haajari works without internet connection.",
        readTime: "3 min read",
        lastUpdated: "June 30, 2026",
        content: `
# Offline Mode Support

Haajari App works 100% offline.

- Mark attendance without internet connectivity.
- Data is saved securely in local storage.
- Once connection is restored, the app automatically syncs back with the cloud.
`
      },
      {
        id: "sync-issues",
        title: "Data Sync Issues",
        summary: "Forces updates when cloud is not in sync.",
        readTime: "2 min read",
        lastUpdated: "June 28, 2026",
        content: `
# Data Sync Issues

If sheets aren't updating:
- Pull down to refresh on the home dashboard.
- Go to settings and tap **Force Sync Data**.
`
      },
      {
        id: "attendance-not-saving",
        title: "Attendance Not Saving",
        summary: "Resolutions for submission failure warnings.",
        readTime: "2 min read",
        lastUpdated: "June 25, 2026",
        content: `
# Attendance Not Saving

If you get save errors:
- Ensure the app has permission to write to storage.
- Check if you have an active site selected.
`
      },
      {
        id: "login-error",
        title: "Login Errors",
        summary: "Resolving incorrect OTP or registration locks.",
        readTime: "2 min read",
        lastUpdated: "June 22, 2026",
        content: `
# Login Errors

Common issues:
- **No OTP Received**: Check cellular range, DND settings.
- **Incorrect OTP**: Wait for the timer and tap **Resend**.
`
      },
      {
        id: "camera-permission",
        title: "Camera Permission Details",
        summary: "How to grant camera permissions for photo verify.",
        readTime: "2 min read",
        lastUpdated: "June 18, 2026",
        content: `
# Camera Permission Setup

Photo verification requires camera access.

- Go to Phone Settings -> Apps -> Haajari -> **Permissions**.
- Select **Camera** -> **Allow only while using the app**.
`
      },
      {
        id: "microphone-permission",
        title: "Microphone Permission Details",
        summary: "Setting up mic access for voice notes and AI.",
        readTime: "2 min read",
        lastUpdated: "June 15, 2026",
        content: `
# Microphone Permission

Enable voice notes.

- Go to Settings -> Apps -> Haajari -> **Permissions**.
- Set **Microphone** to **Allow**.
`
      }
    ]
  }
];
