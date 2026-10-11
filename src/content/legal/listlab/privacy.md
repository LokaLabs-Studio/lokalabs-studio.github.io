---
title: Privacy Policy
app: listlab
kind: privacy
version: '1.0'
updated: 2026-10-11
description: How ListLab handles your information. Your tasks, notes and recordings stay on your phone; this page explains the few things that do leave it, and why.
summary:
  - Your tasks, notes, voice notes, routines, alarms and settings are stored only on your phone. ListLab has no accounts and no servers, so we can’t see your data.
  - The optional AI runs entirely on your phone. If you turn it on, the model files download from Loka Labs’ page on GitHub, and GitHub sees your IP address. What you capture is never uploaded.
  - ListLab includes Google’s ad SDK for one optional rewarded ad. The SDK starts when the app opens and can use your device’s Advertising ID. An ad is only requested when you tap “Watch an ad”, and it’s non-personalised.
  - Optional one-time purchases go through Google Play. We never see your card details.
  - If Android backup is on, your phone may copy ListLab’s database and settings to your own Google account. Recordings, other capture files and AI models aren’t included.
  - You can export, restore or delete everything yourself in Settings.
changes:
  - version: '1.0'
    date: 2026-10-11
    note: First published version.
---

## Who we are

ListLab (package `com.lokalabs.listlab`) is made by Loka Labs, a trading name of Yaser Ibrahim Abdullah Allahim, based in the Kingdom of Saudi Arabia. In this policy, “we” and “us” mean Loka Labs, and “the app” means ListLab on Android.

If you have a question about this policy or your data, email [lokalabs.studio@gmail.com](mailto:lokalabs.studio@gmail.com). A real person reads every message.

## Data that stays on your phone

ListLab is built to work offline, without an account. Everything you enter is saved in a private database (SQLite) inside the app’s own storage on your phone, and the files you capture are saved next to it. None of it is sent to us, and we have no server that could receive it.

That on-device data includes:

- **What you capture:** typed text, voice recordings, and anything you share into ListLab from another app (messages, screenshots, images, audio and PDFs). ListLab keeps the original so you can go back to it.
- **What you organise:** tasks, lists, notes, priorities, repeats, reminders, routines, alarms and the suggestions waiting in your Inbox.
- **About you:** the name you give during setup (optional), the goals you pick, and your settings, such as theme, time format, the modules you turned on and the app icon you picked.
- **Prayer times, if you turn them on:** your calculation method and either an approximate location or a city you chose from a list built into the app.

When you delete a single task or capture, ListLab hides it right away, but the record and any recording stay in the app’s storage until you use **Delete everything** or uninstall the app.

## The microphone

ListLab records audio only while you’re recording a voice note: when you hold the + key, tap the mic, or use the Quick Settings tile. The recording is saved on your phone. If the AI is on, your phone transcribes it. It’s never uploaded.

## Location (prayer times only)

Prayer times are off by default. If you turn them on, you can choose a city from a list built into the app, or let ListLab ask Android for your approximate location once. ListLab rounds that position to about a kilometre, saves it on your phone and calculates the times there. It never asks for your precise location or for location in the background, and your location never leaves your phone.

## Optional AI, on your phone

AI is off until you turn it on in Settings, then AI.

