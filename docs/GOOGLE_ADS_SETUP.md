# Google AdSense Integration Guide for We Millionaire

This document provides instructions for setting up Google AdSense on the We Millionaire website. Follow these steps to monetize your website with Google ads.

## Table of Contents
1. [Creating a Google AdSense Account](#creating-a-google-adsense-account)
2. [Verifying Your Website](#verifying-your-website)
3. [Setting Up Ad Units](#setting-up-ad-units)
4. [Updating the Website Code](#updating-the-website-code)
5. [Testing Ad Placements](#testing-ad-placements)
6. [Monitoring Performance](#monitoring-performance)
7. [Compliance and Best Practices](#compliance-and-best-practices)

## Creating a Google AdSense Account

1. Go to [Google AdSense](https://www.google.com/adsense/start/) and sign in with your Google account.
2. Click on "Sign up for AdSense".
3. Enter your website URL (e.g., `www.wemillionaire.eu`).
4. Provide your contact information and payment details.
5. Accept the AdSense Terms and Conditions.
6. Submit your application.

> **Note:** Google may take a few days to a week to review and approve your application.

## Verifying Your Website

After submitting your application, Google will provide you with a verification code that needs to be added to your website:

1. Copy the AdSense verification code snippet (looks like `<script>...</script>`).
2. Open `src/app/layout.tsx` in your project.
3. Paste the verification code in the `<head>` section of the layout.
4. Deploy your website with the verification code.
5. Return to your AdSense account and click "I've placed the code on my site".

Google will crawl your site to verify the code is present before approving your account.

## Setting Up Ad Units

Once your account is approved, you'll need to create ad units:

1. Log in to your AdSense account.
2. Navigate to "Ads" > "By ad unit".
3. Click "+ New ad unit".
4. For each of the following ad placements, create an ad unit:
   - Leaderboard banner (728×90)
   - Left skyscraper (160×600)
   - Right skyscraper (160×600)
   - In-content rectangle (300×250)
   - Mobile banner (320×100)
5. For each ad unit:
   - Choose a name (e.g., "We Millionaire Leaderboard").
   - Select the appropriate ad size.
   - Choose "Display ads" as the ad type.
   - Configure any other settings as desired.
   - Click "Create".
6. After creating each ad unit, you'll receive an ad unit ID (something like `ca-pub-XXXXXXXXXXXXXXXX`). Save these IDs for the next step.

## Updating the Website Code

The website code is already set up with placeholders for your AdSense code. You need to replace these placeholders with your actual AdSense details:

1. Open `src/app/layout.tsx`.
2. Replace `ca-pub-XXXXXXXXXXXXXXXX` with your actual AdSense Publisher ID.
3. In the initialization script, update each ad slot with the correct ad unit ID:
   ```javascript
   ins.setAttribute('data-ad-slot', 'YOUR_AD_SLOT_ID_HERE');
   ```
   Replace `YOUR_AD_SLOT_ID_HERE` with the corresponding ad unit ID for each ad format.

4. Save the changes and deploy your updated website.

## Testing Ad Placements

After deploying the updated code:

1. Visit your website in different browsers and devices to ensure ads are displaying correctly.
2. Use Google's [Ad Manager Preview Tool](https://admanager.google.com/home/) to test how your ads look.
3. Check the browser console for any errors related to AdSense.
4. Verify that ads are responsive and fit well in their containers at different screen sizes.

## Monitoring Performance

Once your ads are live:

1. Log in to your AdSense account regularly to monitor performance.
2. Check key metrics such as:
   - Page views
   - Impressions
   - Click-through rate (CTR)
   - Estimated earnings
3. Use the AdSense dashboard to identify which ad placements perform best.
4. Consider A/B testing different ad placements and formats to optimize revenue.

## Compliance and Best Practices

To maintain compliance with Google's policies and maximize your earnings:

1. **Content Guidelines:**
   - Ensure your website content complies with [AdSense Program Policies](https://support.google.com/adsense/answer/48182).
   - Avoid prohibited content such as adult material, illegal content, or copyright-infringing material.

2. **Ad Placement:**
   - Don't place more than 3 AdSense ads per page.
   - Don't place ads in a way that encourages accidental clicks.
   - Maintain a good balance between content and ads.

3. **User Experience:**
   - Ensure ads don't negatively impact your site's loading speed.
   - Make sure ads don't disrupt the user experience.
   - Consider using lazy loading for ads below the fold.

4. **Legal Requirements:**
   - Include a privacy policy that discloses your use of AdSense.
   - Comply with regulations like GDPR for European users.
   - Implement a cookie consent mechanism if required.

By following these guidelines, you'll maximize your chances of earning revenue through AdSense while maintaining a good user experience on your website.

---

For more information, visit the [Google AdSense Help Center](https://support.google.com/adsense/). If you encounter any issues with the integration, consult the [AdSense Troubleshooter](https://support.google.com/adsense/answer/9906726). 