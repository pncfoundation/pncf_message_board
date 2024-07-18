# Design Plan - Front End

## General

Two color modes: light and dark

- Light mode is the default

Needs accent colors of orange and green

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

### Footer

- Links for main site and login for moderators

## Board (Home) Page
- Contains message board for everyone to see
- Fetches the 10 most recent messages from database
- User can load more when they scroll down
- Site checks for new messages every minute


# Moderators

## Reviewing Messages

- Accept/Reject 
- Delete previous ones easily by clicking a trash icon
- Click words to asterisk(*) them out