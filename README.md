# Job portal - GL Project

### Project Map
[Kanban](https://trello.com/invite/b/eJPzmXLB/ATTI2a8511444eee5a0b4e02199778e7c4d1989D1196/intership)

[UML Class](https://lucid.app/lucidchart/84d27aad-c3a6-4900-bb72-a0c722a8921b/edit?viewport_loc=-676%2C-492%2C4440%2C2092%2CHWEp-vi-RSFO&invitationId=inv_9282cf6f-ad8e-45dc-a529-187811c8b9cc)


## Run project on localhost
**1. Clone project**

	git clone https://github.com/slimanesedrati/job-portal.git
 
**2. Setup backend "api"**

    cd api\

 Setup and activate envirnement

    py -m venv env
    env\Scripts\activate

Install requirements

	pip install -r requirements.txt

Database configuration

	py .\manage.py migrate
    py .\manage.py loaddata states.json

Run server on localhost

	py .\manage.py runserver