# Design Plan - Front End

## General

Two color modes: light and dark

- Based on user browser preference

Get and use custom font "Love Ya Like a Sister"

*Reddit* is used as inspiration given that it is a message board as well

## App Main Page

### Header

- Contains Logo, Title, Subtitle, Search, Light/Dark Control

### \> Side Nav

- Router-links to navigate site
  - Text color & svg change color if active
- PNCF Promotions
- Board Guidelines

### Content

- Contains Side Nav and Content

## Board (Home) Page
- Contains message board for everyone to see
- Fetches the 10 most recent messages from database
- User can load more when they scroll down
- Site checks for new messages every 2 minutes (on hold - uses resources)

## Submission Page
- Dedicated submission page for messages


# Moderators

PNCF may have future interns moderate for them. Create a lesser admin account where
superuser can configure permission

## Accessing the Admin Page

The link for this page will be on the official PNCF website, but those who are
aware of it may also simply bookmark the page. The link will lead to a login page
where the PNCF member will need to use their own credentials to login. 
The superuser (Mrs. Butcher) will have the ability to add and remove admin 
accounts. There will also be a log that displays what each user has done on 
the admin page.

## Reviewing Messages

- Accept/Reject Message Suggestions
- Delete previous ones easily by clicking a trash icon
- Click words to asterisk(*) them out
- Edit already accepted submissions
- Allow mods to highlight the message
  - Modifies the object of that message

## Configuring Promotions

- Add/remove promotions
- Choose layout for promotion area
  - 1 Single
  - 2 Side by Side
  - 2 Stacked
  - 3 > 1 Long and 2 Half Sized
- Layout currently on the website will already be selected. From Database


# Database

## Tables

- Admin
  - username    String
  - password    String
  - first name  String
  - lastname    String
  - superuser   boolean
  - commits     Integer

- Message
  - date - DateTime
  - message - String

- Submission
  - date - DateTime
  - message - String

- Log
  - date - DateTime
  - action - String
  - user - reference to admin

## Actions
Come back to fix notFound conditionals

- Admin
  - Create a new Admin
  - authenticate
  - Grant superuser
  - Revoke superuser
  - get all admins
  - delete admin
  - (Maybe dont delete but remove access)

- Message
  - Create
  - Delete
  - Modify
  - Get next 20

- Submission
  - Create
  - Delete
  - get all

- Log
  - Create
  - get next 20

___
# Possible Additions

- Allow moderators to pin or highlight messages
  - Either for set time or permanently on a seperate page
- Threads and replies?
  - Messages on the message board may have a numerical indicator for # of replies
  - Indicator opens a page or dialog with that messages thread
- Notification system
- Board Guidelines
  - Reduce to simple rules
  - Have full guidelines on about
  - Notify at bottom more complete rules in about page
- Deactivate instead of delete admins
- Announcements?
- Highlight messages sent by admins?


- Find way to store promotion area settings and images
- Allow admins to modify past messages
- When accepting message, check if id already exists and remove current so no overlap
- allow super admins to see usernames and passwords
- If no submission, say so
- Add main site to top left of header
- Fix databases to easily choose which one to use