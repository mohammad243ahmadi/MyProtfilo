# Portfolio Contact Form Setup

This document provides instructions for setting up the contact form functionality using EmailJS.

## Setting up EmailJS

1. **Create an EmailJS Account**

   - Go to [EmailJS website](https://www.emailjs.com/) and create an account.
   - After registration, log in to your EmailJS dashboard.

2. **Create an Email Service**

   - In your dashboard, go to "Email Services" tab.
   - Click "Add New Service" and choose an email provider (Gmail, Outlook, etc.).
   - Follow the instructions to connect your email account.
   - Remember the service ID that is generated.
   service_s648v8q

3. **Create an Email Template**

   - Go to the "Email Templates" tab in your dashboard.
   - Click "Create New Template".
   - Design your email template. You can use the following variables in your template:
     - `{{from_name}}`: Sender's name
     - `{{reply_to}}`: Sender's email address
     - `{{message}}`: Message content
   - Save your template and note the template ID.
   template_yjsotxy

4. **Update Contact.jsx File with Your IDs**
   - Open `src/components/Contact.jsx`
   - Update the following constants with your actual IDs:
     ```javascript
     const serviceId = "YOUR_EMAILJS_SERVICE_ID";
     const templateId = "YOUR_EMAILJS_TEMPLATE_ID";
     const userId = "YOUR_EMAILJS_USER_ID"; // This is your EmailJS user ID (public key)
     ```

## Finding Your User ID (Public Key)

1. Go to the "Integration" tab in your EmailJS dashboard.
2. Copy the "User ID" (public key) under the "Browser" section.

## Testing the Contact Form

After setting up EmailJS and updating the IDs in your code, you should be able to:

1. Fill out the contact form on your website.
2. Click "Send Message".
3. Receive an email with the form data.

If there are any issues, check the browser console for errors and verify that all IDs are correct.