- **Downloading a model:** the model files are hosted on GitHub ([github.com/LokaLabs-Studio/listlab-models](https://github.com/LokaLabs-Studio/listlab-models)). When you download one, your phone sends GitHub a standard web request that includes your IP address, and GitHub handles it under the [GitHub Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement). Nothing about you or your captures is sent. You can choose to download on Wi-Fi only, and ListLab checks every file against a fingerprint (SHA-256) before using it.
- **Your own model:** if you load your own model file, Android’s file picker opens and ListLab reads only the file you pick.
- **Processing:** speech-to-text, reading text in images and turning captures into suggestions all happen on your phone. Suggestions wait in your Inbox, and nothing becomes a task until you tap **Keep**.
- **Reading text in images:** ListLab uses Google’s ML Kit text recognition, with its model built into the app. The image and its text stay on your phone. ML Kit sends Google technical usage information, such as device model and Android version, app version, performance figures and a per-installation identifier, which Google uses for diagnostics and usage analytics. See [Google’s ML Kit data disclosure](https://developers.google.com/ml-kit/android-data-disclosure).

## Read-aloud

The morning recap and routine steps can be read aloud by your phone’s text-to-speech engine, the one chosen in Android’s settings. ListLab hands it only the text to speak, and that engine’s own privacy terms apply.

## Backups you make yourself

- **Export:** in Settings, under “Your data”, **Export a copy** saves a JSON file with your tasks, lists, routines, alarms, the text of your captures and your settings. Android’s folder picker opens and you choose where the file goes. Recordings, images, PDFs and AI models aren’t in the export. If you later move the file to a cloud drive or send it to someone, that service’s privacy policy applies to the copy.
- **Restore:** **Restore from a file** opens Android’s file picker, and ListLab reads only the file you pick. Restoring replaces what’s currently on the phone.

We never receive your exports.

## Android backup

ListLab allows Android’s built-in backup for its database and settings. Recordings, other capture files and AI models are excluded. If you have backup turned on for your Google account, Android may copy that data to the account and restore it when you set up a new phone. This is a feature of Android and your Google account, not of ListLab, and Google handles that copy under the [Google Privacy Policy](https://policies.google.com/privacy).

You can turn backup off, or delete the backed-up copy, in your phone’s settings under Google, then Backup.

## Advertising (Google AdMob)

ListLab has exactly one ad: an optional rewarded video you can watch to open the icon vault (extra app icons) for 2&nbsp;minutes. There are no banner ads and no pop-up ads.

To make that possible, the app includes the Google Mobile Ads SDK, provided by Google:

- **The SDK starts when ListLab opens,** even if you never watch an ad. It may contact Google at startup.
- **An ad is only requested when you tap “Watch an ad”.** ListLab asks for non-personalised ads only, which means Google doesn’t use your past activity to pick the ad.
- **What Google may process:** your device’s Advertising ID, your IP address (which gives a rough location), device and app information, and how you interact with the ad. Google uses this to serve and measure ads, limit how often you see the same ad, and prevent fraud. On newer Android versions, the SDK may also use Android’s Privacy Sandbox advertising features.

Google processes this data as an independent company under the [Google Privacy Policy](https://policies.google.com/privacy). You can read more in [How Google uses information from sites or apps that use its services](https://policies.google.com/technologies/partner-sites).

You can reset or delete your Advertising ID at any time in your phone’s settings under Privacy, then Ads (the exact wording varies by phone).

## Purchases (Google Play Billing)

ListLab offers five optional one-time support purchases, from $1.99 to $49.99 (shown in your local currency). Each one opens the icon vault permanently. They are not subscriptions and nothing renews. No purchase is needed to avoid ads, because the only ad is one you choose to watch.

Payments are handled entirely by Google Play. We never receive your card or bank details. Google shares standard order records with developers (such as the order number, the product bought, the date and the country), which we may use to answer refund or support questions. The app itself only records, on your phone, which support level you bought.

## Notifications and alarms

Reminders, alarms and the morning recap are local: ListLab schedules them on your phone, with no push service and no server involved. Alarms can show full screen over the lock screen so they wake you, and ListLab sets them again after your phone restarts or the time zone changes. You can turn notifications off in the app or in Android’s notification settings.

## Permissions

| Permission | Why ListLab asks for it |
| --- | --- |
| Internet and network state | Downloading an AI model you chose, the optional rewarded ad, and Google Play purchases. |
| Microphone | Voice notes, only while you record. |
| Approximate location | Prayer times. Optional, once, on your phone. |
| Notifications | Reminders, routine progress and the morning recap. |
| Alarms and reminders | So reminders and alarms ring at the exact minute. |
| Full-screen notifications | So a ringing alarm can show over the lock screen. |
| Foreground services | Keeping an alarm ringing, downloading a model, and finishing a capture (transcribing or reading it) after you leave the app. |
| Vibration, wake lock | Alarm and reminder vibration, and waking the screen for an alarm. |
| Run at startup | Setting your alarms and reminders again after a restart. |
| Google Play Billing | Optional support purchases. |
| Advertising ID and ad services | Used by Google’s ad SDK for the optional rewarded ad. |

ListLab doesn’t ask for your precise location, camera, contacts, calendar or photo library. Files you share into it, or pick yourself, are the only files it reads. Some Android libraries included in the app declare extra technical permissions (for example, storage access on Android 12 and older, or showing a badge on your launcher icon). ListLab’s own code doesn’t use them to collect anything.

## What we don’t do

- We don’t run accounts, servers or a database of users.
- We don’t include analytics or crash-reporting tools of our own.
- We don’t sell or share your personal information.
- We don’t see your tasks, notes, recordings or anything else you capture.

Google Play gives every developer aggregated statistics, such as install counts, and crash reports that Android users choose to share. Those come from Google Play, not from ListLab.

## Children

ListLab is meant for people aged 13 and over and isn’t directed at children. We don’t knowingly collect information from children.

## Keeping and deleting your data

Your data stays on your phone until you delete it. You can erase it in Settings, under “Your data”, then **Delete everything**, or by uninstalling the app. Removing an AI model in Settings, then AI, deletes the model file. The [Delete your data](/apps/listlab/delete-data/) page walks through every option, including your Google backup and Advertising ID.

Google keeps ad, purchase and backup data according to its own policies. If you email us, we keep the conversation only as long as we need it to help you, and we delete it sooner if you ask.

## Your rights

Depending on where you live (for example under Saudi Arabia’s Personal Data Protection Law, the GDPR in the EU, the UK GDPR, or California law), you have rights to access, correct, delete and move your personal data, and to object to some uses of it.

Because ListLab keeps your data on your phone, you can exercise most of these rights directly in the app: export it, edit it or delete it. For data held by Google (ads, purchases, backups), use [Google’s privacy tools](https://myaccount.google.com/data-and-privacy). For anything else, email us and we’ll help. You also have the right to complain to your local data protection authority. In Saudi Arabia, that is the Saudi Data and Artificial Intelligence Authority (SDAIA).

## Security

Your ListLab data sits in the app’s private storage, protected by Android’s app sandbox and your phone’s lock screen and encryption. Model downloads are checked against a fingerprint (SHA-256) before ListLab uses them. Connections to GitHub, Google Play and AdMob use encrypted HTTPS. Keep your exported backup files somewhere safe, since they contain everything you’ve written down.

## Changes to this policy

If ListLab changes how it handles data, we’ll update this page before the change ships, change the version number and date at the top, and list the change in the version history below.

## Contact

Loka Labs, a trading name of Yaser Ibrahim Abdullah Allahim, Kingdom of Saudi Arabia. Email [lokalabs.studio@gmail.com](mailto:lokalabs.studio@gmail.com).
