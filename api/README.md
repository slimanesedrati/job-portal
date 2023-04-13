# Backend Api

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