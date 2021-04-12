# CRED-T7
Team ID: CRED-T7 | Team Members: Aditya Mahajan &amp; Shantanu Singh

## Tech Stack
### Frontend

<p align="left">
 <img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/> <img alt="TailwindCSS" src="https://img.shields.io/badge/tailwindcss%20-%2338B2AC.svg?&style=for-the-badge&logo=tailwind-css&logoColor=white"/> <img alt="Redux" src="https://img.shields.io/badge/redux%20-%23593d88.svg?&style=for-the-badge&logo=redux&logoColor=white"/> 
</p>

### Backend
<p align="left">
 <img alt="Python" src="https://img.shields.io/badge/python%20-%2314354C.svg?&style=for-the-badge&logo=python&logoColor=white"/> <img alt="Django" src="https://img.shields.io/badge/django%20-%23092E20.svg?&style=for-the-badge&logo=django&logoColor=white"/> 
</p>

### Database
<p align="left">
<img alt="Postgres" src ="https://img.shields.io/badge/postgres-%23316192.svg?&style=for-the-badge&logo=postgresql&logoColor=white"/> 
</p>

## Credit Card Management System
Built a <a href="https://cred.club/">CRED</a> app Clone with the following features

<ol>
<li>Login/Register :heavy_check_mark:</li> 
<li>Adding Cards :credit_card:</li> 
<li>View Card Statements :receipt:</li> 
<li>Smart Statements containing insights about different categorical features and top 10 vendors for a card :chart:</li>  
<li>Pay bill :heavy_dollar_sign:</li> 
<li>Send reminders for payments :envelope_with_arrow:</li> 
<li>Get rewards in form of coins for timely payments :moneybag: </li> 
</ol>

## Getting started 


### Libraries Required
Use below code to install python related dependencies
```
pip install -r requirements.txt
```
Use below code to install Javascript related dependencies
```
cd frontend
npm install
```

## Testing
```
python manage.py test
```

## Starting app 
### Backend 
 ```
 python manage.py runserver
 ```
 ### Frontend 
 ```
 cd frontend
 npm run dev
 ```
 

## Database schema
<img src="https://github.com/Crio-Winter-of-Doing-2021/CRED-T7/blob/1bc2ef7562b86a4e631ee257d27c4b98f4374bf0/db_schema.PNG" alt="DBSCHEMA" align="center">

 ## API Endpoints
 Following are the api endpoints for this app.
 
 ```
 /login 
 /signup
 /cards
 /cards/1
 /cards/1/pay
 /cards/1/statements
 /cards/1/statements/04/2021
 /cards/1/smartstatements
 ```


## UI Flow
<img src="ui_flow.PNG" alt="UIFLOW" align="center">
  
